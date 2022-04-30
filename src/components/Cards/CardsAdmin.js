import React, { Component, useEffect, useState } from "react";
import Card from "./CardUI";
import Card2 from "./Card2UI";
import deposit from "../../img/deposit.png";
import withdraw from "../../img/withdraw.png";
import addBranch from "../../img/addBranch.png";
import CustD from "../../img/CustomerDetails.png";
import editCustInfo from "../../img/editCustInfo.png";
import addEmployee from "../../img/addEmployee.png";
// import ChangePassword from "../../img/change-pwd.png"
import { Link } from "react-router-dom";
import Axios from "axios";

function Cards() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const newUrl = "http://localhost:8000/api/user/view";
    const token = localStorage.getItem("token");
    Axios.get(newUrl, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        const data = res.data;
        setUserName(data.username);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  });
  return (
    <div style={{ marginTop: "5rem" }}>
      <div
        className="container-fluid d-flex justify-content-space around"
        id="scards"
      >
        {/* <img className="background" src="https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg" alt="Aleq"></img> */}

        <div className="row">
          {/* <div className="row"> */}

          <div className="col-md-12 col-sm-12 ff" id="first">
            <Card2 title={userName} />
          </div>

          <div className="col-md-2 col-sm-12 ss" id="first">
            <Link to="/deposit">
              <Card imgsrc={deposit} title="Deposit Money" />
            </Link>
          </div>
          <div className="col-md-2 col-sm-12 ss" id="sec">
            <Link to="/withdraw">
              <Card imgsrc={withdraw} title="Withdraw Money" />
            </Link>
          </div>
          <div className="col-md-2 col-sm-12 ss" id="first">
            <Link to="/see-account-info">
              <Card imgsrc={editCustInfo} title="Customer Info" />
            </Link>
          </div>
          <div className="col-md-2 col-sm-12 ss" id="sec">
            <Link to="/new-employee">
              <Card imgsrc={addEmployee} title="Add Employee" />
            </Link>
          </div>
          <div className="col-md-2 col-sm-12 ss" id="first">
            <Link to="/new-branch">
              <Card imgsrc={addBranch} title="Add New Branch" />
            </Link>
          </div>
          <div className="col-md-2 col-sm-12 ss" id="first">
            <Link to="/branch-customer">
              <Card imgsrc={CustD} title="Branch Customers" />
            </Link>
          </div>
          {/* <div className="col-md-2 col-sm-12 ss" id="first">
            <Link to="/change-pwd">
              <Card
                imgsrc={ChangePassword}
                title="Change Password"
              />
              </Link>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;
