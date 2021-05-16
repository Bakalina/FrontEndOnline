import React, {useState} from "react";
import './button.css';

const Counter = () => {

    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count +1) }>Click +1</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count -1) }>Click -1</button>

        </div>
    )
}

export default Counter;