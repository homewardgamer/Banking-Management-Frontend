import React, { Component } from 'react'
import NavbarAdmin from '../navbaradmin'

export default class SeeAccount extends Component {
  render() {
    return (
      <div>
      <NavbarAdmin/>
    <div className="auth-wrapper">
      <form className="auth-inner">
        <h3>See Account Information</h3>

        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="number"
            className="form-control"
            placeholder="Account Number"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            See Account Information
          </button>
        </div>
        
      </form>
      </div>
      </div>
    )
  }
}
