import React, {useState, Component, useEffect} from 'react'

import CreateOrderForm from '../components/OrderCreate'

import VerifyTicket from '../components/verifyTicket'

const POST_URL = "/Post";

import axios from "../api/axios";


function CreateOrder() {
  const [posts, setPosts] = useState(<></>);
  let content;

  useEffect(() => {
    Promise.all([axios.get(POST_URL)])
      .then((response) => {
        //console.log(response[0].data);
        
        content = response[0].data.map(
          (d) => {
            return(
              <div className='group'>
                <VerifyTicket username={d.username} name={d.realname} storename={d.storename} amount={d.amount}
                locate={d.location} time={d.reserved} date={d.date} key={d.postId} timeCreated={d.timeCreated} type={"Ordering"}></VerifyTicket>
                <div className='opacity-0 group-hover:opacity-100 duration-200'>
                  <CreateOrderForm></CreateOrderForm>
                </div>
              </div>
            )
            
          });
        setPosts(content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    
   
    
    return (
      <div className='w-screen h-screen'>
        <div className='mt-[60px] ml-[70px] flex flex-col items-center gap-y-3'>
          {posts}
        </div>
      </div>
    )
    
}

export default CreateOrder