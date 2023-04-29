import React from "react";
import VerifyTicket from "./verifyTicket"
import useAuth from "../hooks/useAuth";


function VerifyBlog({data}){
    let content;
    const {auth} = useAuth();
    if (auth.user == data.username){
        content = <div>
            <VerifyTicket props={data} type={"Selective"}></VerifyTicket>
        </div>
    }
    else{
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