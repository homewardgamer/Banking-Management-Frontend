import NavbarAdmin from '../navbaradmin'
import React,{useState} from 'react'
import Register from "../../img/register-removebg-preview.png"
import "../../css/bill.css"
import Axios from "axios";
import { Link } from 'react-router-dom';

function NewEmployee(){
  var [username, setUsername] = useState("");
  var [first_name, setFirstName] = useState("");
  var [last_name, setLastName] = useState("");
  var [dob, setDOB] = useState("");
  var [address, setAddress] = useState("");
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    const value = event.target.value;
    setUsername(value);
  }
  function handleFirstNameChange(event) {
    const value = event.target.value;
    setFirstName(value);
  }
  function handleLastNameChange(event) {
    const value = event.target.value;
    setLastName(value);
  }
  function handleDOBChange(event) {
    const value = event.target.value;
    setDOB(value);
  }
  function handleEmailChange(event) {
    const value = event.target.value;
    setEmail(value);
  }
  function handleAddressChange(event) {
    const value = event.target.value;
    setAddress(value);
  }
  function handlePasswordChange(event) {
    const value = event.target.value;
    setPassword(value);
  }

  function RegisterEmployeeApi(event) {
    const url = "http://127.0.0.1:8000/api/user/register";
    const data = { username: username,first_name:first_name,last_name:last_name,dob:dob,email:email,address:address, password: password,is_employee:true };
    event.preventDefault();
    Axios.post(url, data)
      .then((res) => {
        console.log(res.data);
        alert("Registered Successfully.");
        window.location.href = "/admin";
      })
      .catch((err) => {
        alert(err);
      });
    }
    const name = localStorage.getItem('is_admin');
    if (name=="true")
    {
    return (
      <div>
      <NavbarAdmin/>
      <form
        style={{
          marginTop:"1rem",
          // background:"#6867bc",
          padding: "2.85rem",
          }}
      >
        <section>
  <div className="container cc" id="container">
  <div style={{marginTop:"3vh"}}><h1>Add New Employee</h1></div>
    <div className="form-container sign-in-container">
    <form action="/login" method="POST">
        {/* <h1>New Employee</h1>
        <br></br> */}
        <div className="form-group">
          {/* <label for="email">Email</label> */}
          <input type="text" className="form-control"  placeholder="Username" onChange={handleUsernameChange}/>
        </div>
        <div className="form-group">
          {/* <label for="email">Email</label> */}
          <input type="text" className="form-control" placeholder="First Name" onChange={handleFirstNameChange}/>
        </div>
        <div className="form-group">
          {/* <label for="password">Password</label> */}
          <input type="text" className="form-control" placeholder="Last Name" onChange={handleLastNameChange} />
        </div>
        <div className="form-group">
          {/* <label for="password">Password</label> */}
          <input type="email" className="form-control" placeholder="Email" onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          {/* <label for="password">Password</label> */}
          <input type="date" className="form-control" placeholder="Date Of Birth" onChange={handleDOBChange} />
      </div>
        
        
      </form>
    </div>
    <div className="overlay-container">
    <div className="overlay">
    <div className="overlay-panel overlay-right">
      {/* <img id="im" src={Register} alt="dones" width="350" height="600"/> */}

      
      <div className="form-group">
          {/* <label for="password">Password</label> */}
          <input type="text" className="form-control" placeholder="Address" onChange={handleAddressChange} />
        </div>
        <div className="form-group">
          {/* <label for="password">Password</label> */}
          <input type="password" className="form-control" placeholder="Verification password" onChange={handlePasswordChange}/>
          <p style={{color:"black"}}>Min 8 character alphanumeric Password and should include a special character</p>
        </div>
        <Link to="/">
        <button type="submit" className="btn bb" onClick={RegisterEmployeeApi} style={{marginTop: "-2rem"}}>Add New Employee</button>
        </Link>
    </div>
  </div>
</div>
</div>
</section>
      </form>
      </div>
    )}else{
      return <div>
        <h1 style={{margin: "2rem"}}>Not Authorized.</h1>
      </div>
    }
}

export default NewEmployee;
