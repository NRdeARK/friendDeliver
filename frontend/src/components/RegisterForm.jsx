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

const REGISTER_URL = "Auth/register";
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
      const responce = await axios.post(REGISTER_URL, {
        username,
        nickname,
        realname,
        tel,
        password: pwd,
      });
      console.log(responce.data);
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
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
        window.location.replace("http://localhost:5173/login")
      ) : (
        <section className="flex flex-col pt-24 xl:pt-20 pb-4">
          <p className="font-bold text-4xl ml-2 flex">Sign up</p>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row space-x-10">
              <div id="nicknameSection">
                <label
                  htmlFor="nicknameInput"
                  className="font-semibold flex justify-start ml-1.5 text-lg"
                >
                  Nickname
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="nicknameInput"
                    className="bg-gray-200 rounded m-1 p-1 flex w-72 h-10 text-lg 
                                xl:w-52 xl:h-9"
                    onChange={(e) => setNickname(e.target.value)}
                    required
                    aria-invalid={validNickname ? "false" : "true"}
                    aria-describedby="nicknameNote"
                    onFocus={() => setNicknameFocus(true)}
                    onBlur={() => setNicknameFocus(false)}
                  />
                  <span className={validNickname ? "visible" : "hidden"}>
                    <GreenTick />
                  </span>
                  <span
                    className={
                      validNickname || !nickname ? "hidden" : "visible"
                    }
                  >
                    <RedCross />
                  </span>
                </div>
                <p
                  id="nicknameNote"
                  className={
                    nicknameFocus && nickname && !validNickname
                      ? "visible"
                      : "hidden"
                  }
                >
                  <p className="flex justify-start text-xs ml-1.5">
                    4 to 24 characters only Alphabet
                  </p>
                </p>
              </div>
              <div id="realnameSection">
                <label
                  htmlFor="realnameInput"
                  className="font-semibold flex justify-start ml-1.5 text-lg"
                >
                  Name
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="realnameInput"
                    className="bg-gray-200 rounded m-1 p-1 w-72 h-10 text-lg 
                                xl:w-52 xl:h-9"
                    onChange={(e) => setRealname(e.target.value)}
                    required
                    aria-invalid={validRealname ? "false" : "true"}
                    aria-describedby="realnameNote"
                    onFocus={() => setRealnameFocus(true)}
                    onBlur={() => setRealnameFocus(false)}
                  />
                  <span className={validRealname ? "visible" : "hidden"}>
                    <GreenTick />
                  </span>
                  <span
                    className={
                      validRealname || !realname ? "hidden" : "visible"
                    }
                  >
                    <RedCross />
                  </span>
                </div>
                <p
                  id="realnameNote"
                  className={
                    realnameFocus && realname && !validRealname
                      ? "visible"
                      : "hidden"
                  }
                >
                  <p className="flex justify-start text-xs ml-1.5">
                    4 to 24 characters only Alphabet
                  </p>
                </p>
              </div>
            </div>
            <br />
            <div id="telSection">
              <label
                htmlFor="telInput"
                className="font-semibold flex justify-start ml-1.5 text-lg "
              >
                Tel Number
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="telInput"
                  className="bg-gray-200 rounded m-1 p-1 w-72 h-10 text-lg 
                              xl:w-52 xl:h-9"
                  onChange={(e) => setTel(e.target.value)}
                  required
                  aria-invalid={validTel ? "false" : "true"}
                  aria-describedby="telNote"
                  onFocus={() => setTelFocus(true)}
                  onBlur={() => setTelFocus(false)}
                  pattern="[0-9]{10}"
                />
                <span className={validTel ? "visible" : "hidden"}>
                  <GreenTick />
                </span>
                <span className={validTel || !tel ? "hidden" : "visible"}>
                  <RedCross />
                </span>
              </div>
              <p
                id="realnameNote"
                className={telFocus && tel && !validTel ? "visible" : "hidden"}
              >
                <p className="flex justify-start text-xs ml-1.5">
                  10 characters only number
                </p>
              </p>
            </div>
            <br />
            <div id="usernameSection">
              <label
                htmlFor="usernameInput"
                className="font-semibold flex justify-start ml-1.5 text-lg"
              >
                Username
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  id="usernameInput"
                  className="bg-gray-200 rounded m-1 p-1 w-72 h-10 text-lg 
                              xl:w-52 xl:h-9"
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
              </div>
              <p
                id="uidNote"
                className={
                  usernameFocus && username && !validUsername
                    ? "visible"
                    : "hidden"
                }
              >
                <p className="flex justify-start text-xs ml-1.5 text-left">
                  4 to 20 characters <br />
                  Must begin with alphabet letter <br />
                  letters, numbers, underscore(_), hyphens(.) allowed.
                </p>
              </p>
            </div>
            <br />
            <div id="passwordSection">
              <label
                htmlFor="password"
                className="font-semibold flex justify-start ml-1.5 text-lg "
              >
                Password
              </label>
              <div className="flex items-center">
                <input
                  type="password"
                  id="password"
                  className="bg-gray-200 rounded m-1 p-1 w-72 h-10 text-lg 
                              xl:w-52 xl:h-9"
                  autoComplete="off"
                  onChange={(e) => setPwd(e.target.value)}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdNote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  placeholder="••••••••"
                />
                <span className={validPwd ? "visible" : "hidden"}>
                  <GreenTick />
                </span>
                <span className={validPwd || !pwd ? "hidden" : "visible"}>
                  <RedCross />
                </span>
              </div>
              <p
                id="pwdNote"
                className={pwdFocus && pwd && !validPwd ? "visible" : "hidden"}
              >
                <p className="flex justify-start text-xs ml-1.5 text-left">
                  8 to 24 characters <br />
                  Must Include uppercase letter, <br />
                  lowercase letter, numbers and special character.
                </p>
              </p>
            </div>
            <br />
            <div id="matchSection">
              <label
                htmlFor="matchPwd"
                className="font-semibold flex justify-start ml-1.5 text-lg"
              >
                Confirm Password
              </label>
              <div className="flex items-center">
                <input
                  type="password"
                  id="matchPwd"
                  className="bg-gray-200 rounded m-1 p-1 w-72 h-10 text-lg 
                              xl:w-52 xl:h-9"
                  autoComplete="off"
                  onChange={(e) => setMatch(e.target.value)}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmNote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                  placeholder="••••••••"
                />
                <span className={validMatch && matchPwd ? "visible" : "hidden"}>
                  <GreenTick />
                </span>
                <span
                  className={validMatch || !matchPwd ? "hidden" : "visible"}
                >
                  <RedCross />
                </span>
              </div>
              <p
                id="confirmNote"
                className={matchFocus && !validMatch ? "visible" : "hidden"}
              >
                <p className="flex justify-start text-xs ml-1.5">
                  Must match the first password input field.
                </p>
              </p>
            </div>
            <br />
            <button
              className="bg-rose-400 rounded text-white font-semibold px-10 py-1 ml-1 
                          flex justify-center items-center text-lg disabled:cursor-not-allowed 
                          focus:outline-none hover:opacity-80 w-72 h-10
                          xl:w-52 xl:h-9"
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
              Create Account
            </button>
          </form>
          <div className="">
            <p
              ref={errRef}
              className={
                errMsg
                  ? "visible bg-red-500/90 text-white rounded-md py-1 mb-1 mt-3 w-72 text-center ml-1 xl:w-52 xl:h-9"
                  : "hidden"
              }
              aria-live="assertive"
            >
              {errMsg}
            </p>
          </div>

          <p className="flex ml-2 mt-2">
            Already Registered?
            <span>
              <Link
                to="/login"
                className="hover:text-rose-400/50 underline ml-1 text-rose-400"
              >
                Sign In
              </Link>
            </span>
          </p>
        </section>
      )}
    </>
  );
}

export default RegisterForm;
