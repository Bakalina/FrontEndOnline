import React from "react";

class Text extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'Hello friend :)'}
    }

    componentDidMount() {
        alert('Hello friend :)')
    }

    componentWillUnmount()
     {
        alert('GoodBye :(')
    }

    render() {
        return (
            <div>{this.state.text}</div>
        )
    }
}

export default Text;
