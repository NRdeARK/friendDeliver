import React, {useId, Component} from 'react'

import OrderConfirm from '../components/OrderConfirm'



class TestConfirm extends Component {
   
    render (){
        return (
          <div className='bg-amber-400 mb-[155px]'>  
            <div className='ml-[400px] mt-[100px]'>
              <OrderConfirm></OrderConfirm>
            </div>  
          </div>
      
        )
    }
}

export default TestConfirm