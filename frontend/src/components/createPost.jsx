import React, { useState, useId } from "react";
import useAuth from "../hooks/useAuth";

const CreatePostForm = () => {
  // const [user, setUser] = useState("");
  const {auth} = useAuth()
  const [store, setStore] = useState("");
  const [amount, setAmt] = useState(1);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("ช่วงเช้า");
  const [errMsg, setErrMsg] = useState("");

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

    fetch("http://localhost:5287/api/Post", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <h2>Create Post</h2>
      {/* <div>
                            <label htmlFor="exampleStoreName">Username : </label>
                            <input type="text" onChange={(e) => setUser(e.target.value)}   name="username" id="username" placeholder="UserName" />
                        </div> */}

      <div>
        <label htmlFor="exampleStoreName">ร้าน : </label>
        <input
          type="text"
          onChange={(e) => setStore(e.target.value)}
          name="store"
          id="store"
          placeholder="Store Name"
        />
      </div>

      <div>
        <label htmlFor="exampleAmount">จำนวนที่รับ : </label>
        <input
          type="number"
          onChange={(e) => setAmt(e.target.value)}
          name="amount"
          id="amount"
          placeholder="amount"
        />
      </div>

      <div>
        <label htmlFor="exampleLocation">จุดนัดรับ : </label>
        <input
          type="text"
          onChange={(e) => setLocation(e.target.value)}
          name="locate"
          id="locate"
          placeholder="location"
        />
      </div>

      <div>
        <label htmlFor="exampleTime">ช่วงเวลาที่นัดรับ : </label>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
        >
            <option value="ช่วงเช้า">ช่วงเช้า</option> {" "}
          <option value="ช่วงสาย">ช่วงสาย</option> {" "}
          <option value="ช่วงเที่ยง">ช่วงเที่ยง</option> {" "}
          <option value="ช่วงบ่าย">ช่วงบ่าย</option> {" "}
          <option value="ช่วงเย็น">ช่วงเย็น</option>
        </select>
      </div>

      <div>
        <label htmlFor="exampleDate">ว/ด/ป : </label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          name="date"
          id="date"
        />
      </div>

      <button type="Submit" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};

export default CreatePostForm;
