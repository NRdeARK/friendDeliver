import React from 'react'
import { Link } from 'react-router-dom';

function Tickets(props){
    return(
        <div className='flex flex-row items-center  grid grid-cols-5 gap-4 p-4'>
            <div className='col-span-2 text-2xl items-center flex justify-start ml-6'>
                <p className='items-center'>
                    {props.storename}
                </p>
            </div>
            
            
            {props.nickname}
                    {props.realname}
            <div className='ml-[80px] text-xl items-center flex flex-row'>
            <ion-icon name="storefront-outline" class="text-3xl"></ion-icon>
                <p className='items-center'>
                    {props.username}
                    
                </p>
                <ion-icon name="restaurant-outline" class="text-3xl"></ion-icon>
            </div>

           
            
            
            <div className='col-span-2 text-xl items-center flex justify-start ml-16 '>
                <p className='items-center'>
                    จำนวน {props.amount} กล่อง
                </p>
            </div>
            <Link to="/createOrder">

            </Link>
        </div>
    );
}

export default Tickets;