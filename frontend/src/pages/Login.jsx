import React from 'react'
import { Link } from "react-router-dom"

import LoginForm from '../components/LoginForm'

function Login() {
  return (
    <div>
      Login
      <LoginForm/>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Login