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
    const url = `http://localhost:8000/api/account/view/${s_account}`;
    const token = localStorage.getItem('token');
    Axios.get(url,{headers: {Authorization: `Token ${token}`}})
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
            onChange={handleAccountNumChange}
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
    )}  else{
      return <div>
        <h1 style={{margin: "2rem"}}>Not Authorized.</h1>
      </div>
    }
  }  
  export default SeeAccount;