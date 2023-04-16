import React, {useState, useId} from 'react'


const CreatePostForm = () => {

    const [user, setUser] = useState("");
  const [store, setStore] = useState("");
  const [amount, setAmt] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [errMsg, setErrMsg] = useState("");
  

  const handleSubmit = async (e) => {
    let data = JSON.stringify({
        "username": user,
        "storename": store,
        "amount": amount,
        "location": location,
        "time": time,
        "date": date,
        "status": "recieving",
        "orderList": "",
        "timeCreated": (new Date()).toISOString()
    });

    console.log(data)
    
    var myHeaders = new Headers();
    myHeaders.append("Origin", "localhost:5173");
    myHeaders.append("Content-Type", "application/json");

    

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    };

    fetch("http://localhost:5287/api/Post", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  }

    return(
        <div>
                <h2>Create Post</h2>
                        <div>
                            <label htmlFor="exampleStoreName">Username : </label>
                            <input type="text" onChange={(e) => setUser(e.target.value)}   name="username" id="username" placeholder="UserName" />
                        </div>

                        <div>
                            <label htmlFor="exampleStoreName">ร้าน : </label>
                            <input type="text" onChange={(e) => setStore(e.target.value)}   name="store" id="store" placeholder="Store Name" />
                        </div>

                        <div>
                            <label htmlFor="exampleAmount">จำนวนที่รับ : </label>
                            <input type="number" onChange={(e) => setAmt(e.target.value)} name="amount" id="amount" placeholder="amount" />
                        </div>

                        <div>
                            <label htmlFor="exampleLocation">จุดนัดรับ : </label>
                            <input type="text" onChange={(e) => setLocation(e.target.value)}  name="locate" id="locate" placeholder="location" />
                        </div>

                        <div>
                            <label htmlFor="exampleTime">ช่วงเวลาที่นัดรับ : </label>
                            <input type="time" onChange={(e) => setTime(e.target.value)}  name="time" id="time"  />
                        </div>

                        <div>
                            <label htmlFor="exampleDate">ว/ด/ป : </label>
                            <input type="date" onChange={(e) => setDate(e.target.value)}  name="date" id="date" />
                        </div>
                    
                    <button type = "Submit" onClick={handleSubmit}>Create</button>
                
        </div>
    )
}

export default CreatePostForm