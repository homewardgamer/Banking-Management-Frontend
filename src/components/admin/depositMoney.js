import React, { useState } from 'react'
import NavbarCustomer from '../navbarcus'
import Axios from "axios";
import ImgBill from "../../img/deposit2-removebg-preview.png";
import "../../css/bill.css";
import NavbarAdmin from "../navbaradmin";

function DepositMoney() {
  var [r_account, setAccountNumber] = useState("");
  var [pin, setPin] = useState("");
  var [amount, setAmount] = useState("");


  function handleNumberChange(event) {
    const value = event.target.value;
    setAccountNumber(value);
  }
  function handlePinChange(event) {
    const value = event.target.value;
    setPin(value);
  }
  function handleAmountChange(event) {
    const value = event.target.value;
    setAmount(value);
  }
  function depositApi(event) {
    const url = "http://localhost:8000/api/transaction/new";
    const data = {r_account: r_account,pin: pin,amount: amount};
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
      <form
        style={{
          backgroundColor: " #85586F",
          marginTop: "5rem",
          paddingBottom: "3rem",
        }}
      >
        <section>
          <div className="container cc" id="container">
            <div className="form-container sign-in-container">
              <form action="/login" method="POST">
                <h1>Deposit Money</h1>
                <br></br>
                {/* <div className="social-container">
          <a className="btn btn-block" href="/auth/google" role="button">
            <i className="fab fa-google"></i>
          </a>
        </div> */}
                <div className="form-group">
                  {/* <label for="email">Email</label> */}
                  <input
                    type="text"
                    className="form-control"
                    name="AccountNumber"
                    placeholder="Account Number"
                    onChange={handleNumberChange}
                  />
                </div>
                <div className="form-group">
                  {/* <label for="email">Email</label> */}
                  <input
                    type="text"
                    className="form-control"
                    name="pin"
                    placeholder="PIN"
                    onChange={handlePinChange}
                  />
                </div>
                <div className="form-group">
                  {/* <label for="email">Email</label> */}
                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    placeholder="Amount(in Rs.)"
                    onChange={handleAmountChange}
                  />
                </div>
                <button type="submit" className="btn bb">
                  DEPOSIT
                </button>
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
                    width="400"
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

export default DepositMoney;
