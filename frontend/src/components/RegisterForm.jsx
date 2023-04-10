import React, { useRef, useState, useEffect } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

//(?<![_.]) - no _ or . at the end
//(?!.*[_.]{2}) - no __ or _. or ._ or .. inside
//(?![_.]) - no _ or . at the beginning
//(?=.{8,20}$) - Assert a string has 8-20
//(?=.*[0-9]) - Assert a string has at least one number;
//(?=.*[!@#$%^&*]) - Assert a string has at least one special character.

function RegisterForm() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

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
    userRef.current.focus();
  }, []);

  useEffect(() => {
    //check username that username is it against USER_REGEX
    const result = USER_REGEX.test(user);
    console.log("user result :", result);
    console.log("user :", user);
    setValidName(result);
    console.log("v", validName);
  }, [user]);

  useEffect(() => {
    //check password that password is it against PWD_REGEX and is it the same on both of them
    const result = PWD_REGEX.test(pwd);
    console.log("password result :", result);
    console.log("password :", pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    //clear ErrMsg when input changes
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <section>
      RegisterForm
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <form>
        <div id="usernameSection">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="bg-slate-100"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidNote"
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          <span className={validName ? "visible" : "invisible"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span className={validName || !user ? "invisible" : "visible"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <p
            id="uidNote"
            className={
              userFocus && user && !validName ? "visible" : "invisible"
            }
          >
            8 to 20 characters <br />
            Must begin with alphabet letter <br />
            letters, numbers, underscore(_), hyphens(.) allowed.
          </p>
        </div>
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
          <span className={validPwd ? "visible" : "invisible"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span className={validPwd || !pwd ? "invisible" : "visible"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <p
            id="pwdNote"
            className={pwdFocus && pwd && !validPwd ? "visible" : "invisible"}
          >
            8 to 24 characters <br />
            Must Include uppercase letter, lowercase letter, <br />
            numbers and special character.
          </p>
        </div>
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
          <span className={validMatch && matchPwd ? "visible" : "invisible"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <span className={validMatch || !matchPwd ? "invisible" : "visible"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <p
            id="confirmNote"
            className={matchFocus && !validMatch ? "visible" : "invisible"}
          >
            Must match the first password input field.
          </p>
        </div>
      </form>
      <button className = "bg-blue-500  rounded focus:outline-none disabled:opacity-75 disabled:cursor-not-allowed"disabled={!validName || !validPwd || !validMatch ? true : false}>
        Sign up
      </button>
    </section>
  );
}

export default RegisterForm;
