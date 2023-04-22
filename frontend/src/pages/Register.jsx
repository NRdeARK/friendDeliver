import React from "react";
import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/Navbar";

function Register() {
  return (
    <div className="flex flex-row h-screen bg-register bg-cover bg-center">
      <p className="font-serif text-white text-4xl absolute left-12 top-24">
        NIMITR
      </p>
      <div className="basis-2/5"></div>
      <div className="mt-24 ml-7 xl:mt-0 xl:ml-0">
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;
