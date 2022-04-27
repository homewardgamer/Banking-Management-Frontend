import React, { Component } from 'react'

export default class NewBranch extends Component {
  render() {
    return (
    <div className="changepwd auth-wrapper">
      <form className="auth-inner">
        <h3>New Branch</h3>

        <div className="mb-3">
          <label>Branch Id</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Branch Id"
          />
        </div>
        <div className="mb-3">
          <label>Branch Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Branch Name"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Add Branch
          </button>
        </div>
      </form>
      </div>
    )
  }
}
