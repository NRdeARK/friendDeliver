import React from 'react'
import { Link } from "react-router-dom"
import Navbar from '../components/Navbar'
import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <div className="bg-amber-400/80" >
      <LoginForm/>
      {/* <Link to="/register">Register</Link> */}
    </div>
  )
}

export default Login