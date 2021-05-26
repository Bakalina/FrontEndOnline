import React from "react";
import styles from "./FormLogin.module.scss";


class FormLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className={styles.form}>
                <input/>
                <input/>
                <button>Click Me</button>
            </form>
        )
    }
}

export default FormLogin;

