import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";
import loginLogo from "../assets/loginLogo.png";

function Login() {
  return (
    <div className="bg-login bg-cover h-screen flex justify-center items-center pt-16">
      <div className="bg-white w-8/12 rounded-3xl flex justify-around items-center drop-shadow-2xl">
        <img className="w-[45%]" src={loginLogo} alt="" />
        <div className="border border-black rounded-3xl p-10 m-5">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
