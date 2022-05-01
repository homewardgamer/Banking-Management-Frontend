import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/css/App.css";
import Cards from "./components/Cards/CardsCus";
import NavbarCustomer from "./components/navbarcus";
function Customer() {
  if (localStorage.getItem("is_customer") === "true") {
    return (
      <div>
        <NavbarCustomer />
        <Cards />
      </div>
    );
  } else {
    return <h1 style={{ margin: "2rem" }}>Not Authorized.</h1>;
  }
}

export default Customer;
