import React, { Component } from 'react'
import ImgBill from "../../img/payy-removebg-preview.png"
import "../../css/bill.css"

export default class Login extends Component {
  render() {
    return (
      <form  style={{backgroundColor: " #85586F",marginTop: "5rem",paddingBottom: "3rem"}}>
        <section>
  <div className="container cc" id="container">
    <div className="form-container sign-in-container">
      <form action="/login" method="POST">
        <h1>Bill Payment</h1>
        <br></br>
        {/* <div className="social-container">
          <a className="btn btn-block" href="/auth/google" role="button">
            <i className="fab fa-google"></i>
          </a>
        </div> */}
        <div className="form-group">
          {/* <label for="email">Email</label> */}
          <input type="text" className="form-control" name="fName" placeholder="First Name" />
        </div>
        <div className="form-group">
          {/* <label for="email">Email</label> */}
          <input type="text" className="form-control" name="lName" placeholder="Last Name" />
        </div>
        <div className="form-group">
          {/* <label for="email">Email</label> */}
          <input type="text" className="form-control" name="AccountNumber" placeholder="Account Number" />
        </div>
        <div className="form-group">
          {/* <label for="password">Password</label> */}
          <input type="password" className="form-control" name="password" placeholder="Password" />
        </div>
        <div className="form-group">
          {/* <label for="email">Email</label> */}
          <input type="text" className="form-control" name="message" placeholder="Message" />
        </div>
        <button type="submit" className="btn bb">PAY BILL</button>
      </form>
    </div>
    <div className="overlay-container">
    <div className="overlay">
    <div className="overlay-panel overlay-right">
      {/* <h1>Welcome Back!</h1>
      <p>Are you a new user? </p>
      <a className="btn btn-light btn-lg" href="/register" role="button">SIGN UP</a>
      <a className="btn btn-dark btn-lg" href="/" role="button">Back Home</a>  */}
      <img id="im" src={ImgBill} alt="dones" width="350" height="600"/>
    </div>
  </div>
</div>
</div>
</section>
      </form>
    )
  }
}

