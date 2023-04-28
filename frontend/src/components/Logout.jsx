import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Logout() {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
            console.log("test")
          setAuth({});
          navigate("/login");
        }}
        className="bg-red-400 p-3  rounded-[30px]"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
