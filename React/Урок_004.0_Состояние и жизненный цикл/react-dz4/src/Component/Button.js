import React from "react";

const textOn = () => {
    return (
        <div>Hello</div>
    )
}

const textOff = () => {
    return (
        <div></div>
    )
}



class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: true}
    }




    render() {
        return (
            <div>
                <button onClick={this.textSt}>Click</button>
                <div>{this.state.text}</div>
            </div>
        )
    }

}

export default Button;