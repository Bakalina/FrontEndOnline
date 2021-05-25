import React from "react";


const TextInput = (props) => {
    return (
        <p>{props.text}</p>
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




    render() {

        const users = () => {
            const user = JSON.stringify(this.state)
        }

        return (
            <div>
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
                        <button style={{width: '50px', height: '20px'}} onClick={users}>send</button>
                    </div>
                </form>
                <TextInput text={users}/>
            </div>
        )
    }
}


export default FormInput;