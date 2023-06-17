import deposit from "../../img/deposit.png"
import withdraw from "../../img/withdraw.png"
import addBranch from "../../img/addBranch.png"
import CustD from "../../img/CustomerDetails.png"
import ChangePassword from "../../img/change-pwd.png"
import addEmployee from "../../img/addEmployee.png"
import newAccount from "../../img/newaccount.jpg"
import branchCustomer from "../../img/branchcustomers.jpg"

// import ChangePassword from "../../img/change-pwd.png"
const data = {
  cardData: [
    {
      id: 1,
      colorName: "#6c33a3",
      imageUrl: newAccount,
      note: "Create New Account",
      urlsrc: "/create-account",
    },
    {
      id: 2,
      colorName: "#6c33a3",
      imageUrl: addBranch,
      note: "Add New Branch",
      urlsrc: "/new-branch",
    },
    {
      id: 3,
      colorName: "#6c33a3",
      imageUrl: addEmployee,
      note: "Add Employee",
      urlsrc: "/new-employee",
    },
    {
      id: 4,
      colorName: "#6c33a3",
      imageUrl: deposit,
      note: "Deposit Money",
      urlsrc: "/deposit",
    },
    {
        id: 5,
        colorName: "#6c33a3",
        imageUrl: withdraw,
        note: "Withdraw Money",
        urlsrc: "/withdraw",
      },
      {
        id: 6,
        colorName: "#6c33a3",
        imageUrl: branchCustomer,
        note: "Branchwise Customers",
        urlsrc: "/branch-customer",
      },
      {
        id: 7,
        colorName: "#6c33a3",
        imageUrl: CustD,
        note: "Edit Customer Info",
        urlsrc: "/edit-account-info",
      },
      {
        id: 8,
        colorName: "#6c33a3",
        imageUrl: ChangePassword,
        note: "See Customer Accounts",
        urlsrc: '/seecus-accounts',
      },
  ],
};
export default data;