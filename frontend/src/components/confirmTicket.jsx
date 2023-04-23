import React, {useState} from "react";
import orderTicket from './orderTicket';

function confirmTicket(props){
    const [order, setOrder] = useState([]);

    const handleSubmit = async (e) => {
        console.log(selectedTime);
        let data = JSON.stringify({
          postId : 0,
          username: auth.user,
          storename: store,
          amount: amount,
          location: location,
          reserved: selectedTime,
          date: date,
        });
    
        console.log(data);
    
        var myHeaders = new Headers();
        myHeaders.append("Origin", "localhost:5173");
        myHeaders.append("Content-Type", "application/json");
    
        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: data,
          redirect: "follow",
        };
    
        fetch("http://localhost:5287/api/createOrder", requestOptions)
          .then((response) => response.json())
          .then((result) => setOrder(result))
          .catch((error) => console.log("error", error));
    };

    const listItems = order.map(
        (d) => {
            if (d.orderStatus === 'confirm') {
                <div class='bg-green'>
                    <orderTicket name={d.name} time={d.time} amount={d.amount} status={d.orderStatus}></orderTicket>
                </div>

            }
            else{
                <div>
                    <orderTicket name={d.name} time={d.time} amount={d.amount} status={d.orderStatus}></orderTicket>
                </div>
            }
        });


    return(
        <div>
            {listItems}
        </div>
    )
}