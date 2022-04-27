import React, { Component } from 'react'

export default class BlockAccount extends Component {
  render() {
    return (
    <div className="changepwd auth-wrapper">
      <form className="auth-inner">
        <h3>Block Account</h3>
        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="number"
            className="form-control"
            placeholder="Enter Account Number"
          />
        </div>

        <div className="mb-3">
          {/* <label>Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          {/* <label>Verification Pin</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Enter Verification Pin"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Block Account
          </button>
        </div>
      </form>
      </div>
    )
  }
}
