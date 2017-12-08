import React, {Component} from "react";
import "./CarouselNotify.css";
import API from "../../utils/API";
import AlertContainer from 'react-alert';


class CarouselNotify extends Component {
    state = {
        loading: true,
        cards : [],
        cardTrader:{}
    }
    alertOptions = {
        offset: 14,
        position: 'top right',
        theme: 'dark',
        time: 5000,
        transition: 'scale'
      }

      showAlert = () => {
        this.msg.show('Transaction success, refresh page to see your card', {
          time: 3000,
          type: 'info'
        })
      }
    
    componentDidMount() {
        this.loadProfile();
    }
    handleAcceptTrade(id, traderEmail, id2, email) {
        // console.log(id);
        API.acceptTrade(id, traderEmail, id2, email);
        this.showAlert();
        this.loadProfile();
        window.location.reload();     
        
    }   
    //function to handlecanceltrade
    handleCancelTrade(id, id2) {
        // console.log(id);
        API.cancelTradeCard(id, id2);
        this.loadProfile();
    }   
    // load user cards with chosen Boolean true from database
    loadProfile() {
        API.getTradeCards(localStorage.getItem("profile"))
        .then(res => {
            // console.log(res.data);
            this.setState({
                cards: res.data
            })
        }
        ).catch(err => console.log(err));
        
    //loadcard with expectedOwner
        API.getOtherCard(localStorage.getItem("profile"))
        .then(res => {
            console.log(res.data[0]);
            this.setState({
                cardTrader: res.data[0]
            })
        }
        ).catch(err => console.log(err));
    }

    // load trader cards with same price from database
    // loadTraderCardSamePrice() {
    //     API.getUserCardsSamePrice(localStorage.getItem("profile"), price)
    //     .then(res => {
    //         console.log(res.data);
    //         this.setState({
    //             cards: res.data
    //         })
    //     }
    //     ).catch(err => console.log(err));
    // }

    render() {
        return(
            <div id="carousel">
            {<p>You have {this.state.cards.length} requests</p>}
                    {(  
                        this.state.cards.map((card, index) => {
                            return(
                                <div className="" key={index}>
                                    <p>Trader want this card from you: </p>
                                    <img src={card.fimage} alt={index}/>
                                    <p>You will receive: </p>
                                    {!!this.state.cardTrader ? (
                                        <img src={this.state.cardTrader.fimage} alt={this.state.cardTrader._id} />
                                    ): ""}
                                    <button onClick={()=>this.handleAcceptTrade(card._id, card.traderEmail, this.state.cardTrader._id, localStorage.getItem("profile"))}>Click to trade</button> 
                                    <button onClick={()=>this.handleCancelTrade(card._id, this.state.cardTrader._id)}>Click to cancel</button>                                                     
                                </div>
                            )
                        })
                        ) 
                    }
                    {/* alert message */}
                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
            </div>
        )
    }
}

export default CarouselNotify;