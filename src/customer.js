import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/css/App.css";
import Cards from "./components/Cards/CardsCus";
import NavbarCustomer from "./components/navbarcus";
function Customer() {
  const name = localStorage.getItem('is_customer');
  if (name=="true")
  {
  return (
  <div>
  <NavbarCustomer/>
  <Cards/>
  </div>
  )}else{
    console.log("ho");
    return <div>
      <h1 style={{margin: "2rem"}}>Not Authorized.</h1>
    </div>
  }
}

export default Customer;
