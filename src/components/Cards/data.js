import MoneyTransfer from "../../img/moneytransfer.png"
import editCustInfo from "../../img/editCustInfo.png"
import BillPayment from "../../img/billpayment.png"
import AccountStatement from "../../img/account-statement.png"
import BlockAccount from "../../img/blockaccount.png"
import ChangePassword from "../../img/change-pwd.png"
const data = {
  cardData: [
    {
      id: 1,
      colorName: "#6c33a3",
      imageUrl: AccountStatement,
      note: "Acount Statement",
      urlsrc: "/account-statement",
    },
    {
        id: 2,
        colorName: "#6c33a3",
        imageUrl: MoneyTransfer,
        note: "Money Transfer",
        urlsrc: "/transfer",
      },
      {
        id: 3,
        colorName: "#6c33a3",
        imageUrl: editCustInfo,
        note: "See Account Info",
        urlsrc: "/see-account-info",
      },
      {

        
        id: 4,
        colorName: "#6c33a3",
        imageUrl: BillPayment,
        note: "Bill Payment",
        urlsrc: "/bill",
      },
      {
        id: 5,
        colorName: "#6c33a3",
        imageUrl: BlockAccount,
        note: "Block Account",
        urlsrc: '/block-account',
      },
      {
        id: 6,
        colorName: "#6c33a3", /*#B3C1F0 */
        imageUrl: ChangePassword,
        note: "Change Password",
        urlsrc: '/change-pwd',
      },
  ],
};
export default data;