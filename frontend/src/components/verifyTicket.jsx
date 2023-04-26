import React, {useState} from "react";

function VerifyTicket(props){
    let status;
    const [selectedStatus, setStatus] = useState("");
    let user;

    //REMIND: if user == props.username it means this is verifyTicket for Post user
    //TODO: add select status tag for Post user
    if (user == props.username){
        status = <div className="py-3 ms-[180px]">
            <label htmlFor="exampleTime" className='text-xl'>ช่วงเวลาที่นัดรับ : </label>
            <select
            value={props.status}
            onChange={(e) => setSelectedTime(e.target.value)}
            className='bg-gray-400 rounded-lg text-white text-xl'
            >
             <option value="closed_reciving">ปิดรับออเดอร์</option> {" "}
            <option value="reciving">กำลังรับ</option> {" "}
            <option value="delivering">ถึงจุดนัดแล้ว</option> {" "}
            <option value="closed">ส่งเรียบร้อย</option>
            </select>
        </div>
    }
    else if (props.status === 'recieving'){
        status = <div>
            <div>
            </div>
        </div>
    }
    else{
        status = <div>
            <div>
                {props.status}
            </div>
        </div>
    }
    return(
        <div className="w-[750px] h-[300px] bg-stone-200 rounded-lg flex flex-col p-5">
            <div className="flex flex-row">
                <div className="p-5 rounded-full bg-gray-500 justify-start"></div>
                <div className="ml-[10px] text-4xl"> {props.name} </div>
                <div className="ml-[50px] self-end">Posted {props.timeCreated.substring(11,16)}</div>
                <div>{status}</div>
            </div>
            <div className="text-3xl ml-[20px] pt-5">ร้าน : {props.storename}</div>
            
            <div className="pt-3 ml-[160px] text-lg">จำนวนที่รับ : {props.amount}</div>
            <div className="pt-1 ml-[160px] text-lg">จุดนัดรับ : {props.locate}</div>
            <div className="pt-1 ml-[160px] text-lg">ช่วงเวลานัดรับ : {props.time}</div>
            <div className="pt-1 ml-[160px] text-lg">วัน/เดือน/ปี : {props.date}</div>
            
        </div>
    )
}

export default VerifyTicket