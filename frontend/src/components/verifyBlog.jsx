import React from "react";
import VerifyTicket from "./verifyTicket"
import useAuth from "../hooks/useAuth";
import OrderConfirmTicket from "./OrderConfirmTicket";
const Order_URL = "/Order/";


function VerifyBlog({data}){
    let content;
    const {auth} = useAuth();
    const {amount , date, location ,nickname, orderList, postId, realname ,reserved, status , storename, timeCreated, username} = data;
    if (auth.user === username){
        content = <div>
            <VerifyTicket username={username} name={realname} storename={storename} amount={amount} status={status}
                locate={location} time={reserved} date={date} key={timeCreated} postId={postId} timeCreated={timeCreated} type={"Selective"}></VerifyTicket>
        </div>
    }
    else{
        let order;
        Promise.all([axios.get(Order_URL.concat(postId))])
        .then((response) => {
          console.log(response[0]);
          order = response[0].data.map(
            (d) => {
                return(
                    <div>
                        <OrderConfirmTicket orderStatus={d.orderStatus} name={d.menuname} time={d.timeCreated} amount={d.amount}></OrderConfirmTicket>
                    </div>
                )
            }
        )
        })
        .catch((error) => {
          console.log(error);
        });
        content = <div>
            <VerifyTicket username={username} name={realname} storename={storename} amount={amount} status={status}
                locate={location} time={reserved} date={date} key={timeCreated} postId={postId} timeCreated={timeCreated} type={"Other"}></VerifyTicket>
            {order}
        </div>

    }
    return(
        <div>
            {content}
        </div>
    )
}

export default VerifyBlog