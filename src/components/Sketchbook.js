import React from 'react';
import birds from '../img/birds2.jpeg';
import sea from '../img/mediterranean.jpeg'
import hand from '../img/hand.jpeg'
import stones from '../img/stones.jpg'

class Sketchbook extends React.Component {

    constructor(props) {
        super(props);

        this.modalRef = React.createRef();
        this.modalImgRef = React.createRef();
    }

    activateModal = (image) => {
        let modal = this.modalRef;

        // insert the image inside the modal
        let img = image;
        let modalImg = this.modalImgRef;

        modal.current.style.display = "block";
        modalImg.current.src = img;
    }

    deactivateModal = (e) => {
        if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
            this.modalRef.current.style.display = "none";
        }
    }


    render() {
        return (
            // todo: refactor images
            <div className="painting-wrapper">
                <div className="img-wrapper">
                    <img className="painting" src={stones} alt="stonecutters and a path" onClick={() => this.activateModal(stones)}></img>
                </div>
                <div className="img-wrapper">
                    <img className="painting" src={sea} alt="the sea" onClick={() => this.activateModal(sea)}></img>
                </div>
                <div className="img-wrapper">
                    <img className="painting" src={birds} alt="birds" onClick={() => this.activateModal(birds)}></img>
                </div>
                <div className="img-wrapper">
                    <img className="painting" src={hand} alt="hand" onClick={() => this.activateModal(hand)}></img>
                </div>
                
                {/* the modal */}
                <div id="myModal" ref={this.modalRef} className="modal" onClick={(e) => this.deactivateModal(e)}>
                    <span className="close" onClick={(e) => this.deactivateModal(e)}>&times;</span>
                    <img className="modal-content" id="img01" ref={this.modalImgRef}></img>
                    <div id="caption"></div>
                </div>
            </div>
        )
    }
}

export default Sketchbook