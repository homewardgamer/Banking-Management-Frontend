import React, { Component } from 'react'
import ImgBill from "../../img/deposit2-removebg-preview.png"
import "../../css/bill.css"

export default class Login extends Component {
  render() {
    return (
      <form style={{backgroundColor: " #3a293ae8",marginTop: "5rem"}}>
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
          <input type="text" className="form-control" name="AccountNumber" placeholder="Account Number" />
        </div>
        <div className="form-group">
          {/* <label for="email">Email</label> */}
          <input type="text" className="form-control" name="AccountHolder" placeholder="Account Holder Name" />
        </div>
        <div className="form-group">
          {/* <label for="password">Password</label> */}
          <input type="text" className="form-control" name="bank" placeholder="Drawee Bank/Branch" />
        </div>
        <div className="form-group">
          {/* <label for="email">Email</label> */}
          <input type="number" className="form-control" name="amount" placeholder="Amount(in Rs.)" />
        </div>
        <button type="submit" className="btn btn-dark">DEPOSIT</button>
      </form>
    </div>
    <div className="overlay-container">
    <div className="overlay">
    <div className="overlay-panel overlay-right">
      {/* <h1>Welcome Back!</h1>
      <p>Are you a new user? </p>
      <a className="btn btn-light btn-lg" href="/register" role="button">SIGN UP</a>
      <a className="btn btn-dark btn-lg" href="/" role="button">Back Home</a>  */}
      <img src={ImgBill} alt="dones" width="400" height="600"/>
    </div>
  </div>
</div>
</div>
</section>
      </form>
    )
  }
}

