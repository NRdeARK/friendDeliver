import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios.js";
import useAuth from "../hooks/useAuth.jsx";
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
      // console.log(JSON.stringify(response));
      //const roles = response?.data?.roles;

      const nickname = response?.data?.nickname;
      const realname = response?.data?.realname;
      const accessToken = response?.data?.accessToken;

      // const SetCookie = () => {
      //   Cookies.set("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9", {
      //     expires: 7,
      //   });
      // };

      setAuth({ user, nickname, realname, accessToken });

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

      // console.log(JSON.stringify(response));
      // //const roles = response?.data?.roles;
      // const accessToken = response?.data?.accessToken;
      // setAuth({user, pwd, accessToken });
      // setUser("");
      // setPwd("");
      // navigate(from, { replace: true });
    }
  };
  return (
    <section className="flex flex-col">
      <p
        className="font-semibold text-5xl ml-2 flex justify-center 
                    xl:text-4xl xl:font-bold"
      >
        Login
      </p>
      <br />
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="usernameInput"
          className="flex justify-start ml-3 font-medium text-2xl 
                      xl:text-lg xl:font-semibold"
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
          className=" flex bg-gray-200 rounded m-1 p-1 w-80 h-12 text-2xl
                      xl:text-lg xl:h-10"
        />
        <br />
        <label
          htmlFor="passwordInput"
          className="flex justify-start ml-3 font-medium 
                      xl:text-lg xl:font-semibold"
        >
          Password
        </label>
        <input
          type="password"
          id="passwordInput"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
          className="flex bg-gray-200 rounded m-1 p-1 w-80 h-12 text-2xl 
                      xl:text-lg xl:h-10"
          placeholder="••••••••"
        />
        <br />
        <button
          className="w-80 h-12 hover:opacity-90 bg-rose-400 rounded text-white font-medium
                      px-10 py-1 ml-1 flex justify-center items-center text-2xl 
                      disabled:cursor-not-allowed focus:outline-none
                      xl:h-10 xl:text-lg xl:font-semibold"
        >
          login
        </button>
      </form>
      <div className="flex justify-center">
        <p
          ref={errRef}
          className={
            errMsg
              ? "visible bg-red-500/90 text-white rounded-md py-1 px-2 mt-3 w-80 text-center text-lg xl:text-base"
              : "hidden"
          }
          aria-live="assertive"
        >
          {errMsg}
        </p>
      </div>
      <div className="flex items-center text-lg">
        <p className="ml-1.5 mt-1">
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
