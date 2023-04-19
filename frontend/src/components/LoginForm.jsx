import React, { useRef, useState, useEffect} from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from '../api/axios.js'
import useAuth from "../hooks/useAuth";
const LOGIN_URL = "/Auth/login"

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
        const response = await axios.post(LOGIN_URL,
            JSON.stringify({username:user, password:pwd}),
            {
                headers: {'Content-type': 'application/json', "withCredentials": true }
            })
        console.log(JSON.stringify(response))
        //const roles = response?.data?.roles;
        const accessToken = response?.data?.accessToken;
        setAuth({user, pwd, accessToken})
        setUser("")
        setPwd("")
        navigate(from,{ replace:true})
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
        //errRef.current.focus()
    }
    console.log(user,pwd)
  }

  return(
    <section>
      <p
        ref={errRef}
        className={errMsg ? "visible bg-red-600" : "hidden"}
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
  );
}

export default LoginForm;
