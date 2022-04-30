import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";

const generatePDF = (statements) => {
  const doc = new jsPDF();

  const tableColumn = [
    "ID",
    "Type of Transaction",
    "Amount",
    "Date",
    "Receiver account ID",
    "Sender account ID",
  ];

  const tableRows = [];

  statements.forEach((object) => {
    if (object.s_account == null) {
      object.s_account = "Deposited by admin";
    }
    const objectData = [
      object.transaction_id,
      object.type,
      object.amount,
      format(new Date(object.timestamp), "yyyy-MM-dd"),
      object.r_account,
      object.s_account,
    ];

    tableRows.push(objectData);
  });
  console.log(tableRows);

  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");

  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

  doc.text("Account Statement", 14, 15);
  doc.save(`statement_${dateStr}.pdf`);
};

export default generatePDF;
