import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Text from './text';


const User = {
    name: 'Inna',
    text: 'Произвольный текст'
}


function App() {
    return (
        <div>
            <Text text={User.text}/>
            <button>Click</button>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)



