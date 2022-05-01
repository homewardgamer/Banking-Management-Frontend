import React, { useState } from 'react'
import NavbarCustomer from '../navbarcus'
import Axios from "axios";

function BlockAccount(){
    var [account_id, setAccount] = useState("");
    var [pin, setPin] = useState("");
  
    function handleAccountChange(event) {
      const value = event.target.value;
      setAccount(value);
    }
    function handlePinChange(event) {
      const value = event.target.value;
      setPin(value);
    }
    function DisableAccountApi(event) {
      const url = "http://localhost:8000/api/account/disable/{account_id}";
      
      const data = { account_id: account_id, pin: pin };
      const token = localStorage.getItem('token');
      Axios.post(url,{headers: {Authorization: `Token ${token}`}}, data)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          alert(err);
        });
      }

      const name = localStorage.getItem('is_customer');
      if (name=="true")
      {
  
return (
      <div>
      <NavbarCustomer/>
    <div className="changepwd auth-wrapper">
      <form className="auth-inner">
        <h3>Block Account</h3>
        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="number"
            className="form-control"
            placeholder="Enter Account Number"
            onChange={handleAccountChange}
          />
        </div>

        <div className="mb-3">
          {/* <label>Password</label> */}
          <input
            type="password"
            className="form-control"
            placeholder="Enter Pin"
            onChange={handlePinChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={DisableAccountApi}>
            Block Account
          </button>
        </div>
      </form>
      </div>
      </div>
    )}else{
      return <div>
        <h1 style={{margin: "2rem"}}>Not Authorized.</h1>
      </div>
    }
}

export default BlockAccount;