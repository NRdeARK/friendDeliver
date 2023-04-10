import React from 'react'
import { Link } from "react-router-dom"

function Login() {
  return (
    <div>
      Login
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Login