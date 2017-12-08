import React, {Component} from "react";
import "./CarouselSamePrice.css";
import API from "../../utils/API";


class CarouselSamePrice extends Component {
    state = {
        loading: true,
        cards : []
    }
    
    // isLogin() {
    //     if(localStorage.getItem("profile")) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }


    // When the component mounts, load all cards of user and save them to this.state.cards
    componentDidMount() {
        this.loadCardsSamePrice();
    }
    // load user cards from database
    // removeCard(id) {
    //     console.log(id);
    //     // API.removeCard(id);
    // }
    loadCardsSamePrice() {
        // console.log(this);                
        API.getUserCardsSamePrice(localStorage.getItem("profile"), this.props.price)
        .then(res => {
            // console.log(res.data);
            this.setState({
                cards: res.data
            });
        }
        ).catch(err => console.log(err));
    }

    //send id of card that trader want to exchange
    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.props.ownerEmail);        
        const id = e.target.elements.userchoice.value;
        // const traderEmail = e.target.elements.userchoice.value;
        // console.log(id);
        API.ownerGet(id, this.props.ownerEmail);
    }

    render() {
        return(
            <div id="carousel_csp">
                <form onSubmit={this.handleFormSubmit.bind(this)}>
                    {/* <div className="slide">
                        <img src="https://www.paypal-gifts.com/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/t/o/toysrus_card_xxlweb.png" alt="sometext"/>
                    </div> */}
                    {/* {console.log(this)} */}
                    {
                        this.state.cards.length > 0 ? (
                            this.state.cards.map((card) => {
                            return(
                                <div className="slide slide_csp" key={card._id}>
                                    <input type="radio" name="userchoice" id={card._id} value={card._id} />
                                    <label htmlFor={card._id}><img id="img_csp" src={card.fimage} alt={card._id}/></label>
                                    {/* <button>Remove</button>                                     */}
                                </div>
                            )
                        })
                        ) : <p>You can't not trade because you don't have cards with same price</p>
                    }
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CarouselSamePrice;