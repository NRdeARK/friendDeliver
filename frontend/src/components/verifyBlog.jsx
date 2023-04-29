import React from "react";
import VerifyTicket from "./verifyTicket"
import useAuth from "../hooks/useAuth";
import OrderConfirmTicket from "./OrderConfirmTicket";
const Order_URL = "/Order/";


function VerifyBlog({data}){
    let content;
    const {auth} = useAuth();
    if (auth.user == data.username){
        content = <div>
            <VerifyTicket props={data} type={"Selective"}></VerifyTicket>
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
            <VerifyTicket props={data} type={"Other"}></VerifyTicket>
        </div>
    }
    return(
        <div>
            {content}
        </div>
    )
}

export default VerifyBlog