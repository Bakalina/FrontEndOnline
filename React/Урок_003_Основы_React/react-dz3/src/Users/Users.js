import React from "react";


const ListUsers = (props) => {

    const value = props.value
    const list = value.map((item) => <li key={item.toString()}>
        {item}
    </li>)

    return (
        <ul>{list}</ul>
    )
}

export default ListUsers;
