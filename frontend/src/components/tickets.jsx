import React, {useState, useId, Component} from 'react'
import { redirect } from 'react-router-dom';

function Ticket(){
    return(
        <div>
            <p>{this.prop.name} คนโพสต์</p>
            <p>กำลังไปสั่งร้าน {this.prop.storename} มีใครเอาอะไรไหม</p>
            <p>จำนวน {this.prop.amount} กล่อง</p>
            <p>{this.prop.date}</p>
        </div>
    );
}

export default Ticket;