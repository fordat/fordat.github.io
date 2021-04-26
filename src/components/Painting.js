import React from 'react';
import birds from './img/birds2.jpeg';
import sea from './img/mediterranean.jpeg'
import hand from './img/hand.jpeg'

class Painting extends React.Component {
    render() {
        return (
            <div className="painting-wrapper">
                <img className="painting" src={sea} alt="the sea"></img>
                <img className="painting" src={birds} alt="birds"></img>
                <img className="painting" src={hand} alt="hand"></img>
            </div>
        )
    }
}

export default Painting