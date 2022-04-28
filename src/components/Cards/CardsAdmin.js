import React, { Component } from "react";
import Card from "./CardUI";
import Card2 from "./Card2UI";
import deposit from "../../img/deposit.png"
import withdraw from "../../img/withdraw.png"
import addBranch from "../../img/addBranch.png"
import CustD from "../../img/CustomerDetails.png"
import editCustInfo from "../../img/editCustInfo.png"
import addEmployee from "../../img/addEmployee.png"
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
                title="Admin Name"
              />
            </div>
            
            <div className="col-md-2 col-sm-12 ss" id="first">
            <Link to="/account-statement">
              <Card
                imgsrc={deposit}
                title="DEPOSIT MONEY"
              />
              </Link>
            </div>
            <div className="col-md-2 col-sm-12 ss" id="sec">
            <Link to="/transfer">
              <Card
                imgsrc={withdraw}
                title="WITHDRAW MONEY"
              />
              </Link>
            </div>
            <div className="col-md-2 col-sm-12 ss" id="first">
            <Link to="/bill">
              <Card
                imgsrc={editCustInfo}
                title="EDIT INFO"
              />
              </Link>
            </div>
            <div className="col-md-2 col-sm-12 ss" id="sec">
            <Link to="/block-account">
              <Card
                imgsrc={addEmployee}
                title="ADD EMPLOYEE"
              />
              </Link>
            </div>
            <div className="col-md-2 col-sm-12 ss" id="first">
            <Link to="/change-pwd">
              <Card
                imgsrc={addBranch}
                title="ADD BRANCH"
              />
              </Link>
            </div>
            <div className="col-md-2 col-sm-12 ss" id="first">
            <Link to="/change-pwd">
              <Card
                imgsrc={CustD}
                title="CUSTOMER DETAILS"
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
