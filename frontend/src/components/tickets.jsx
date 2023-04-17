import React, {useState, useId, Component} from 'react'
import { redirect } from 'react-router-dom';

function Ticket(props){
    return(
        <div>
            <p>{props.name} คนโพสต์</p>
            <p>กำลังไปสั่งร้าน {props.storename} มีใครเอาอะไรไหม</p>
            <p>จำนวน {props.amount} กล่อง</p>
            <p>{props.date}</p>
        </div>
    );
}

export default Ticket;