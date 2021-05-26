import React from "react";

const Users = (props) => {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    )
}



class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastName: '',
            firstName: '',
            commentUser: ''
        }
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


    eventSubmit = (e) => {
        e.preventDefault();
    }


    render() {
        return (
            <div>
                <form onSubmit={this.eventSubmit}>
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
                    <button>send</button>
                    <Users text={JSON.stringify(this.state)} />
                </form>
            </div>
        )
    }
}


export default FormInput;