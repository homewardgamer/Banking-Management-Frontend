import React, { useState } from "react";
import Axios from "axios";
import NavbarAdmin from "../navbaradmin";

function NewBranch() {
  var [branch_name, setBranchName] = useState("");
  var [branch_address, setBranchAddress] = useState("");
  var [branch_code, setBranchCode] = useState("");

  function handleBranchNameChange(event) {
    const value = event.target.value;
    setBranchName(value);
  }
  function handleBranchAddressChange(event) {
    const value = event.target.value;
    setBranchAddress(value);
  }
  function handleBranchCodeChange(event) {
    const value = event.target.value;
    setBranchCode(value);
  }

  function newBranchApi(event) {
    const url = "http://localhost:8000/api/branch/add";
    const data = {
      branch_name: branch_name,
      branch_code: branch_code,
      branch_address: branch_address,
    };
    const token = localStorage.getItem("token");
    Axios.post(url, data, { headers: { Authorization: `Token ${token}` } })
      .then((res) => {
        console.log(res.data);
        alert("Branch Added Succesfully!");
        window.location.href = "/admin";
      })
      .catch((err) => {
        const error = err;
        console.log(error);
        alert(err);
      });
  }
  if (localStorage.getItem("is_admin"))
  {
  return (
    <div>
      <NavbarAdmin />
      <div className="changepwd auth-wrapper">
        <form className="auth-inner">
          <h3>New Branch</h3>
          <div className="mb-3">
            {/* <label>Branch Name</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter Branch Name"
              onChange={handleBranchNameChange}
            />
          </div>
          <div className="mb-3">
            {/* <label>Branch Id</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter Branch Code"
              onChange={handleBranchCodeChange}
            />
          </div>
          <div className="mb-3">
            {/* <label>Branch Name</label> */}
            <input
              type="text"
              className="form-control"
              placeholder="Enter Branch Address"
              onChange={handleBranchAddressChange}
            />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={newBranchApi}
            >
              Add Branch
            </button>
          </div>
        </form>
      </div>
    </div>
  );}else{
    return <div>
      <h1 style={{margin: "2rem"}}>Not Authorized.</h1>
    </div>
  }
}

export default NewBranch;
