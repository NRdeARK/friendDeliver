import React, {useId, Component} from 'react'

import CreateOrderForm from '../components/OrderCreate'

import { getAllOrder, createOrder } from '../api/OrderService'


class CreateOrder extends Component {


    getAllUsers = () => {
        getAllOrder()
          .then(users => {
            console.log(users)
            this.setState({users: users, numberOfUsers: users.length})
          });
    }
    
   
    render (){
        return (
          <div class='bg-amber-400 mb-[155px]'>
            <div class='ml-[400px] mt-[100px]'>
              <CreateOrderForm></CreateOrderForm>
            </div>
          </div>
          
      
        )
    }
}

export default CreateOrder