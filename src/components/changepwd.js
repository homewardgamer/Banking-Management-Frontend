import React, { useState } from 'react'
import Axios from "axios";
import NavbarAdmin from "./navbaradmin";

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
    const data = {old_password: old_password,new_password: new_password,new_password_confirm: new_password_confirm};
    const token = localStorage.getItem('token');
    Axios.post(url,{headers: {Authorization: `Token ${token}`}}, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }



  return (
    <div>
      <NavbarAdmin />
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
            <button type="submit" className="btn btn-primary">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ChangePassword;
