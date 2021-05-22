import React from "react";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    setText(e) {
        this.setState({text: e.target.value})
    }


    render() {
        const text = this.state.text;
        return (
            <input
                value={text}
                onChange={this.setText}>
            </input>
        )
    }
}


export default Form;