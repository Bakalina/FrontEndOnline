import React from "react";
import styles from "./FormLogin.module.scss";


class FormLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    eventSubmit = (e) => {
        e.preventDefault();

    }


    render() {
        return (
            <form className={styles.form} onSubmit={this.eventSubmit}>
                <input/>
                <input/>
                <button>Click Me</button>
            </form>
        )
    }
}

export default FormLogin;

