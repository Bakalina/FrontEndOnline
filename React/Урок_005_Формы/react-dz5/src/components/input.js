import React from "react";


const TextInput = (props) => {
    return (
        <p>{props.text}</p>
    )
}

class FormInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {text: ''}
    }

    setText = (e) => {
        this.setState({text: e.target.value})
    }


    render() {
        const textOne = this.state.text;
        const textTwo = this.state.text;

        return (
            <form>
                <input
                    value={textOne}
                    onChange={this.setText}>
                </input>
                <TextInput
                    text={textOne}/>
            </form>
        )
    }
}

class Form extends React.Component {
    render() {
        return (
            <FormInput/>
        )
    }
}


export default Form;