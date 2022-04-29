import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/css/App.css'
import Cards from "./components/Cards/CardsCus"
import NavbarCustomer from './components/navbarcus'
function Customer() {
  return (
  <div>
  <NavbarCustomer/>
  <Cards/>
  </div>
  )
}

export default Customer
