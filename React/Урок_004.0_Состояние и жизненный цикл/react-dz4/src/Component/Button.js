import React from "react";
import Text from "./Text";


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {stateText: false}
        this.state = {text: ''}
    }


    textOn = () => {
        this.setState({stateText: true})
        this.setState ({text: <Text/>})
    }

    textOff = () => {
        this.setState({stateText: false})
        this.setState ({text: ''})
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