import React, { useState } from "react";
import Axios from "axios";
import NavbarAdmin from "../navbaradmin";
import { format } from "date-fns";
function NewBranch() {
  var [branch_id, setBranchId] = useState("");
  const [data, setData] = useState([]);

  function handleBranchIdChange(event) {
    const value = event.target.value;
    setBranchId(value);
  }

  function BranchCusApi(event) {
    event.preventDefault();
    const url = `http://127.0.0.1:8000/api/branch/${branch_id}/customers`;
    const token = localStorage.getItem("token");
    Axios.get(url, { headers: { Authorization: `Token ${token}` } })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        if (res.data.length === 0) {
          alert("No Customers found from this branch!");
        } else {
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
  function InputBox() {
    return (
      <div>
        <NavbarAdmin />
        {data.length === 0 ? "FUCK" : "NO"}
        <div className="changepwd auth-wrapper">
          <form className="auth-inner">
            <h3>Branch Customers</h3>

            <div className="mb-3">
              {/* <label>Branch Id</label> */}
              <input
                type="number"
                className="form-control"
                placeholder="Enter Branch Id"
                onChange={handleBranchIdChange}
              />
            </div>

            <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={BranchCusApi}
              >
                Get Customer Details
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  function Table() {
    return (
      <div>
        <NavbarAdmin />
        <div className="auth-wrapper">
          <h1 style={{ margin: "2%" }}>Account(s) Information</h1>
          <div class="wrapper">
            <table class="table  table-hover">
              <thead>
                <tr className="table-dark">
                  <th scope="col">User ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Username</th>
                  <th scope="col">Address</th>
                  <th scope="col">Date of Birth</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <th scope="row">{val.id}</th>
                      <td>{val.first_name + " " + val.last_name}</td>
                      <td>{val.username}</td>
                      <td>{val.address}</td>
                      <td>{val.dob}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  const name = localStorage.getItem("is_admin");
  if (name === "true") {
    return <div>{data.length === 0 ? <InputBox /> : <Table />}</div>;
  } else {
    return (
      <div>
        <h1 style={{ margin: "2rem" }}>Not Authorized.</h1>
      </div>
    );
  }
}

export default NewBranch;
