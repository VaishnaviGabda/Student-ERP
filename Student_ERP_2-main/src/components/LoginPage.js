import React from 'react'
import './LoginPage.css'

function LoginPage() {
  return (
    <div className="login_page">
      <div className="login_page_content">
        <input placeholder="Enter student id"  required />
        <input placeholder="Enter password"  required />
        <p>Forgot password ?</p>
        <button>Login</button>
      </div>
    </div>
  )
}

export default LoginPage