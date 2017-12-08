import Webcam from 'react-webcam';
import React, {Component} from "react";
import Modal from "react-modal";
import "./WebcamCapture.css"
class WebcamCapture extends Component {
    state = {
      front: "",
      selectWebcam: true
    }
    setRef = (webcam) => {
      this.webcam = webcam;
    }

   
    capture = (e) => {
      // e.preventDefault();
      const imageSrc = this.webcam.getScreenshot();
      this.setState({
        front: imageSrc,
        selectWebcam: false
      })
    };
   
    render() {
      return (
        <Modal
          front = {this.state.front}
          isOpen={!!this.props.selectWebcam}
          onRequestClose={this.props.unselectWebcam}
        >
          <div className="row">
            <div className="col-lg-4">
              <Webcam
                audio={false}
                height={150}
                ref={this.setRef}
                screenshotFormat="image/jpeg"
                width={350}
              />
            </div>
          </div>
      
      </Modal>
      );
    }
  }

  export default WebcamCapture;