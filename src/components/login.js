import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Login extends Component {
  render() {
    return (
      <div  className="auth-wrapper">
      <form className="auth-inner">
        <h3>Log In</h3>

        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
          />
        </div>

        <div className="mb-3">
          {/* <label>Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          </Link>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="/">password?</a>
        </p>
      </form>
      </div>
    )
  }
}
