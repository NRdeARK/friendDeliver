import React, {useId, Component} from 'react'

import CreateOrderForm from '../components/OrderCreate'

import { getAllOrder, createOrder } from '../api/OrderService'
import OrderBlog from '../components/OrderBlog'


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
    }
    
   
    render (){
        return (
          <div class='bg-amber-400 mb-[155px]'>
            <div class='ml-[400px] mt-[100px]'>
              <CreateOrderForm></CreateOrderForm>
            </div>
            <div class="  flex items-center justify-center">
            <OrderBlog></OrderBlog>
            </div>
          </div>
          
          
      
        )
    }
}

export default CreateOrder