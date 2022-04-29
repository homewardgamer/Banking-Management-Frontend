import React from 'react'
import NavbarCustomer from '../navbarcus'



function AccountStatement (){
    return (
      <div>
      <NavbarCustomer/>
    <div className="auth-wrapper">
      <form className='auth-inner'>
        <h3>Generate Account Statement</h3>

        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="number"
            className="form-control"
            placeholder="Account Number"
          />
        </div>

        <div className="mb-3">
          {/* <label>Start Date</label> */}
          <input
            type="date"
            className="form-control"
            placeholder="Start Date"
          />
        </div>

        <div className="mb-3">
          {/* <label>End Date</label> */}
          <input
            type="date"
            className="form-control"
            placeholder="End Date"
          />
        </div>


        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Generate Statement
          </button>
        </div>
      </form>
    </div>
    </div>
    )
}

export default AccountStatement;