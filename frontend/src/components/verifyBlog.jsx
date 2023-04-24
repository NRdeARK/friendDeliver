import React from "react";
import verifyTicket from "./verifyTicket"

function verifyBlog(props){
    let content;
    if (username === props.user){
        //REMIND: if username of current login == user that pass as argument we knew that this blog was created by this user.
        //TODO: Add only verify Ticket
        content = <div>
            <verifyTicket></verifyTicket>
        </div>
    }
    //TODO: Add order Ticket
    else{
        let order;
        content = <div>
            <verifyTicket></verifyTicket>
            {order}
        </div>

    }
    return(
        <div>
            {content}
        </div>
    )
}

export default verifyBlog