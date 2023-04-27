import React from "react";
import VerifyTicket from "./verifyTicket"
import useAuth from "../hooks/useAuth";


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