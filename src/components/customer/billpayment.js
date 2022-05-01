import React,{useState} from 'react'
import ImgBill from "../../img/payy-removebg-preview.png"
import "../../css/bill.css"
import NavbarCustomer from '../navbarcus'
import Axios from "axios";

function BillPayment(){
  var [s_account, setSeAccount] = useState("");
  var [r_account, setReAccount] = useState("");
  var [amount, setAmount] = useState("");
  var [pin, setPin] = useState("");

  function handleSeAccountChange(event) {
    const value = event.target.value;
    setSeAccount(value);
  }
  function handleReAccountChange(event) {
    const value = event.target.value;
    setReAccount(value);
  }
  function handleAmountChange(event) {
    const value = event.target.value;
    setAmount(value);
  }
  function handlePinChange(event) {
    const value = event.target.value;
    setPin(value);
  }

  function BillPaymentApi(event) {
    const url = "http://localhost:8000/api/transaction/new";
    const data = { s_account: s_account,r_account:r_account,amount:amount, pin: pin };
    Axios.post(url, data)
      .then((res) => {
        console.log(res.data);
        alert("Bill Payed!!");
        window.location.href = "/customer";
      })
      .catch((err) => {
        alert(err);
      });
    }
    const name = localStorage.getItem('is_customer');
    console.log(name);
    if (name=="true")
    {
    return (
      <div>
      <NavbarCustomer/>
      <form  style={{backgroundColor: " #85586F",marginTop: "5rem",paddingBottom: "3rem"}}>
        <section>
  <div className="container cc" id="container">
    <div className="form-container sign-in-container">
    <form action="/login" method="POST">
        <h1>Bill Payment</h1>
        <br></br>
        <div className="form-group">
          {/* <label for="email">Email</label> */}
          <input type="number" className="form-control"  placeholder="Sender Account Number" onChange={handleSeAccountChange}/>
        </div>
        <div className="form-group">
          {/* <label for="email">Email</label> */}
          <input type="number" className="form-control" placeholder="Receiver Account Number" onChange={handleReAccountChange}/>
        </div>
        <div className="form-group">
          {/* <label for="password">Password</label> */}
          <input type="number" className="form-control" placeholder="Amount" onChange={handleAmountChange} />
        </div>
        <div className="form-group">
          {/* <label for="password">Password</label> */}
          <input type="number" className="form-control" placeholder="Verification Pin" onChange={handlePinChange}/>
        </div>
        <button type="submit" className="btn bb" onClick={BillPaymentApi}>TRANSFER</button>
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
      </div>
    )}else{
      return <div>
        <h1 style={{margin: "2rem"}}>Not Authorized.</h1>
      </div>
    }
}

export default BillPayment;

