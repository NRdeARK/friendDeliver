import React from "react";
import { Link } from "react-router-dom";

function Unauthorized() {
  return (
    <div className="flex justify-center items-center h-screen bg-login bg-cover">
      <div className="w-8/12 h-2/4 bg-white flex rounded-3xl shadow-lg justify-center flex-col items-center">
        <p className="text-4xl font-black flex justify-center mb-5">
          Unauthorized
        </p>
        <Link to="/login">
          <button
            type="button"
            className="hover:opacity-90 bg-rose-400 rounded-3xl text-white font-black
            py-5 px-20 flex justify-center items-center text-4xl xl:text-3xl"
          >
            login
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Unauthorized;
