import jsPDF from "jspdf";
import "jspdf-autotable";
// Date Fns is used to format the dates we receive
// from our API call
import { format } from "date-fns";

// define a generatePDF function that accepts a tickets argument
const generatePDF = (statements) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = [
    "ID",
    "Type of Transaction",
    "Amount",
    "Date",
    "Receiver account ID",
    "Sender account ID",
  ];
  // define an empty array of rows
  const tableRows = [];
  // for each ticket pass all its data into an array
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
    // push each tickcet's info into a row
    tableRows.push(objectData);
  });
  console.log(tableRows);

  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.text("Closed tickets within the last one month.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`statement_${dateStr}.pdf`);
};

export default generatePDF;
