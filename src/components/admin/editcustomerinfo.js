import React, { useState } from 'react'
import Axios from "axios";
import NavbarAdmin from "../navbaradmin";

function EditAccount() {
  var [id, setCusId] = useState("");
  var [username, setUsername] = useState("");
  var [first_name, setFirstName] = useState("");
  var [last_name, setLastName] = useState("");
  var [dob, setDOB] = useState("");
  var [address, setAddress] = useState("");
  var [email, setEmail] = useState("");
  var [branch_code, setBranch] = useState("");

  function handleCusIdChange(event) {
    const value = event.target.value;
    setCusId(value);
  }
  function handleUsernameChange(event) {
    const value = event.target.value;
    setUsername(value);
  }
  function handleFirstChange(event) {
    const value = event.target.value;
    setFirstName(value);
  }
  function handleLastChange(event) {
    const value = event.target.value;
    setLastName(value);
  }
  function handleDOBChange(event) {
    const value = event.target.value;
    setDOB(value);
  }
  function handleEmailChange(event) {
    const value = event.target.value;
    setEmail(value);
  }
  function handleAddressChange(event) {
    const value = event.target.value;
    setAddress(value);
  }

  function handleBranchChange(event) {
    const value = event.target.value;
    setBranch(value);
  }

  function EditCustomerApi(event) {
    const url = `http://127.0.0.1:8000/api/user/update/${id}`;
    const data = {id:id,username:username,first_name: first_name,last_name: last_name,address: address,dob: dob, email:email,branch_code:branch_code};
    const token = localStorage.getItem('token');
    event.preventDefault();
    Axios.put(url,data,{headers: {Authorization: `Token ${token}`}})
      .then((res) => {
        console.log(res.data);
        alert("Successfully Edited.");
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
      <NavbarAdmin />
      <form
        style={{
          marginTop:"1rem",
          // background:"#6867bc",
          padding: "2.85rem",
          }}
      >
        <section>
      <div className="container cc" id="container">
      <div style={{marginTop:"3vh"}}><h1>Edit Customer Information</h1></div>
        <div className="form-container sign-in-container">
        <form action="/login" method="POST">
            {/* <h1>New Employee</h1>
            <br></br> */}
        <div className="mb-">
          {/* <label>First name</label> */}
          <input
            type="number"
            className="form-control"
            placeholder="Customer Id"
            onChange={handleCusIdChange}
          />
        </div>
        <div className="mb-2">
          {/* <label>First name</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-2">
          {/* <label>First name</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={handleFirstChange}
          />
        </div>

        <div className="mb-2">
          {/* <label>Last name</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={handleLastChange}
          />
        </div>

        
            
            
          </form>
        </div>
        <div className="overlay-container">
        <div className="overlay">
        <div className="overlay-panel overlay-right">
          {/* <img id="im" src={Register} alt="dones" width="350" height="600"/> */}

        <div className="mb-2">
          <label>Date of Birth</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter D.O.B"
            onChange={handleDOBChange}
          />
        </div>

        <div className="mb-3">
          {/* <label>Email address</label> */}
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
        </div>

        <div className="mb-3">
          {/* <label>Address</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            onChange={handleAddressChange}
          />
        </div>
        <div className="mb-3">
          {/* <label>Address</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter Branch Code"
            onChange={handleBranchChange}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={EditCustomerApi}>
            Edit the Information
          </button>
        </div>
        

        </div>
      </div>
    </div>
    </div>
    </section>
      </form>
    </div>
  );}else{
    return <div>
      <h1 style={{margin: "2rem"}}>Not Authorized.</h1>
    </div>
  }
}

export default EditAccount;
