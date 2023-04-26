import React from 'react'
import { Link } from 'react-router-dom';

function Blog(props){
    return(
        <div  >
            
            <Link to="/">
            <p>{props.nickname}({props.realname}) #{props.username}</p>
            <p>สถานะ{props.status}</p>
            <p>กำลังไปสั่งร้าน {props.storename} มีใครเอาอะไรไหม</p>
            <p>จำนวนที่รับ {props.amount}</p>
            <p>ช่วงเวลา {props.reserved}</p>
            <p>{props.date}</p>
            </Link>
        </div>
    );
}

export default Blog;