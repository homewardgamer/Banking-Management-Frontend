import React, { useState } from 'react'
import NavbarAdmin from '../navbaradmin'
import Axios from "axios";

function CreateAccount(){
    var [id, setCusId] = useState("");
    var [pin, setPin] = useState("");
    var [account_type, setAccountType] = useState("");
    var [branch, setBranch] = useState("");
  
    function handleCusIdChange(event) {
      const value = event.target.value;
      setCusId(value);
    }
    function handlePinChange(event) {
      const value = event.target.value;
      setPin(value);
    }
    function handleBranchChange(event) {
        const value = event.target.value;
        setBranch(value);
      }
      function handleAccountTypeChange(event) {
        const value = event.target.value;
        setAccountType(value);
      }
    function CreateAccountApi(event) {
      const url = "http://localhost:8000/api/account/disable/{account_id}";
      
      const data = { id:id,account_type:account_type,branch: branch, pin: pin };
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
        <h3>Create Account</h3>
        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="number"
            className="form-control"
            placeholder="Enter Customer ID"
            onChange={handleCusIdChange}
          />
        </div>
        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Account Type"
            onChange={handleAccountTypeChange}
          />
        </div>
        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Bank Branch"
            onChange={handleBranchChange}
          />
        </div>
        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="number"
            className="form-control"
            placeholder="Enter Verification Pin"
            onChange={handlePinChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={CreateAccountApi}>
            Create Account
          </button>
        </div>
      </form>
      </div>
      </div>
    )
}

export default CreateAccount;