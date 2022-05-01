import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../src/css/App.css";
import CardsAdmin from "./components/Cards/CardsAdmin";
import NavbarAdmin from "./components/navbaradmin";

function Admin() {
  if (localStorage.getItem("is_admin") === "true") {
    return (
      <div>
        <NavbarAdmin />
        <CardsAdmin />
      </div>
    );
  } else {
    return <h1 style={{ margin: "2rem" }}>Not Authorized</h1>;

  }
  }

export default Admin;
