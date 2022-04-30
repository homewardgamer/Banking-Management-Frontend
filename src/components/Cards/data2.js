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

import React from "react";
import deposit from "../../img/deposit.png"
import withdraw from "../../img/withdraw.png"
import addBranch from "../../img/addBranch.png"
import CustD from "../../img/CustomerDetails.png"
import editCustInfo from "../../img/editCustInfo.png"
import addEmployee from "../../img/addEmployee.png"
// import ChangePassword from "../../img/change-pwd.png"
const data = {
  cardData: [
    {
      id: 1,
      colorName: "#FFCECA",
      imageUrl: deposit,
      note: "Deposit Money",
    },
    {
        id: 2,
        colorName: "#B3C1F0",
        imageUrl: withdraw,
        note: "Withdraw Money",
      },
      {
        id: 3,
        colorName: "#BCE6ED",
        imageUrl: editCustInfo,
        note: "Customer Info",
      },
      {
        id: 4,
        colorName: "#B3C1F0",
        imageUrl: addEmployee,
        note: "Add Employee",
      },
      {
        id: 5,
        colorName: "#BCE6ED",
        imageUrl: addBranch,
        note: "Add New Branch",
      },
      {
        id: 6,
        colorName: "#FFCECA",
        imageUrl: CustD,
        note: "Branch Customers",
      },
  ],
};
export default data;