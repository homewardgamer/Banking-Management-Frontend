import React from "react";
import { Link } from "react-router-dom";
// import Login from "./components/login.customer";
// import App from "./App";
import "./css/home.css";

function Dashboard() {
  return (
    <div>
      <header class="header">
        <a href="/" class="logo">Bank Management System</a>
        <nav class="nav-items">
          <a href="/">Home</a>
          <a href="/sign-in">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>
      <main>
        <div class="intro">
          {/* <p style={{padding:"1%"}}>Bringing your bank online to you </p> */}
          <Link to="/register">
          <button>Become our Customer</button>
          </Link>
        </div>
      </main>
      <footer class="footer">
        <div class="footertext">&copy; Bank Management</div>
      </footer>

    </div>
  );
}

export default Dashboard;
