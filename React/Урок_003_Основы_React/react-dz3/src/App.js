import React from "react";
import './App.css';
import Counter from "./counter/counter";
import ListUsers from "./Users/Users";

const users = ["Вася", "Петя", "Маша", "Петя", "Вася", "Петя", "Маша", "Петя"]
const userSort = users.filter((item ,index) => users.indexOf(item) === index)


function App() {
    return (
        <div className='container'>
            <Counter/>
            <ListUsers value={userSort}/>
        </div>
    )
}


export default App;
