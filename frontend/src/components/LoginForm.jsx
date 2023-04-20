import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios.js";
import useAuth from "../hooks/useAuth";
const LOGIN_URL = "/Auth/login";

function LoginForm() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username: user, password: pwd }),
        {
          headers: {
            "Content-type": "application/json",
            withCredentials: true,
          },
        }
      );
      console.log(JSON.stringify(response));
      //const roles = response?.data?.roles;
      const accessToken = response?.data?.accessToken;
      setAuth({ user, pwd, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }

      console.log(JSON.stringify(response));
      //const roles = response?.data?.roles;
      const accessToken = response?.data?.accessToken;
      setAuth({ user, pwd, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    }
  };
  return (
    <section className="font-mono flex flex-col">
      <p className="font-bold text-4xl ml-2 flex justify-center">Login</p>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="usernameInput"
          className="font-semibold flex justify-start ml-3 text-lg"
        >
          Username
        </label>
        <input
          type="text"
          id="usernameInput"
          ref={userRef}
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
          className=" flex bg-gray-200 rounded m-1 p-1 w-80 h-10 text-lg"
        />
        <br />
        <label
          htmlFor="passwordInput"
          className="font-semibold flex justify-start ml-3 text-lg"
        >
          Password
        </label>
        <input
          type="password"
          id="passwordInput"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
          className="flex bg-gray-200 rounded m-1 p-1 w-80 h-10 text-lg"
          placeholder="••••••••"
        />
        <br />
        <button
          className="w-80 h-10 hover:opacity-90 bg-rose-400 rounded text-white font-semibold 
                      px-10 py-1 ml-1 flex justify-center items-center text-lg 
                      disabled:cursor-not-allowed focus:outline-none"
        >
          login
        </button>
      </form>
      <div className="flex justify-center">
        <p
          ref={errRef}
          className={
            errMsg
              ? "visible bg-red-500/90 text-white rounded-md py-1 px-2 mb-1 mt-3 w-80 "
              : "hidden"
          }
          aria-live="assertive"
        >
          {errMsg}
        </p>
      </div>
      <div className="flex items-center">
        <p className="ml-1.5">
          Doesn't have an account yet?
          <Link
            to="/register"
            className="hover:text-rose-400/50 underline ml-1 text-rose-400"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}

export default LoginForm;
