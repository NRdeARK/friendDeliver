import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import loginLogo from "../assets/loginLogo.png";

function Unauthorized() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-8/12 h-2/4 bg-white flex items-center justify-center rounded-3xl shadow-lg">
        <p className="text-8xl font-black">
          Unauthorized
        </p>
        <Link to="/login">
          <button
            type="button"
            className="btn btn-primary bg-red-600 px-2 py-1 rounded-lg text-4xl font-bold"
          >
            login
          </button>
        </Link>
      </div>
    </div>

    // <div>
    //   <div className="h-screen flex justify-center items-center pt-16">
    //     <div className="bg-white w-8/12 rounded-3xl flex justify-around items-center drop-shadow-2xl">
    //       <img className="w-[45%]" src={loginLogo} alt="" />
    //       <div className="border border-black rounded-3xl p-10 m-5">
    //         <LoginForm />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Unauthorized;
