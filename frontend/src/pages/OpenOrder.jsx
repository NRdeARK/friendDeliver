import React, {useId, Component} from 'react'

import testConfirm from '../components/testConfirmC'



class OpenOrder extends Component {
   
    render (){
        return (
          <div className='bg-amber-400 h-screen flex items-center justify-center'>  
            <div className=''>
              <testConfirm></testConfirm>
            </div>  
          </div>
      
        )
    }
}

export default OpenOrder