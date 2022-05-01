import React, { useState } from "react";
import NavbarCustomer from "../navbarcus";
import Axios from "axios";
import generatePDF from "../../services/statementGenerator";

function AccountStatement() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [data, setData] = useState([]);
  function setStartDataValue(event) {
    const value = event.target.value;
    setStart(value);
  }
  function setEndDateValue(event) {
    const value = event.target.value;
    setEnd(value);
  }
  function generateStatement(event) {
    event.preventDefault();
    if (start === "" || end === "") {
      const url = "http://localhost:8000/api/transaction/view/all";
      const token = localStorage.getItem("token");
      Axios.get(url, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then((res) => {
          console.log(res.data[0]);
          setData(res.data);
          generatePDF(data);
          alert("Account Statement Generated.");
        window.location.href = "/customer";
        })
        .then(() => {
          window.location.href = "/customer";
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      const url = "http://localhost:8000/api/transaction/filterbydate";
      const token = localStorage.getItem("token");

      Axios.get(url, {
        headers: {
          Authorization: `Token ${token}`,
        },
        params: { start: start, end: end },
      })
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          generatePDF(data);
        })
        .catch((err) => {
          alert(err);
        });
    }
  }
  const name = localStorage.getItem('is_customer');
  if (name=="true")
  {
  return (
    <div>
      <NavbarCustomer />
      <div className="auth-wrapper">
        <form className="auth-inner">
          <h3>Generate Account Statement</h3>
          <div className="mb-3">
            {/* <label>Start Date</label> */}
            <input
              type="date"
              className="form-control"
              placeholder="Start Date"
              onChange={setStartDataValue}
            />
          </div>

          <div className="mb-3">
            {/* <label>End Date</label> */}
            <input
              type="date"
              className="form-control"
              placeholder="End Date"
              onChange={setEndDateValue}
            />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={generateStatement}
            >
              Generate Statement
            </button>
          </div>
        </form>
      </div>
    </div>
  );}else{
    return <div>
      <h1 style={{margin: "2rem"}}>Not Authorized.</h1>
    </div>
  }
}

export default AccountStatement;
