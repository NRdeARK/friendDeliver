import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
function Layout() {
  return (
    <main className='w-screen h-screen bg-amber-400'>
        <Navbar/>
        
        <Outlet/>
        {/* <AboutUs/> */}

    </main>
  );
}

export default Layout;
