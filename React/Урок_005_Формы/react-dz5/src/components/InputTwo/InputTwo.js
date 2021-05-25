import React from "react";

const ResultOne = (props) => {
    return (
        <div>
            <p>{props.x * 0.5}</p>
        </div>
    )
}

const ResultTwo = (props) => {
    return (
        <div>
            <p>{props.y * 0.05}</p>
        </div>
    )
}

class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOne: '',
            numberTwo: ''
        }
    }

    setNumberOne = (e) => {
        return (
            this.setState({numberOne: e.target.value})
        )
    }


    setNumberTwo = (e) => {
        return (
            this.setState({numberTwo: e.target.value})
        )
    }


    render() {
        return (
            <div>
                <input type="number" value={this.state.numberOne} onChange={this.setNumberOne}/>
                <ResultOne x={this.state.numberOne}/>
                <input type="number" value={this.state.numberTwo} onChange={this.setNumberTwo}/>
                <ResultTwo y={this.state.numberTwo}/>
            </div>
        )
    }

}

export default Calc;