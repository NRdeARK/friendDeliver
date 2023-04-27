import React from "react";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import Logout from "../components/Logout";
const USER_URL = "/auth/" 

function Profile() {
  const { auth } = useAuth();
  function getUserData(){
    Promise.all([axios.get(USER_URL+auth)])
        .then((response) => {
          if (Object.keys(response[0].data).length <= 0) {
            setOrders(<></>);
            setIsOrder(false);
          } else if (Object.keys(response[0].data).length == 1) {
            setOrders(
              <div className="flex justify-center">
                <div
                  key={0}
                  className="bg-gray-200 mb-16 p-10 rounded-3xl drop-shadow-md w-7/12"
                >
                  {BlogOrder(response[0].data[0])}
                </div>
              </div>
            );
            setIsOrder(true);
          } else {
            setOrders(response[0].data.map(getBlogOrder));
            
            setIsOrder(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
  }
  const navigate = useNavigate();
  return (
    <div >
      <Logout></Logout>
        
    </div>
  );
}


export default Profile;
