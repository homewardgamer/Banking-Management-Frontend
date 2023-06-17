import React, { useState } from "react";
import Axios from "axios";
// import "../css/home.css"
import "../css/login.css"
function Login() {
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");

  function handleUserChange(event) {
    const value = event.target.value;
    setUsername(value);
  }
  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);
  }
  async function loginApi(event) {
    event.preventDefault();
    const url = "http://127.0.0.1:8000/api/user/login";
    const data = { username: username, password: password };

    Axios.post(url, data)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        fetchUser(token);
      })
      .catch((err) => {
        alert(err);
      });
  }
  function fetchUser(token) {
    const newUrl = "http://127.0.0.1:8000/api/user/view";
    Axios.get(newUrl, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        localStorage.setItem('is_customer' , res.data.is_customer);
        localStorage.setItem('is_admin' , res.data.is_employee);
        
        if (res.data.is_employee) {
        
           window.location.href = "/admin";
        } else {
           
           window.location.href = "/customer";
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <div>
      <header class="header">
        <a href="/" class="logo">Bank Management System</a>
        <nav class="nav-items">
          <a href="/">Home</a>
          <a href="/sign-in">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>
    <div className="auth-wrapper">
      <form className="auth-inner">
        <h3>Log In</h3>

        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            onChange={handleUserChange}
          />
        </div>

        <div className="mb-3">
          {/* <label>Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={handlePasswordChange}
          />
        </div>

        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={loginApi}>
            Submit
          </button>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="/">password?</a>
        </p> */}
      </form>
    </div>
    </div>
  );
}

export default Login;
