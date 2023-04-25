import React, {useId, Component} from 'react'

import CreatePostForm from '../components/createPost'



class CreatePost extends Component {
   
    render (){
        return (
          <div className='bg-amber-400 mb-[155px]'>  
            <div className='ml-[400px] mt-[100px]'>
              <CreatePostForm></CreatePostForm>
            </div>
          </div>
      
        )
    }
}

export default CreatePost