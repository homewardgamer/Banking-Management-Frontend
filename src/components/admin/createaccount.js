import React, { useState } from 'react'
import NavbarAdmin from '../navbaradmin'
import Axios from "axios";

function CreateAccount(){
    var [id, setCusId] = useState("");
    var [pin, setPin] = useState("");
    var [account_type, setAccountType] = useState("SAVING");

    function handleCusIdChange(event) {
      const value = event.target.value;
      setCusId(value);
    }
    function handlePinChange(event) {
      const value = event.target.value;
      setPin(value);
    }

      function handleAccountTypeChange(event) {
        const value = event.target.value;
        setAccountType(value);
      }
    function CreateAccountApi(event) {
      const url = "http://127.0.0.1:8000/api/account/create";
      
      const data = { account_holder:id,account_type:account_type, pin: pin };
      event.preventDefault();
      const token = localStorage.getItem('token');
      Axios.post(url,data,{headers: {Authorization: `Token ${token}`}})
        .then((res) => {
          console.log(res.data);
          alert("Account created");
        window.location.href = "/admin";
        })
        .catch((err) => {
          alert(err);
        });
      }
  
      const name = localStorage.getItem('is_admin');
      if (name=="true")
      {
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
          <label>Account Type</label>
          {/* <input
            type="text"
            className="form-control"
            placeholder="Enter Account Type"
            onChange={handleAccountTypeChange}
          /> */}
          <select type="text"
            className="form-control"
            placeholder="Enter Account Type"
            onChange={handleAccountTypeChange}>
          <option value="SAVING">SAVING</option>
          <option value="CURRENT">CURRENT</option>
          </select>

        </div>
        
        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Verification Pin"
            onChange={handlePinChange}
          />
        </div>

        <div className="d-grid">
          {/* <button type="submit" className="btn btn-primary" onClick={CreateAccountApi}>
            Create Account
          </button> */}
          <button
              type="submit"
              className="btn bb"
              onClick={CreateAccount}>
              Create Account
          </button>
        </div>
      </form>
      </div>
      </div>
    )
}else{
  return <div>
    <h1 style={{margin: "2rem"}}>Not Authorized.</h1>
  </div>
}
}

export default CreateAccount;