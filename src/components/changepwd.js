import React, { useState } from "react";
import Axios from "axios";
import { render } from "@testing-library/react";
import NavbarAdmin from "./navbaradmin";
import NavBarCus from "./navbarcus";
function ChangePassword() {
  var [old_password, setOldPassword] = useState("");
  var [new_password, setNewPassword] = useState("");
  var [new_password_confirm, setConfirmPass] = useState("");

  function handleOldPassChange(event) {
    const value = event.target.value;
    setOldPassword(value);
  }
  function handleNewPassChange(event) {
    const value = event.target.value;
    setNewPassword(value);
  }
  function handleConfirmPassChange(event) {
    const value = event.target.value;
    setConfirmPass(value);
  }

  function changePwdApi(event) {
    const url = "http://localhost:8000/api/user/changepassword";
    const data = {
      old_password: old_password,
      new_password: new_password,
      new_password_confirm: new_password_confirm,
    };
    const token = localStorage.getItem("token");
    event.preventDefault();
    Axios.put(url, data, { headers: { Authorization: `Token ${token}` } })
      .then((res) => {
        console.log(res.data);
        alert("Password Changed Successfully.");
        const name = localStorage.getItem("is_customer");
        if (name === "true") {
          window.location.href = "/customer";
        } else {
          window.location.href = "/admin";
        }
      })
      .catch((err) => {
        alert(err);
      });
  }
  
  const renderNavBar=()=>{
    const check = localStorage.getItem("is_customer");
    if (check === "true") {
      return <NavBarCus/>
    }
    else {
      return <NavbarAdmin/>
    }  
  }

  return (
    <div>
    {renderNavBar()}
      <div className="changepwd auth-wrapper">
        <form className="auth-inner">
          <h3>Change Password</h3>

          <div className="mb-3">
            {/* <label>Old Password</label> */}
            <input
              type="password"
              className="form-control"
              placeholder="Enter Old Password"
              onChange={handleOldPassChange}
            />
          </div>
          <div className="mb-3">
            {/* <label>New Password</label> */}
            <input
              type="password"
              className="form-control"
              placeholder="Enter New Password"
              onChange={handleNewPassChange}
            />
          </div>

          <div className="mb-3">
            {/* <label>New Password</label> */}
            <input
              type="password"
              className="form-control"
              placeholder="Confirm New Password"
              onChange={handleConfirmPassChange}
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={changePwdApi}
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ChangePassword;
