import React, {useId, Component} from 'react'

import CreatePostForm from '../components/createPost'



class CreatePost extends Component {
   
    render (){
        return (
          <div className='bg-amber-400 h-screen flex items-center justify-center'>  
            <div className=''>
              <CreatePostForm></CreatePostForm>
            </div>  
          </div>
      
        )
    }
}

export default CreatePost