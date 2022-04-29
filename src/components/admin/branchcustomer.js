import React, { Component } from 'react'
import NavbarAdmin from '../navbaradmin'
export default class NewBranch extends Component {
  render() {
    return (
      <div>
      <NavbarAdmin/>
    <div className="changepwd auth-wrapper">
      <form className="auth-inner">
        <h3>Branch Customers</h3>

        <div className="mb-3">
          {/* <label>Branch Id</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Branch Id"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Get Customer Details
          </button>
        </div>
      </form>
      </div>
      </div>
    )
  }
}
