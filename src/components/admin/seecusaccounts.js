import React, { useEffect, useState } from "react";
import Axios from "axios";
import NavbarAdmin from "../navbaradmin";
import { format } from "date-fns";
// account_detail_by_id
function SeeCusAccounts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = `http://localhost:8000/api/account/view/all`;
    const token = localStorage.getItem("token");
    Axios.get(url, { headers: { Authorization: `Token ${token}` } }, data)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }, []);
  const name = localStorage.getItem("is_admin");
  if (name === "true") {
    return (
      <div>
        <NavbarAdmin />
        <div className="auth-wrapper">
          <h1 style={{ margin: "2%" }}>Account(s) Information</h1>
          <div class="wrapper">
            <table class="table  table-hover">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Account ID</th>
                  <th scope="col">Account Type</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Created At</th>
                  <th scope="col">Updated At</th>
                  <th scope="col">Disabled</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <th scope="row">{val.account_id}</th>
                      <td>{val.account_type}</td>
                      <td>{val.balance}</td>
                      <td>{format(new Date(val.created_at), "dd-MM-yyy")}</td>
                      <td>{format(new Date(val.updated_at), "dd-MM-yyy")}</td>
                      <td>{val.disabled ? "Yes" : "No"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 style={{ margin: "2rem" }}>Not Authorized.</h1>
      </div>
    );
  }
}

export default SeeCusAccounts;
