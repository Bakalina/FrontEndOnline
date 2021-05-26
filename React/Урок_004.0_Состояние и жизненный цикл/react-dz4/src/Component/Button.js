import React from "react";
import Text from "./Text";


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stateText: '',
            text: ''
        }
    }


    textOn = () => {
        this.setState({
            stateText: true,
            text: <Text/>
        })

    }

    textOff = () => {
        this.setState({
            stateText: false,
            text: ''
        })

    }


    render() {
        return (
            <div>
                <button onClick={this.state.stateText ? this.textOff : this.textOn}>Click</button>
                <div>{this.state.text}</div>
            </div>
        )
    }
}

export default Button;