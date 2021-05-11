import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from "./text";
import Btn from "./Button/button";

const Anna = 'Lorem';



function App() {
    return (
        <div>
            <Text text={Anna}/>
            <Btn/>
            <Text text={Anna}/>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)



