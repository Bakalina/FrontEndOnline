import React from "react";


const TextInput = (props) => {
    return (
        <p>{props.text}</p>
    )
}

class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {lastName: ''}
        this.state = {firstName: ''}
        this.state = {commentUser: ''}
    }

    setLastName = (e) => {
        this.setState({lastName: e.target.value})
    }
    setFirstName = (e) => {
        this.setState({firstName: e.target.value})
    }
    setCommentUser = (e) => {
        this.setState({commentUser: e.target.value})
    }

    render() {

        return (
            <form>
                <input
                    value={this.state.lastName}
                    onChange={this.setLastName}>
                </input>
                <input
                    value={this.state.firstName}
                    onChange={this.setFirstName}>
                </input>
                <input
                    value={this.state.commentUser}
                    onChange={this.setCommentUser}>
                </input>
                <div>
                    <button style={{width: '50px', height: '20px'}}>send</button>
                </div>
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