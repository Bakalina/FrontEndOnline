import React from "react";
import styles from './PlusTaskBtn.module.scss';


class PlusTaskBtn extends React.Component {
    render() {
        return (
            <button className={styles.btn}>Plus</button>
        )
    }
}

export default PlusTaskBtn;
