import React from 'react';
import { SliderPicker } from 'react-color';

class Home extends React.Component {

    colorRef = React.createRef();

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            background: '#A3A3DE'
        };
    }


    handleChange = (color, event) => {
        this.setState({ background: color.hex });

        const colorChange = this.colorRef.current.props.color;
        console.log(colorChange);
        this.props.changeBackground(colorChange);
    }

    render() {
        return (
            <div className="slider-div">
                <p>Try me!</p>
                <br/>
                <SliderPicker
                    ref={this.colorRef}
                    color={ this.state.background }
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Home