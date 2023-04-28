import React from "react";
import { Link } from "react-router-dom";

function Tickets(props) {
  return (
    <div>
      {/* {props.storename}
      {props.username}
      {props.amount} */}
      <div className="overflow-hidden rounded-2xl bg-slate-700">
            <div className="flex items-center h-[180px] overflow-hidden">
              <img
                src="https://thumbnails.production.thenounproject.com/c4UZhX8RJFowtAoq8OZlUjIFmBg=/fit-in/1000x1000/photos.production.thenounproject.com/photos/D0EE41F3-3CB3-4F1E-B6E5-4CCE5B1DCB17.jpg"
                alt="Hamburger"
              />
            </div>

            <div className="p-6">
              <div className="flex flex-col items-start sm:flex-row sm:items-center text-left ">
                <div>
                  <p className="text-gray-400 text-gray-50"><ion-icon name="person-outline" class="mr-4"></ion-icon>{props.username}</p>
                  <h2 className="mt-2 text-[22px] font-bold text-gray-800 text-gray-50">
                  ร้าน {props.storename}
                  </h2>
                </div>
              </div>

              <hr className="mt-4 mb-4" />

              <div className="flex flex-wrap justify-between">
                <p className="inline-flex items-center">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 stroke-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg> */}
                    <ion-icon name="restaurant-outline" class="text-gray-50"></ion-icon>
                  <span className="ml-2 text-gray-50 "> จำนวน {props.amount} กล่อง</span>
                  <span className="mx-2">•</span>
                  <span className="text-gray-400">โรงอาหารพระเทพฯ</span>
                </p>
              </div>
            </div>
          </div>
       
    </div>
    // <div className="flex flex-row items-center  grid grid-cols-4  p-4">
    //   <div className="col-span-1 text-2xl items-center flex justify-start ml-12">
    //     <p className="items-center"></p>
    //   </div>

    //   {/* {props.nickname}
    //                 {props.realname} */}
    //   <div className="ml-[80px] text-xl items-center flex flex-row">

    //     <ion-icon name="person-outline" class="text-3xl"></ion-icon>
    //     <p className="items-center pl-2"></p>

    //   </div>

    //   <div className="col-span-2 text-xl items-center flex justify-start pl-24 ">
    //     <ion-icon name="restaurant-outline" class="text-3xl"></ion-icon>
    //     <p className="items-center">จำนวน { กล่อง</p>
    //   </div>
    //   <Link to="/createOrder"></Link>
    // </div>
  );
}

export default Tickets;
