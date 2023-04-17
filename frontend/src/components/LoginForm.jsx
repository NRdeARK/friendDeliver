import React, { useRef, useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthProvider"
import axios from '../api/axios.js'
const LOGIN_URL = "/auth/login"

function LoginForm() {
  const { setAuth } = useContext(AuthContext);
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
        const response = await axios.post(LOGIN_URL,
            JSON.stringify({username:user, password:pwd},{ withCredentials: true }),
            {
                headers: {'Content-type': 'application/json'}
            })
        console.log(JSON.stringify(response))
        //const roles = response?.data?.roles;
        const accessToken = response?.data?.accessToken;
        setAuth({user, pwd, accessToken})
        setUser("")
        setPwd("")
        setSuccess(true);
    } catch(err) {
        if (!err?.response) {
            setErrMsg("No Server Response");
        } else if (err.response?.status === 400){
            setErrMsg("Missing Username or Password");
        } else if (err.response?.status === 401){
            setErrMsg("Unauthorized");
        } else {
            setErrMsg("Login Failed")
        }
        errRef.current.focus()
    }
    console.log(user,pwd)
  }

  return(
  <>
    {success ? (
        <section>
            <h1>You are Loged In</h1>
            <br />
            <p>
                <Link to="/">Go to Home</Link>
            </p>

        </section>
    ) : (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "visible" : "hidden"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usernameInput">
            Username:
        </label>
        <input 
            type="text"
            id = "usernameInput"
            ref = {userRef}
            onChange = {(e) => setUser(e.target.value)}
            value = {user}
            required
            className="bg-slate-200"
        />
        <br />
        <br />
        <label htmlFor="passwordInput">
            Password:
        </label>
        <input 
            type="password"
            id = "passwordInput"
            onChange = {(e) => setPwd(e.target.value)}
            value = {pwd}
            required
            className="bg-slate-200"
        />
        <br />
        <br />
        <button>Sign In</button>
      </form>

      <p>
        Need an Account?
        <Link to="/register">Register</Link>
      </p>
    </section>
     )}
   </>
  );
}

export default LoginForm;
