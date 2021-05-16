import React from "react";
import './App.css';
import Counter from "./counter/counter";
import ListUsers from "./Users/Users";

const users = ["Вася", "Петя", "Маша", "Петя"]
const usersSet = new Set(users)


function App() {
    return (
        <div className='container'>
            <Counter/>
            <ListUsers value={usersSet}/>
        </div>
    )
}


export default App;
