import React from 'react'
import { Link } from 'react-router-dom';

function Tickets(props){
    return(
        <div class='flex flex-row items-center justify-around'>
            <div class='text-4xl items-center'>
                <p class='items-center'>
                    {props.storename}
                </p>
            </div>

            <div class='ml-[50px] mb-[10px] bg-amount w-[100px] h-[90px]'></div>
            <div class='ml-[80px] text-3xl items-center flex flex-row'>
                <p class='items-center'>
                    {props.name}
                </p>
            </div>

            <div class='ml-[40px] bg-user w-[140px] h-[150px]'></div>
            <div class='ml-[80px] text-3xl items-center flex flex-row'>
                <p class='items-center'>
                    จำนวน {props.amount} กล่อง
                </p>
            </div>
            <Link to="/createOrder">

            </Link>
        </div>
    );
}

export default Tickets;