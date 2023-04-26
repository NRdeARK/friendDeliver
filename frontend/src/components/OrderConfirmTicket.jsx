import React from "react";

function orderTicket(props){
    let content;
    if (props.orderStatus) {
        content = <div className='flex flex-row'>


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
