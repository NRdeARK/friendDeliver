import React from 'react'
import { Link } from 'react-router-dom';

function Ticket(props){
    return(
        <div >
            <Link to="/createOrder">
            <p>{props.name} คนโพสต์</p>
            <p>กำลังไปสั่งร้าน {props.storename} มีใครเอาอะไรไหม</p>
            <p>จำนวน {props.amount} กล่อง</p>
            <p>{props.date}</p>
            </Link>
        </div>
    );
}

export default Ticket;