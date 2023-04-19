import React, {useId, Component} from 'react'

import CreatePostForm from '../components/createPost'

import { getAllPosts, createPost } from '../api/postService'


class CreatePost extends Component {


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

export default CreatePost