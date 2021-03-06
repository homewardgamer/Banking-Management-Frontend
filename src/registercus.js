import React, { useState } from "react";
import ImgBill from  "./img/registercustomer.png"
import "./css/bill.css";
import Axios from "axios";
import { Link } from "react-router-dom";

function Registeration() {
  var [username, setUsername] = useState("");
  var [first_name, setFirstName] = useState("");
  var [last_name, setLastName] = useState("");
  var [dob, setDOB] = useState("");
  var [address, setAddress] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var [branch_code, setBranch] = useState("");

  function handleUsernameChange(event) {
    const value = event.target.value;
    setUsername(value);
  }
  function handleFirstNameChange(event) {
    const value = event.target.value;
    setFirstName(value);
  }
  function handleLastNameChange(event) {
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
  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);
  }
  function handleBranchChange(event) {
    const value = event.target.value;
    setBranch(value);
  }

  function RegisterCustomerApi(event) {
    const url = "https://bankmgmtapi.herokuapp.com/api/user/register";
    const data = {
      username: username,
      first_name: first_name,
      last_name: last_name,
      dob: dob,
      email: email,
      address: address,
      password: password,
      is_customer: true,
      branch_code:branch_code,
    };
    const token = localStorage.getItem('token');
    // Axios.post(url,{headers: {Authorization: `Token ${token}`}}, data)
    Axios.post(url, data)
      .then((res) => {
        console.log(res.data);
        alert("Registered Successfully.");
        window.location.href = "/";
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <form id="register"
        style={{
          
          background:"linear-gradient(#06beb6, #48b1bf)",
          padding: "2.85rem",
        }}
      >
        <section>
          <div className="container cc" id="container">
            <div className="form-container sign-in-container">
              <form action="/login" method="POST" style={{paddingTop: "2rem"}}>
                <h1>Register</h1>
                
                <div className="form-group">
                  {/* <label for="email">Email</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="form-group">
                  {/* <label for="email">Email</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    onChange={handleFirstNameChange}
                  />
                </div>
                <div className="form-group">
                  {/* <label for="password">Password</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={handleLastNameChange}
                  />
                </div>
                <div className="form-group">
                  {/* <label for="password">Password</label> */}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="form-group">
                  {/* <label for="password">Password</label> */}
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Date Of Birth"
                    onChange={handleDOBChange}
                  />
                </div>
                <div className="form-group">
                  {/* <label for="password">Password</label> */}
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Bank Branch Code"
                    onChange={handleBranchChange}
                  />
                </div>
                <div className="form-group">
                  {/* <label for="password">Password</label> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    onChange={handleAddressChange}
                  />
                </div>
                <div className="form-group">
                  {/* <label for="password">Password</label> */}
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Verification password"
                    onChange={handlePasswordChange}
                  />
                </div>
                <p style={{fontSize: "10px", fontWeight: "bold",marginTop: "-0.5rem"}}>Min 8 character Alphanumeric Password and should include a Special character</p>
                <Link to="/">
                  <button style={{marginTop: "-4rem"}}
                    type="submit"
                    className="btn bb"
                    onClick={RegisterCustomerApi}
                  >
                    REGISTER
                  </button>
                </Link>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-right">
                  {/* <h1>Welcome Back!</h1>
      <p>Are you a new user? </p>
      <a className="btn btn-light btn-lg" href="/register" role="button">SIGN UP</a>
      <a className="btn btn-dark btn-lg" href="/" role="button">Back Home</a>  */}
                  <img
                    id="im"
                    src={ImgBill}
                    alt="dones"
                    width="350"
                    height="600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}

export default Registeration;
