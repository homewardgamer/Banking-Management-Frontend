import React, { useState } from 'react'
import NavbarCustomer from '../navbarcus'
import Axios from "axios";
import NavbarAdmin from '../navbaradmin'
function NewBranch(){

  var [branch_id, setBranchId] = useState("");

  function handleBranchIdChange(event) {
    const value = event.target.value;
    setBranchId(value);
  }

  function NewBranchApi(event) {
    const url = "http://localhost:8000/api/branch/customers";
    const data = {branch_id: branch_id};
    const token = localStorage.getItem('token');
    Axios.post(url,{headers: {Authorization: `Token ${token}`}}, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

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
            onChange={handleBranchIdChange}
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

  export default NewBranch;