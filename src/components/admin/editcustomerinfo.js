import React, { useState } from 'react'
import Axios from "axios";
import NavbarAdmin from "../navbaradmin";

function EditAccount() {
  var [first_name, setFirstName] = useState("");
  var [last_name, setLastName] = useState("");
  var [email, setEmail] = useState("");
  var [address, setAddress] = useState("");
  var [dob, setDOB] = useState("");
  

  function handleFirstChange(event) {
    const value = event.target.value;
    setFirstName(value);
  }
  function handleLastChange(event) {
    const value = event.target.value;
    setLastName(value);
  }
  function handleEmailChange(event) {
    const value = event.target.value;
    setEmail(value);
  }

  function handleAddressChange(event) {
    const value = event.target.value;
    setAddress(value);
  }
  function handleDOBChange(event) {
    const value = event.target.value;
    setDOB(value);
  }

  function EditCustomerApi(event) {
    const url = "http://localhost:8000/api/user/update/<user_id>";
    const data = {first_name: first_name,last_name: last_name,address: address,dob: dob, email:email};
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
      <NavbarAdmin />
      <div className="auth-wrapper">
        <form className="auth-inner">
          <h3>Edit Account Information</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={handleFirstChange}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={handleLastChange}
            />
          </div>

          <div className="mb-3">
            <label>Date of Birth</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter D.O.B"
              onChange={handleDOBChange}
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={handleEmailChange}
            />
          </div>

          <div className="mb-3">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              onChange={handleAddressChange}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={EditCustomerApi}>
              Edit the Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditAccount;
