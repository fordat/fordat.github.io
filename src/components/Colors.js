import React from 'react';
import { SliderPicker } from 'react-color';

class Colors extends React.Component {

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
                <p>Help me finish up my site:</p>
                <SliderPicker className="slider"
                    ref={this.colorRef}
                    color={ this.state.background }
                    onChange={this.handleChange}
                    onChangeComplete={this.handleChange}
                />
            </div>
        )
    }
}

export default Colors