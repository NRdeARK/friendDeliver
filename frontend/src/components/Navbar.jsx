import React, { useState } from "react";
import NavbarList from "./NavbarList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
function Navbar() {
    const {auth}  = useContext(AuthContext);

    let Links =[
        {name: "Home", link:"/"},
        {name: "Confirm Order", link:"/createOrder"},
        {name: "Order Status", link:"/orderStatus"},
        {name: "Create Post", link:"/createPost"},
        {name: "Create Order", link:"/createOrder"},
        {name: "Open post", link:"/openPost"},

    ];

    let [open,setOpen]= useState(false);
    
  return (
    <nav>
      <div className="shadow-md w-full fixed top-0 left-0 saturate-0 z-50	">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          Designer
        </div>
        <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className= {`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-10 opacity-100' : 'top-[-400px]'} md:opacity-100 opacity-0 `}>
          {
            Links.map((link)=>(
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <Link to={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</Link>
              </li>
            ))
          }
          {auth.user == null ? (
              <li>
                <Link
                  to="/login"
                  className={
                    "md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500"
                  }
                >
                  Login
                </Link>
              </li>
            ) : (
              <Link
                to="/profile"
                  className={
                    "md:ml-8 text-xl md:my-0 my-7 text-gray-800 hover:text-gray-400 duration-500"
                  }
                >
                  {auth.user}
              </Link>
            )}
        </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;