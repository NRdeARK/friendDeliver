import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import loginLogo from "../assets/loginLogo.png";

function Login() {
  return (
    <div className="bg-login bg-cover h-screen flex justify-center items-center">
      <div className="bg-white w-4/6 h-3/5 rounded-3xl flex justify-around items-center drop-shadow-2xl">
          <img className="w-5/12" src={loginLogo} alt="" />
          <div className="border border-black rounded-3xl p-10
                          xl:p-5">
            <LoginForm />
          </div>
      </div>
    </div>
  );
}

export default Login;
