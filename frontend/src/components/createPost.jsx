import React, { useState, useId, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import userLogo from "../assets/user.jpg";

const CreatePostForm = () => {
  // const [user, setUser] = useState("");
  const {
    auth,
    setShowModal,
    setIsAllow,
    showModal,
    setData,
    setSubmit,
    submit,
    data
  } = useAuth();
  const navigate = useNavigate();
  // const { auth } = useAuth();
  const [store, setStore] = useState("");
  const [amount, setAmt] = useState(1);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("ช่วงเช้า");
  const [errMsg, setErrMsg] = useState("");
  // const [showModal, setShowModal] = React.useState(false);
  // const [isAllow, setIsAllow] = useState(true);
  const [checkForm, setCheckForm] = useState(false);
  const [checkSubmit, setCheckSubmit] = useState(false);

  useEffect(() => {
    setData({ store, amount, location, selectedTime, date });
    if (checkForm) {
      if (store == "" || location == "" || date == "" || selectedTime == "") {
        setIsAllow(false);
      } else {
        setIsAllow(true);
        setCheckSubmit(true);
      }
      setCheckForm(false);
    }
  }, [showModal]);

  useEffect(() => {
    if (submit && checkSubmit) {
      handleSubmit();
      setSubmit(false);
    }
    setCheckSubmit(false);
  }, [submit]);

  const handleSubmit = async (e) => {
    // console.log(selectedTime);
    let data = JSON.stringify({
      postId: 0,
      username: auth.user,
      nickname: auth.nickname,
      realname: auth.realname,
      storename: store,
      amount: amount,
      location: location,
      reserved: selectedTime,
      date: date,
    });
    // console.log(data);

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
      .then((response) => {
        response.text();
        navigate("/OpenPost");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
      navigate("/openPost");
  };

  return (
    <div
      className="flex flex-col justify-stretch flex-nowrap bg-gray-200 mt-16
                  accent-gray-300 rounded-3xl drop-shadow-md w-7/12 h-fit p-5"
    >
      <div className="pl-4 flex flex-row items-center">
        <img src={userLogo} alt="" className="w-11 rounded-full" />
        <p className="ml-5 text-2xl justify-start">
          {auth.nickname}({auth.realname})
        </p>
      </div>
      <br />
      <div className="flex flex-row ml-24 items-center">
        <label htmlFor="exampleStoreName" className="text-4xl xl:text-2xl">
          ร้าน :{" "}
        </label>
        <input
          type="text"
          onChange={(e) => setStore(e.target.value)}
          name="store"
          id="store"
          className="bg-gray-400 rounded-lg text-white ml-3 p-2 text-xl w-3/4 xl:text-base"
        />
      </div>
      <br />
      <div className="ml-40">
        <div className="flex flex-row items-center">
          <label htmlFor="exampleAmount" className="text-2xl xl:text-xl">
            จำนวนที่รับ :{" "}
          </label>
          <input
            type="number"
            onChange={(e) => setAmt(e.target.value)}
            name="amount"
            id="amount"
            className="bg-gray-400 rounded-lg text-white ml-3 p-2 text-xl w-1/12 xl:text-base"
            value={amount}
            min={1}
          />
          <p className="text-2xl ml-2 xl:text-xl">กล่อง</p>
        </div>
        <br />
        <div className="flex flex-row items-center">
          <label htmlFor="exampleLocation" className="text-2xl xl:text-xl">
            จุดนัดรับ :{" "}
          </label>
          <input
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            name="locate"
            id="locate"
            className="bg-gray-400 rounded-lg text-white ml-3 p-2 text-xl w-4/6 xl:text-base"
          />
        </div>
        <br />
        <div className="flex flex-row items-center">
          <label htmlFor="exampleTime" className="text-2xl xl:text-xl">
            ช่วงเวลาที่นัดรับ :{" "}
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="bg-gray-400 rounded-lg text-white ml-3 p-2 text-xl xl:text-base"
          >
              <option value="ช่วงเช้า">ช่วงเช้า</option> {" "}
            <option value="ช่วงสาย">ช่วงสาย</option> {" "}
            <option value="ช่วงเที่ยง">ช่วงเที่ยง</option> {" "}
            <option value="ช่วงบ่าย">ช่วงบ่าย</option> {" "}
            <option value="ช่วงเย็น">ช่วงเย็น</option>
          </select>
        </div>
        <br />
        <div className="flex flex-row items-center">
          <label htmlFor="exampleDate" className="text-2xl xl:text-xl">
            ว/ด/ป :{" "}
          </label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            name="date"
            id="date"
            className="bg-gray-400 rounded-lg text-white ml-3 p-2 text-xl xl:text-base"
          />
        </div>
      </div>
      <br />
      <div className="flex justify-end mr-4">
        <button
          type="Submit"
          onClick={() => {
            setCheckForm(true);
            setShowModal(true);
          }}
          className="bg-emerald-500 text-2xl rounded-lg text-white ml-5 p-2 xl:text-xl"
        >
          โพสต์
        </button>
      </div>
    </div>
  );
};

export default CreatePostForm;
