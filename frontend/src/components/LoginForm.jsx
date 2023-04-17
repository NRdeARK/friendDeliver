import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axios.js";
import useAuth from "../hooks/useAuth";
const LOGIN_URL = "/auth/login";

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
        JSON.stringify(
          { username: user, password: pwd },
          { withCredentials: true }
        ),
        {
          headers: { "Content-type": "application/json" },
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
      //errRef.current.focus()
    }
    console.log(user, pwd);
  };

  return (
    <section className="font-mono flex flex-col">
      <p
        ref={errRef}
        className={errMsg ? "visible bg-red-600" : "hidden"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <p className="font-bold text-4xl my-1 ml-2 flex">Login</p>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="usernameInput"
          className="font-semibold flex justify-start ml-5 text-lg"
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
          className="bg-gray-500 rounded m-1 p-1 flex"
        />
        <br />
        <label
          htmlFor="passwordInput"
          className="font-semibold flex justify-start ml-5 text-lg"
        >
          Password
        </label>
        <input
          type="password"
          id="passwordInput"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
          className="bg-gray-500 rounded m-1 p-1 flex"
        />
        <button
          className="bg-cyan-700/60 rounded text-black px-10 py-1 ml-1 my-3 
                          flex justify-start text-lg disabled:cursor-not-allowed 
                          focus:outline-none hover:opacity-90"
        >
          login
        </button>
      </form>

      <p className="flex ml-1.5">
        Doesn't have an account yet?
        <Link to="/register" className="hover:text-white underline ml-1">Sign up</Link>
      </p>
    </section>
  );
}

export default LoginForm;
