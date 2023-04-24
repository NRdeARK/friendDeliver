import React, {useState, Component, useEffect} from 'react'

import CreateOrderForm from '../components/OrderCreate'

import verifyTicket from '../components/verifyTicket'

const POST_URL = "/Post/status/recieving";


function CreateOrder() {
  const [posts, setPosts] = useState(<></>);

  useEffect(() => {
    Promise.all([axios.get(POST_URL)])
      .then((response) => {
        console.log(response[0].data);
        setPosts(response[0].data.map(
          (d) => 
          <div>
            <verifyTicket name={d.name} storename={d.storename} locate={d.location} time={d.time} date={d.date}></verifyTicket>
            <CreateOrderForm className='invisible'></CreateOrderForm>
          </div>));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    
   
    
    return (
      <div>
        {posts}
      </div>
    )
    
}

export default CreateOrder