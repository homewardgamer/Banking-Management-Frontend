import React, { Component } from 'react'

export default class ChangePassword extends Component {
  render() {
    return (
    <div className="changepwd auth-wrapper">
      <form className="auth-inner">
        <h3>Change Password</h3>
        <div className="mb-3">

          {/* <label>Email address</label> */}

          <label>Account Number</label>

          <input
            type="number"
            className="form-control"
            placeholder="Enter Account Number"
          />
        </div>

        <div className="mb-3">
          {/* <label>Old Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          {/* <label>New Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Update Password
          </button>
        </div>
      </form>
      </div>
    )
  }
}
