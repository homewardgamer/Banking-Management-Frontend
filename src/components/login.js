import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Axios from "axios";
function Login() {
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");
  var [redirectUrl, setredirectUrl] = useState("");

  function handleUserChange(event) {
    const value = event.target.value;
    setUsername(value);
  }
  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);
  }
  function loginApi(event) {
    const url = "http://localhost:8000/api/user/login";
    const data = { username: username, password: password };
    Axios.post(url, data)
      .then((res) => {
        // console.log(res.data);
        const token = res.data.token;
        console.log(`Token ${token}`);
        localStorage.setItem("token", token);
        fetchUser(token);
      })
      .catch((err) => {
        alert(err);
      });
  }
  function fetchUser(token) {
    const newUrl = "http://localhost:8000/api/user/view";
    Axios.get(newUrl, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        if (res.data.is_employee) {
          setredirectUrl("/admin");
        } else {
          setredirectUrl("/customer");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
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

        <div className="mb-3">
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
        </div>

        <div className="d-grid">
          <Link to={redirectUrl}>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={loginApi}
            >
              Submit
            </button>
          </Link>
        </div>
        {/* <p className="forgot-password text-right">
          Forgot <a href="/">password?</a>
        </p> */}
      </form>
    </div>
  );
}

export default Login;
