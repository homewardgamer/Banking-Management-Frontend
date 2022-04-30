import React, { useEffect, useState } from "react";
import Axios from "axios";
import NavbarAdmin from "../navbaradmin";
function NewBranch() {
  var [branch_id, setBranchId] = useState("");

  function handleBranchIdChange(event) {
    const value = event.target.value;
    setBranchId(value);
  }

  function BranchCusApi(event) {
    const url = "http://localhost:8000/api/branch/all";
    const data = { branch_id: branch_id };
    const token = localStorage.getItem("token");
    Axios.post(url, { headers: { Authorization: `Token ${token}` } }, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <NavbarAdmin />
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
            <button
              type="submit"
              className="btn btn-primary"
              onClick={BranchCusApi}
            >
              Get Customer Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewBranch;
