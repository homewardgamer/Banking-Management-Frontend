import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./components/login";
import ChangePassword from "./components/changepwd";
import BlockAccount from "./components/customer/blockaccount";
import EditAccount from "./components/admin/editcustomerinfo";
import SeeAccount from "./components/admin/seeaccountinfo";
import NewBranch from "./components/admin/newbranch";
import NewEmployee from "./components/admin/employeeinfo";
import BranchCustomer from "./components/admin/branchcustomer";
import AccountStatement from "./components/customer/accountstatement";
import Admin from "./admin";
import Customer from "./customer";
import Bill from "./components/customer/billpayment";
import Transfer from "./components/customer/moneytransfer";
import Deposit from "./components/admin/depositMoney";
import Withdraw from "./components/admin/withdrawMoney";
import Verify from "./components/customer/verification";
import Dashboard from "./home.js";

const Main = () => {
  return (
    <Routes>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route path="/" element={<Dashboard />} />
      <Route path="/home" element={<Dashboard />} />
      {/* <Route exact path="/home" element={<Home />} /> */}
      <Route path="/sign-in" element={<Login />} />
      <Route path="/change-pwd" element={<ChangePassword />} />
      {/* below routes are just for check */}
      <Route path="/bill" element={<Bill />} />
      <Route path="/transfer" element={<Transfer />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/block-account" element={<BlockAccount />} />
      <Route path="/edit-account-info" element={<EditAccount />} />
      <Route path="/see-account-info" element={<SeeAccount />} />
      <Route path="/new-branch" element={<NewBranch />} />
      <Route path="/new-employee" element={<NewEmployee />} />
      <Route path="/branch-customer" element={<BranchCustomer />} />
      <Route path="/account-statement" element={<AccountStatement />} />{" "}
    </Routes>
  );
};

export default Main;
