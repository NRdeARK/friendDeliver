import React, {useId, Component} from 'react'

import CreateOrderForm from '../components/OrderCreate'

import { getAllPosts, createPost } from '../api/postService'


class CreateOrder extends Component {


    getAllUsers = () => {
        getAllPosts()
          .then(users => {
            console.log(users)
            this.setState({users: users, numberOfUsers: users.length})
          });
    }
    
   
    render (){
        return (
          <div class='bg-amber-400 mb-[155px]'>  
            <div class='ml-[400px] mt-[100px]'>
              <CreatePostForm></CreatePostForm>
            </div>
          </div>
      
        )
    }
}

export default CreateOrder