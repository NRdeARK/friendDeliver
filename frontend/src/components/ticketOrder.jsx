import React from 'react'
import { Link } from 'react-router-dom';

function TicketOrders(props){
    return(
        <div className='flex flex-row items-center justify-around'>
            <div className='text-4xl items-center'>
                <p className='items-center'>
                    {props.menuname}
                </p>
            </div>

            <div className='ml-[50px] mb-[10px] bg-amount w-[100px] h-[90px]'></div>
            <div className='ml-[80px] text-3xl items-center flex flex-row'>
                <p className='items-center'>
                    {props.name}
                </p>
            </div>

            <div className='ml-[40px] bg-user w-[140px] h-[150px]'></div>
            <div className='ml-[80px] text-3xl items-center flex flex-row'>
                <p className='items-center'>
                    จำนวน {props.amount} กล่อง
                </p>
            </div>
            <Link to="/createOrder">

            </Link>
        </div>
    );
}

export default TicketOrders;