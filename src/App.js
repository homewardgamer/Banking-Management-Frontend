import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import ChangePassword from './components/changepwd'
import Customer from './customer'
import Bill from "./components/customer/billpayment"
import Transfer from "./components/customer/moneytransfer"
import Deposit from "./components/customer/depositMoney"
import Withdraw from "./components/customer/withdrawMoney"

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Bank
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
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
              </ul>
            </div>
          </div>
        </nav>

        <div>
          <div>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/change-pwd" element={<ChangePassword />} />
              <Route path="customer" element={<Customer/>}/>
              {/* below routes are just for check */}
              <Route path="bill" element={<Bill/>}/>
              <Route path="transfer" element={<Transfer/>}/>
              <Route path="deposit" element={<Deposit/>}/>
              <Route path="withdraw" element={<Withdraw/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
