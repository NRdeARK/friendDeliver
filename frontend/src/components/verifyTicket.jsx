import React, {useState} from "react";

function verifyTicket(props){
    let status;
    const [selectedStatus, setStatus] = useState("");

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
    else{
        status = <div>
            <div>
                {props.status}
            </div>
        </div>
    }
    return(
        <div>
            <div>name</div>
            <div>{status}</div>
            <div>storename</div>
            <div>location</div>
            <div>timeReserved</div>
            <div>date</div>
        </div>
    )
}