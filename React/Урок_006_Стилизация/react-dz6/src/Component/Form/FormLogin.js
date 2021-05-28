import React from "react";
import styles from "./FormLogin.module.scss";


class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    saveFirstName = (e) => {
        return (
            this.setState({firstName: e.target.value})
        )
    }

    saveLastName = (e) => {
        return (
            this.setState({lastName: e.target.value})
        )
    }

    eventSubmit = (e) => {
        e.preventDefault();
        console.log('submit success')
        this.setState({
            firstName: '',
            lastName: ''
        })

    }


    render() {
        return (
            <form className={styles.form} onSubmit={this.eventSubmit}>
                <input value={this.state.firstName} onChange={this.saveFirstName} required/>
                <input value={this.state.lastName} onChange={this.saveLastName} required/>
                <button>Send</button>
            </form>
        )
    }
}

export default FormLogin;

