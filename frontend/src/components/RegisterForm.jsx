import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import GreenTick from "./GreenTick";
import RedCross from "./RedCross";

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const NICKNAME_REGEX = /^[A-z][A-z]{3,23}$/;
const REALNAME_REGEX = /^[A-z][A-z]{3,23}$/;
const TEL_REGEX = /^[0-9]{10}$/;

const REGISTER_URL = "UserInfo";
//(?<![_.]) - no _ or . at the end
//(?!.*[_.]{2}) - no __ or _. or ._ or .. inside
//(?![_.]) - no _ or . at the beginning
//(?=.{8,20}$) - Assert a string has 8-20
//(?=.*[0-9]) - Assert a string has at least one number;
//(?=.*[!@#$%^&*]) - Assert a string has at least one special character.

function RegisterForm() {
  const usernameRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [nickname, setNickname] = useState("");
  const [validNickname, setValidNickname] = useState(false);
  const [nicknameFocus, setNicknameFocus] = useState(false);

  const [realname, setRealname] = useState("");
  const [validRealname, setValidRealname] = useState(false);
  const [realnameFocus, setRealnameFocus] = useState(false);

  const [tel, setTel] = useState("");
  const [validTel, setValidTel] = useState(false);
  const [telFocus, setTelFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatch] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // when open set cursor to userRef -> username
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    //check username that username is it against USER_REGEX
    const result = USERNAME_REGEX.test(username);
    // console.log("username result :", result);
    // console.log("username :", username);
    setValidUsername(result);
    // console.log("v", validUsername);
  }, [username]);

  useEffect(() => {
    const result = NICKNAME_REGEX.test(nickname);
    setValidNickname(result);
  }, [nickname]);

  useEffect(() => {
    const result = REALNAME_REGEX.test(realname);
    setValidRealname(result);
  }, [realname]);

  useEffect(() => {
    const result = TEL_REGEX.test(tel);
    setValidTel(result);
  }, [tel]);

  useEffect(() => {
    //check password that password is it against PWD_REGEX and is it the same on both of them
    const result = PWD_REGEX.test(pwd);
    // console.log("password result :", result);
    // console.log("password :", pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    //clear ErrMsg when input changes
    setErrMsg("");
  }, [username, nickname, realname, tel, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USERNAME_REGEX.test(username);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = NICKNAME_REGEX.test(nickname);
    const v4 = REALNAME_REGEX.test(realname);
    const v5 = TEL_REGEX.test(tel);
    if (!v1 || !v2 || !v3 || !v4 || !v5) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const responce = await axios.post(
        REGISTER_URL,
        JSON.stringify({ username, nickname, realname, tel, password:pwd }
        ,{ withCredentials: true }),
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        }
      );
      console.log(responce.data);
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Responce");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="/login">Sign In</Link>
          </p>
        </section>
      ) : (
        <section>
          RegisterForm
          <p
            ref={errRef}
            className={errMsg ? "visible bg-red-600" : "hidden"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <br />
            <div id="usernameSection">
              <label htmlFor="usernameInput">Username:</label>
              <input
                type="text"
                id="usernameInput"
                className="bg-slate-100"
                ref={usernameRef}
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
                required
                aria-invalid={validUsername ? "false" : "true"}
                aria-describedby="uidNote"
                onFocus={() => setUsernameFocus(true)}
                onBlur={() => setUsernameFocus(false)}
              />
              <span className={validUsername ? "visible" : "hidden"}>
                <GreenTick />
              </span>
              <span
                className={validUsername || !username ? "hidden" : "visible"}
              >
                <RedCross />
              </span>
              <p
                id="uidNote"
                className={
                  usernameFocus && username && !validUsername
                    ? "visible"
                    : "hidden"
                }
              >
                8 to 20 characters <br />
                Must begin with alphabet letter <br />
                letters, numbers, underscore(_), hyphens(.) allowed.
              </p>
            </div>

            <br />

            <div id="nicknameSection">
              <label htmlFor="nicknameInput">Nickname:</label>
              <input
                type="text"
                id="nicknameInput"
                className="bg-slate-100"
                onChange={(e) => setNickname(e.target.value)}
                required
                aria-invalid={validNickname ? "false" : "true"}
                aria-describedby="nicknameNote"
                onFocus={() => setNicknameFocus(true)}
                onBlur={() => setNicknameFocus(false)}
              />
              <span className={validNickname ? "visible" : "hidden"}>
                <GreenTick/>
              </span>
              <span className={validNickname || !nickname ? "hidden" : "visible"}>
                <RedCross/>
              </span>
              <p
                id = "nicknameNote"
                className={nicknameFocus && nickname && !validNickname ? "visible" : "hidden"}
              >
                8 to 24 characters <br />
                only Alphabet
              </p>
            </div>

            <br />

            <div id="realnameSection">
              <label htmlFor="realnameInput">Realname:</label>
              <input
                type="text"
                id="realnameInput"
                className="bg-slate-100"
                onChange={(e) => setRealname(e.target.value)}
                required
                aria-invalid={validRealname ? "false" : "true"}
                aria-describedby="realnameNote"
                onFocus={() => setRealnameFocus(true)}
                onBlur={() => setRealnameFocus(false)}
              />
              <span className={validRealname ? "visible" : "hidden"}>
                <GreenTick/>
              </span>
              <span className={validRealname || !realname ? "hidden" : "visible"}>
                <RedCross/>
              </span>
              <p
                id = "realnameNote"
                className={realnameFocus && realname && !validRealname ? "visible" : "hidden"}
              >
                8 to 24 characters <br />
                only Alphabet
              </p>
            </div>

            <br />

            <div id="telSection">
              <label htmlFor="telInput">Tel:</label>
              <input
                type="text"
                id="telInput"
                className="bg-slate-100"
                onChange={(e) => setTel(e.target.value)}
                required
                aria-invalid={validTel ? "false" : "true"}
                aria-describedby="telNote"
                onFocus={() => setTelFocus(true)}
                onBlur={() => setTelFocus(false)}
                pattern="[0-9]{10}"
              />
              <span className={validTel ? "visible" : "hidden"}>
                <GreenTick/>
              </span>
              <span className={validTel || !tel ? "hidden" : "visible"}>
                <RedCross/>
              </span>
              <p
                id = "realnameNote"
                className={telFocus && tel && !validTel ? "visible" : "hidden"}
              >
                10 characters <br />
                only number
              </p>
            </div>

            <br />

            <div id="passwordSection">
              <label htmlFor="password">Pasword:</label>
              <input
                type="password"
                id="password"
                className="bg-slate-100"
                ref={errRef}
                autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdNote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <span className={validPwd ? "visible" : "hidden"}>
                <GreenTick />
              </span>
              <span className={validPwd || !pwd ? "hidden" : "visible"}>
                <RedCross />
              </span>
              <p
                id="pwdNote"
                className={pwdFocus && pwd && !validPwd ? "visible" : "hidden"}
              >
                8 to 24 characters <br />
                Must Include uppercase letter, lowercase letter, <br />
                numbers and special character.
              </p>
            </div>

            <br />

            <div id="matchSection">
              <label htmlFor="matchPwd">Confirm Password:</label>
              <input
                type="password"
                id="matchPwd"
                className="bg-slate-100"
                autoComplete="off"
                onChange={(e) => setMatch(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmNote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <span className={validMatch && matchPwd ? "visible" : "hidden"}>
                <GreenTick />
              </span>
              <span className={validMatch || !matchPwd ? "hidden" : "visible"}>
                <RedCross />
              </span>
              <p
                id="confirmNote"
                className={matchFocus && !validMatch ? "visible" : "hidden"}
              >
                Must match the first password input field.
              </p>
            </div>

            <br />

            <button
              className="bg-blue-500  rounded focus:outline-none disabled:opacity-75 disabled:cursor-not-allowed"
              disabled={
                !validUsername ||
                !validNickname ||
                !validRealname ||
                !validTel ||
                !validPwd ||
                !validMatch
                  ? true
                  : false
              }
            >
              Sign up
            </button>
          </form>
          <br />
          <p>
            Already Registered? <br />
            <span>
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
}

export default RegisterForm;
