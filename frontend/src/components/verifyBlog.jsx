import React from "react";
import VerifyTicket from "./verifyTicket"
import useAuth from "../hooks/useAuth";


function VerifyBlog({data}){
    let content;
    const {auth} = useAuth();
    console.log(typeof data.username)
    if (auth.user == data.username){
        content = <div>
            <VerifyTicket props={data} type={"Selective"}></VerifyTicket>
        </div>
    }
    else{
        let order;
        content = <div>
            <VerifyTicket props={data} type={"Other"}></VerifyTicket>
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