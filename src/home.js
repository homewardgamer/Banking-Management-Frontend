import React from "react";
import { Link } from "react-router-dom";
// import Login from "./components/login.customer";
// import App from "./App";
import "./css/home.css";

function Dashboard() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
          <a className="navbar-brand" href="/">
            <h1>
              <img src="https://svgshare.com/i/Jnx.svg" alt="logo" />
            </h1>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-lg-5 pl-lg-4"></ul>

            <ul id="request-head" className="navbar-nav mr-0 mt-2 mt-lg-0">
              <li className="nav-item d-none d-md-block">
              <Link to="/sign-in">
                <button style={{marginRight: "2rem"}}
                  id="header-request-invite-btn"
                  type="button"
                  className="btn btn-lg rounded-pill text-white bg-green-cyan font-weight-bold request-btns">
                  Login
                </button>
                </Link>
              </li>
              <li className="nav-item d-none d-md-block">
              <Link to="/register">
                <button
                  id="header-request-invite-btn"
                  type="button"
                  className="btn btn-lg rounded-pill text-white bg-green-cyan font-weight-bold request-btns">
                  Register
                </button>
                </Link>
              </li>
              
            </ul>
          </div>
        </nav>
      </header>

      {/* <!-- Header Ends -->
  <!-- Intro Starts --> */}
      <div className="d-flex flex-direction-column flex-direction-md-row flex-wrap flex-wrap-md-nowrap">
        <div
          id="introduction"
          className="container-fluid-md  w-md-50 order-md-3 overflow-hidden"
        >
          <div
            id="intro-img-holder"
            className="col-12 row justify-content-center m-0 p-0"
          >
            <img
              id="intro-img"
              className="img-fluid"
              src="https://i.ibb.co/vYFVbTB/image-mockups.png"
              alt="intro img"
            />
          </div>
        </div>
        <div className="container-md w-md-50 d-md-flex justify-content-center align-items-center flex-column">
          <div className="col-md-10 offset-md-1 col-xl-8 offset-xl-0 double-gutter-md-left-padding ">
            <h2 id="business-tagline" className=" text-md-left">
              Next generation digital banking
            </h2>
            <p className="  text-md-left color-grayish-blue">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
           
            <Link to="/sign-in">
            <button style={{display: "inline-block"}}
                id="request-invite-btn"
                type="button"
                className="btn btn-lg rounded-pill text-white bg-green-cyan ml-auto mr-auto ml-md-0 mr-md-0 request-btns"
              >
                Login
              </button>
             
              </Link>
             
           
            <Link to="/register">
              <button style={{display: "inline-block",marginLeft: "1rem"}}
                id="request-invite-btn"
                type="button"
                className="btn btn-lg rounded-pill text-white bg-green-cyan ml-auto mr-auto ml-md-0 mr-md-0 request-btns">Register
              </button>
            </Link>
           
          </div>
        </div>
      </div>
      {/* <!-- Intro Ends -->
  <!-- Why choose Easybank starts --> */}
      <div
        id="choose-easybank"
        className="container-md mt-5 pt-5 mt-md-custom-easybank d-md-flex flex-md-wrap"
      >
        <div
          id="cards"
          className="d-sm-flex justify-content-sm-center align-items-sm-start col-md-10 offset-md-1 flex-sm-wrap"
        >
          <h2 className="text-center text-md-left w-100 gutter-md-left-padding">
            Why choose Easybank?
          </h2>
          <p className="text-center text-md-left color-grayish-blue w-100 gutter-md-left-padding">
            {" "}
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
          <div className="card col-sm-6 col-lg-3 row justify-content-center align-items-center align-items-md-start flex-direction-column">
            <img
              src="https://svgshare.com/i/JpQ.svg"
              alt="Online Banking"
              className="img-fluid"
            />
            <h4>Online Banking</h4>
            <p className="text-center text-md-left color-grayish-blue">
              {" "}
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="card col-sm-6 col-lg-3 row justify-content-center align-items-center align-items-md-start flex-direction-column">
            <img
              src="https://svgshare.com/i/Joj.svg"
              alt="Simple Budgeting"
              className="img-fluid"
            />
            <h4> Simple Budgeting</h4>
            <p className="text-center  text-md-left color-grayish-blue">
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </p>
          </div>
          <div className="card col-sm-6 col-lg-3 row justify-content-center align-items-center align-items-md-start flex-direction-column">
            <img
              src="https://svgshare.com/i/Jp4.svg"
              alt="Fast Onboarding"
              className="img-fluid"
            />
            <h4>Fast Onboarding</h4>
            <p className="text-center  text-md-left color-grayish-blue">
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="card col-sm-6 col-lg-3 row justify-content-center align-items-center align-items-md-start flex-direction-column">
            <img
              src="https://svgshare.com/i/Jp4.svg"
              alt="Open API"
              className="img-fluid"
            />
            <h4>Open API</h4>
            <p className="text-center  text-md-left color-grayish-blue">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
