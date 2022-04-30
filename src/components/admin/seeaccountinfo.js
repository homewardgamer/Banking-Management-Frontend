import React, { useState } from 'react'
import Axios from "axios";
import NavbarAdmin from '../navbaradmin'

// account_detail_by_id
function SeeAccount(){
var [s_account, setAccountNumber] = useState("");

  function handleAccountNumChange(event) {
    const value = event.target.value;
    setAccountNumber(value);
  }
  function seeAccountApi(event) {
    const url = "http://localhost:8000/api/account/view/{account_id}";
    const data = {s_account: s_account};
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
    <div className="auth-wrapper">
      <form className="auth-inner">
        <h3>See Account Information</h3>

        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="number"
            className="form-control"
            placeholder="Account Number"
            onchange={handleAccountNumChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={seeAccountApi}>
            See Account Information
          </button>
        </div>
        
      </form>
      </div>
      </div>
    )
  }

  export default SeeAccount;