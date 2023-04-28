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
        className="bg-red-500"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
