import React, { Component } from "react";
import Card from "./CardUI";
import Card2 from "./Card2UI";
import Verification from "../../img/verification.png"
import MoneyTransfer from "../../img/moneytransfer.png"
import BillPayment from "../../img/billpayment.png"
import AccountStatement from "../../img/accountstatement.png"


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
                imgsrc="https://images.unsplash.com/photo-1560523159-6b681a1e1852?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                title="KEYNOTE SESSION"
                content="A Conference or convocation and outlined the themes to be covered in ways that got the participants talking and thinking along the right lines."
              />
            </div>
            <div className="col-md-3 col-sm-12 ss" id="sec">
              <Card
                imgsrc={Verification}
                title="Verification"
                content="The inviter generally sends the invitee a personal note or gives them a call, asks if they’d like to talk at a particular event, and relays details about the event."
              />
            </div>
            <div className="col-md-3 col-sm-12 ss" id="first">
              <Card
                imgsrc={AccountStatement}
                title="Account Statement"
              />
            </div>
            <div className="col-md-3 col-sm-12 ss" id="sec">
              <Card
                imgsrc={MoneyTransfer}
                title="Money Transfer"
              />
            </div>
            <div className="col-md-3 col-sm-12 ss" id="sec">
              <Card
                imgsrc={BillPayment}
                title="Bill Payment"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cards; 
