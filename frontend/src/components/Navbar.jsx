import React, { useState } from "react";
import NavbarList from "./NavbarList";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
function Navbar() {
    const {auth}  = useContext(AuthContext);

    let Links =[
        {name: "Home", link:"/"},
        {name: "Post Open", link:"/"},
        {name: "Order Status", link:"/"},
        {name: "CreatePost", link:"/createPost"},

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
                <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
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
              <></>
            )}
            <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
              <Link to="/profile">{auth.user}</Link>
            </li>
        </ul>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
