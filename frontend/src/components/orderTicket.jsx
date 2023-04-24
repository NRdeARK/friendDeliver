import React from "react";

function orderTicket(props){
    let content;
    const handleSubmit = async (e) => {
        console.log(selectedTime);
        let data = JSON.stringify({
          orderId : 0,
          username: auth.user,
          menuname: store,
          amount: amount,
        });
    
        console.log(data);
    
        var myHeaders = new Headers();
        myHeaders.append("Origin", "localhost:5173");
        myHeaders.append("Content-Type", "application/json");
    
        var requestOptions = {
          method: "PUT",
          headers: myHeaders,
          body: data,
          redirect: "follow",
        };
    
        fetch("http://localhost:5287/api/OrderConfirm/GetPost", requestOptions)
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
    
        };
    if (props.orderStatus) {
        content = <div className='flex flex-row'>
            <button onClick={handleSubmit}>
                confirm
            </button>

            <button onClick={handleSubmit}>
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

export default orderTicket