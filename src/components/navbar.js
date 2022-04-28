import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          Bank
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/home"}>
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>
               Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/change-pwd"}>
                Change Pwd
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/customer"}>
                Customer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/admin"}>
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/account-statement"}>
                Account Statement
              </Link>
            </li>
            {/*
                <li className="nav-item">
                  <Link className="nav-link" to={'/new-branch'}>
                    New Branch
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/new-employee'}>
                    New Employee
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/branch-customer'}>
                    Branch Customer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/block-account'}>
                    Block Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/edit-account-info'}>
                    Edit Account Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/see-account-info'}>
                    See Account Info
                  </Link>
                </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
