import React from "react";


class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text:''}
    }

    textOn = () => {
        return (
            this.setState({text: 'Hello'})
        )
    }

    textOff = () => {
        return (
            this.setState({text:''})
        )
    }


    render() {
        return (
            <div>
                <button onClick={this.textOn}>Click</button>
                <div>{this.state.text}</div>
            </div>
        )
    }

}

export default Button;