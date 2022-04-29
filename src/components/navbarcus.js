import React from "react";
import { Link } from "react-router-dom";

function NavbarCustomer() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          Bank
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
              <Link className="nav-link" to={"/customer"}>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/account-statement"}>
                Account Statement
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/transfer'}>
                Money Transfer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/bill'}>
                Bill Payment
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/block-account'}>
                Block Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/change-pwd"}>
                Change Pwd
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/home"}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavbarCustomer;
