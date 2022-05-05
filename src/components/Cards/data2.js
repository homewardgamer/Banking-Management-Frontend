// import React from "react";
// import Card from "./CardUI";
// import Card2 from "./Card2UI";
// import MoneyTransfer from "../../img/moneytransfer.png"
// import BillPayment from "../../img/billpayment.png"
// import AccountStatement from "../../img/account-statement.png"
// import BlockAccount from "../../img/blockaccount.png"
// import ChangePassword from "../../img/change-pwd.png"
// import { Link } from "react-router-dom";

// const data = {
//     cardData: [
//       {
//         id: 1,
        
//         imageUrl: {AccountStatement},
//         note: "Account Statement",
//       },
//       {
//         id: 2,
        
//         imageUrl: {MoneyTransfer},
//         note: "Money Transfer",
//       },
//       {
//         id: 3,
        
//         imageUrl: {BillPayment},
//         note: "Bill Payment",
//       },
//       {
//         id: 4,
        
//         imageUrl: {BlockAccount},
//         note: "Block Account",
//       },
//       {
//         id: 5,
        
//         imageUrl: {ChangePassword},
//         note: "Change Password",
//       },
      
//     ],
//   };
//   export default data;


import deposit from "../../img/deposit.png"
import withdraw from "../../img/withdraw.png"
import addBranch from "../../img/addBranch.png"
import CustD from "../../img/CustomerDetails.png"
import ChangePassword from "../../img/change-pwd.png"
import addEmployee from "../../img/addEmployee.png"
// import ChangePassword from "../../img/change-pwd.png"
const data = {
  cardData: [
    {
      id: 1,
      colorName: "#BCE6ED",
      imageUrl: deposit,
      note: "Deposit Money",
      urlsrc: "/deposit",
    },
    {
        id: 2,
        colorName: "#B3C1F0",
        imageUrl: withdraw,
        note: "Withdraw Money",
        urlsrc: "/withdraw",
      },
      
      {
        id: 3,
        colorName: "#FFCECA",
        imageUrl: addEmployee,
        note: "Add Employee",
        urlsrc: "/new-employee",
      },
      {
        id: 4,
        colorName: "#B3C1F0",
        imageUrl: addBranch,
        note: "Add New Branch",
        urlsrc: "/new-branch",
      },
      {
        id: 5,
        colorName: "#FFCECA",
        imageUrl: CustD,
        note: "Branch Customers",
        urlsrc: "/branch-customer",
      },
      {
        id: 6,
        colorName: "#BCE6ED",
        imageUrl: ChangePassword,
        note: "Change Password",
        urlsrc: '/change-pwd',
      },
  ],
};
export default data;