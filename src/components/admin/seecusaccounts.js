import React, { useState } from 'react'
import Axios from "axios";
import NavbarAdmin from '../navbaradmin'

// account_detail_by_id
function SeeCusAccounts(){
var [id, setCusId] = useState("");

  function handleAccountNumChange(event) {
    const value = event.target.value;
    setCusId(value);
  }
  function SeeCusAccountsApi(event) {
    const url = `http://localhost:8000/api/account/list`;
    const token = localStorage.getItem('token');
    const data= {id:id};
    Axios.get(url,data,{headers: {Authorization: `Token ${token}`}})
      .then((res) => {
        console.log(res.data);
        alert("Fetched Account Successfully!!");
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
    <div className="auth-wrapper">
      <form className="auth-inner">
        <h3>See Customer Accounts</h3>

        <div className="mb-3">
          {/* <label>Account Number</label> */}
          <input
            type="number"
            className="form-control"
            placeholder="Customer Id"
            onChange={handleAccountNumChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={SeeCusAccountsApi}>
            See Customer Accounts
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

  export default SeeCusAccounts;