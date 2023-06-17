import React from "react";
import { Link } from "react-router-dom";

function NavBarCus() {
  function removeData() {
    console.log("Removed data");
    localStorage.clear();
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "red", fontWeight:"bold" }}>
            Bank Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/customer"
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account-statement">
                  Account Statement
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/transfer">
                  Money Transfer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/bill">
                  Bill Payment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/see-account-info"}>
                  See Account Info
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/block-account">
                  Block Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/change-pwd">
                  Change Pwd
                </Link>
              </li>
              
              <li className="nav-item" onClick={removeData}>
                <Link className="nav-link" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarCus;
