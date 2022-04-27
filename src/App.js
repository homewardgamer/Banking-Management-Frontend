import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import CustomerLogin from './components/login.customer'
import AdminLogin from './components/login.admin'
import ChangePassword from './components/changepwd'
import BlockAccount from './components/customer/blockaccount'
import EditAccount from './components/admin/editcustomerinfo'
import SeeAccount from './components/admin/seeaccountinfo'
import NewBranch from './components/admin/newbranch'
import NewEmployee from './components/admin/employeeinfo'
import BranchCustomer from './components/admin/branchcustomer'
import AccountStatement from './components/customer/accountstatement'

import Admin from './admin'
import Customer from './customer'


function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/'}>
              Bank
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/cus-sign-in'}>
                    Customer Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/admin-sign-in'}>
                    Admin Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/change-pwd'}>
                    Change Pwd
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/customer'}>
                    Customer
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/admin'}>
                    Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/account-statement'}>
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

        <div>
          <div>
            <Routes>
              <Route exact path="/" element={<CustomerLogin />} />
              <Route path="/cus-sign-in" element={<CustomerLogin />} />
              <Route path="/admin-sign-in" element={<AdminLogin />} />
              <Route path="/change-pwd" element={<ChangePassword />} />
              <Route path="/customer" element={<Customer/>}/>
              <Route path="/admin" element={<Admin/>}/>
              <Route path="/block-account" element={<BlockAccount/>}/>
              <Route path="/edit-account-info" element={<EditAccount/>}/>
              <Route path="/see-account-info" element={<SeeAccount/>}/>
              <Route path="/new-branch" element={<NewBranch/>}/>
              <Route path="/new-employee" element={<NewEmployee/>}/>
              <Route path="/branch-customer" element={<BranchCustomer/>}/>
              <Route path="/account-statement" element={<AccountStatement/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
