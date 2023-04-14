import React, {useState, useId} from 'react'
import axios from '../api/axios.js'
const POST_URL = "/Post"

const CreatePostForm = () => {

    const [user, setUser] = useState("");
  const [store, setStore] = useState("");
  const [amount, setAmt] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [errMsg, setErrMsg] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*const response = await fetch(`http://localhost:5287/api/Post`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id : useId(), username:user, storename:store, amount:amount, location: location, time: time, date: date, orderList: "", timeCreated : new Date().toISOString()})
      })
    return await response.json();
    */
    try {
        const response = await axios.post(POST_URL,
            JSON.stringify({id : useId(), username:user, storename:store, amount:amount, location: location, time: time, date: date, orderList: "", timeCreated : new Date().toISOString()}
            ,{ withCredentials: true }),
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'}
            })
        console.log(JSON.stringify(response))
    } catch(err) {
        if (!err?.response) {
            setErrMsg("No Server Responce");
          } else if (err.response?.status === 409) {
            setErrMsg("Username Taken");
          } else {
            setErrMsg("Registration Failed");
          }
    }
  }

    return(
        <div>
                <h2>Create Post</h2>
                <form onSubmit={handleSubmit} action="#">
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
                            <input type="text" onChange={(e) => setAmt(e.target.value)} name="amount" id="amount" placeholder="amount" />
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
                    
                    <button type='Submit'>Create</button>
                </form>
                
        </div>
    )
}

export default CreatePostForm