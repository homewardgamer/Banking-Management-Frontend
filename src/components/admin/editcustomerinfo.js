import React, { Component } from 'react'
import NavbarAdmin from '../navbaradmin'

export default class EditAccount extends Component {
  render() {
    return (
      <div>
      <NavbarAdmin/>
    <div className="auth-wrapper">
      <form className='auth-inner'>
        <h3>Edit Account Information</h3>

        <div className="mb-3">
          <label>Account Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Account Number"
          />
        </div>
        
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        
        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter D.O.B"
          />
        </div>

        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter Phone Number"
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Branch</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Branch"
          />
        </div>

        <div className="mb-3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Edit the Information
          </button>
        </div>
      </form>
    </div>
    </div>
    )
  }
}