import React from "react";
import { Link } from "react-router-dom";
import "./../css/navbar.css";

function NavbarAdmin() {
  function removeData() {
    console.log("Removed data");
    localStorage.clear();
  }
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "red" }}>
          Bank
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
                className="nav-link "
                aria-current="page"
                to="/admin"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-account">
                New Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new-branch">
                New Branch
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new-employee">
                New Employee
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/deposit">
                Deposit
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/withdraw"}>
                Withdraw
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/branch-customer">
                Branch Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/edit-account-info">
                Edit Customer Info
              </Link>
            </li>
            
            <li className="nav-item">
            <Link className="nav-link" to="/seecus-accounts">
              See Customer Accounts
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
export default NavbarAdmin;
