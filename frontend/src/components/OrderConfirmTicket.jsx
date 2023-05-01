import React from "react";
import axios from "../api/axios";
const Order_URL = "/Order/"; //*

// const postId=
function OrderConfirmTicket(props){
    // console.log(props)
    const [playload, setplayload] = useState([]);
    const [user, setuser] = useState([]);
    let content;
        Promise.all([axios.get(Order_URL.concat(props.postId))])
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
    

    if (props.orderStatus) {
        content = <div className='flex flex-row'>
            
            <button>
                cancle
            </button>
            <button>
                cancle
            </button>
        </div>;
      } else {
        content = <div></div>;
      }
    return(
        <div>
            <div>
                {props.name}
            </div>
            <div>
                {props.time}
            </div>
            <div>
                {props.amount}
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}
export default OrderConfirmTicket;
