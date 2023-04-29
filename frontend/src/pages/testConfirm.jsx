import React, {useId, Component} from 'react'
import OrderBlog from '../components/OrderBlog';

import OrderConfirm from '../components/OrderConfirm'
import OrderConfirmTicket from '../components/OrderConfirmTicket'


class testConfirm extends Component {
   
    render (){
        return (
            <div className="bg-amber-400 mb-[155px]">
            <div className="ml-[400px] mt-[100px]">
            <OrderConfirmTicket ></OrderConfirmTicket>
            </div>
            </div>
        )
    }
}
export default testConfirm