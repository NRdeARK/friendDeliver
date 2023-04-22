import React from "react";

function orderTicket(props){
    let content;
    if (props.orderStatus) {
        content = <div class='flex flex-row'>
            <button>
                confirm
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
