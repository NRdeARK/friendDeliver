import React from 'react'
import { Link } from 'react-router-dom';

function BlogOrder(props){
    return(
        <div >
            <Link to="/createOrder">
            <p>{props.nickname}({props.realname}) #{props.username}</p>
            <p> {props.menuname}</p>
            <p>จำนวน {props.amount} กล่อง</p>
            <p>{props.date}</p>
            </Link>
        </div>
    );
}

export default BlogOrder;