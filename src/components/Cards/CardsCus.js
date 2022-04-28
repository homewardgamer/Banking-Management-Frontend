import React, { Component } from "react";
import Card from "./CardUI";
import Card2 from "./Card2UI";
// import Verification from "../../img/verification.png"
import MoneyTransfer from "../../img/moneytransfer.png"
import BillPayment from "../../img/billpayment.png"
import AccountStatement from "../../img/account-statement.png"
import BlockAccount from "../../img/blockaccount.png"
import ChangePassword from "../../img/change-pwd.png"
import { Link } from "react-router-dom";

class Cards extends Component {
  render() {
    return (
      //  <div><navbar/>

      <div style={{marginTop: "5rem"}}>
        <div
          className="container-fluid d-flex justify-content-space around"
          id="scards"
        >
          {/* <img className="background" src="https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg" alt="Aleq"></img> */}

          <div className="row">
            {/* <div className="row"> */}

            <div className="col-md-12 col-sm-12 ff" id="first">
              <Card2
                title="Customer Name"
              />
            </div>
            
            <div className="col-md-2 col-sm-12 ss" id="first">
            <Link to="/account-statement">
              <Card
                imgsrc={AccountStatement}
                title="Account Statement"
              />
              </Link>
            </div>
            <div className="col-md-2 col-sm-12 ss" id="sec">
            <Link to="/transfer">
              <Card
                imgsrc={MoneyTransfer}
                title="Money Transfer"
              />
              </Link>
            </div>
            <div className="col-md-2 col-sm-12 ss" id="first">
            <Link to="/bill">
              <Card
                imgsrc={BillPayment}
                title="Bill Payment"
              />
              </Link>
            </div>
            <div className="col-md-2 col-sm-12 ss" id="sec">
            <Link to="/block-account">
              <Card
                imgsrc={BlockAccount}
                title="Block Account"
              />
              </Link>
            </div>
            <div className="col-md-2 col-sm-12 ss" id="first">
            <Link to="/change-pwd">
              <Card
                imgsrc={ChangePassword}
                title="Change Password"
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards; 
