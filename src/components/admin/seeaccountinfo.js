import React, { Component } from 'react'

export default class SeeAccount extends Component {
  render() {
    return (
    <div className="auth-wrapper">
      <form className="auth-inner">
        <h3>See Account Information</h3>

        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="number"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            See Account Information
          </button>
        </div>
        
      </form>
      </div>
    )
  }
}
