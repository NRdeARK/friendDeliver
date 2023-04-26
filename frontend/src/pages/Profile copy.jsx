import React from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Profile() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
  return (
    <div>
      Profile
      <br />
      <div>
        <button
          onClick={() => {
            setAuth({});
            navigate("/login");
          }}
          className="bg-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
