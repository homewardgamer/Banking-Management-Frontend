import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
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
  function loginApi(event) {
    const url = "http://localhost:8000/api/user/login";
    const data = { username: username, password: password };
    Axios.post(url, data)
      .then((res) => {
        console.log(res.data);
        const token = res.data.token;
        localStorage.setItem('token',token);
      })
      .catch((err) => {
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
          <Link to="/customer">
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
