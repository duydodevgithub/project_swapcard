import React, {Component} from "react";
import Webcam from 'react-webcam';
import API from "../../utils/API";
import Modal from "react-modal";
// import Capture from "../Webcam/Capture";
import WebcamCapture from "../WebcamCapture"
import "./AddNewCard.css"

const style = {
    content : {
        position                   : 'absolute',
        top                        : '20px',
        bottom                     : '20px',
        border                     : '2px solid #ccc',
        background                 : '#fff',
        overflow                   : 'auto',
        borderRadius               : '4px',
        outline                    : 'none',
    }
  };

class AddNewCard extends Component {
    state = {
        // selectWebcam: undefined,
        front:"",
        back: ""
    }
    setRef = (webcam) => {
        this.webcam = webcam;
      }
    // selectWebcam = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         selectWebcam: true
    //     })
    // }

    captureFront = (e) => {
        e.preventDefault();
        const imageFront = this.webcam.getScreenshot();
        this.setState({
          front: imageFront,
        })
      };

    captureBack = (e) => {
        e.preventDefault();        
        const imageBack = this.webcam.getScreenshot();
        this.setState({
            back: imageBack,
        })
    }; 
    
    //get card details, store in database
    formSubmit = (e) => {
        e.preventDefault();
        const store = e.target.elements.store.value;
        const price = e.target.elements.price.value;
        const fimage = e.target.elements.fimage.value;
        // console.log(fimage);
        const bimage = e.target.elements.bimage.value;
        let exp = JSON.stringify(e.target.elements.exp.value);
        exp = exp.replace(/-/g, ".")
        API.addNewCard(store, price, exp, fimage, bimage, localStorage.getItem("profile"));
    }

    render() {
        return(
            <Modal
                style={style}
                isOpen={!!this.props.selectAddNewCard}
                onRequestClose={this.props.unselectAddNewCard}
            >
                <div>
                    <h2>Take picture of front and back, input card details</h2>
                    <hr />
                    <form onSubmit={this.formSubmit}>
                        <div className="row">
                            <div className="col-lg-2">
                                <input type="text" className="form-group" name="store"  placeholder="Store name" required/>
                            </div>
                            <div className="col-lg-2">
                                <input type="text" className="form-group" name="price"  placeholder="Price" required/>
                            </div>
                            <div className="col-lg-2">
                                <input type="date" className="form-group" name="exp"  placeholder="Exp date" required/>
                            </div>   
                            <div className="col-lg-2">
                                <input type="text" className="form-group" name="fimage"  placeholder="fimage URL" accept="image/*"  required/>
                            </div> 
                            <div className="col-lg-2">
                                <input type="text" className="form-group" name="bimage" accept="image/*"   placeholder="bimage URL" required/>
                            </div>                          
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <Webcam
                                    audio={false}
                                    height={350}
                                    ref={this.setRef}
                                    screenshotFormat="image/jpeg"
                                    width={350}
                                />
                            </div>

                            <div className="cardImage col-lg-3">
                                <button onClick={this.captureFront}>Capture front of Card</button>
                                <br />
                                <img src={this.state.front} alt=""/>
                            </div>

                            <div className="cardImage col-lg-3">
                                <button onClick={this.captureBack}>Capture back of Card</button>
                                <br />
                                <img src={this.state.back} alt=""/>
                            </div>
                        </div>
                
                        {true ? (
                            <button type="submit">Submit</button>
                        ): <p>Please capture both front and back of card</p>}
                        <button onClick={this.props.unselectAddNewCard}>Cancel</button>
                    </form>
                </div>
                <WebcamCapture selectWebcam={this.state.selectWebcam} front={this.state.front} />
            </Modal>
        )
    }
}

export default AddNewCard;