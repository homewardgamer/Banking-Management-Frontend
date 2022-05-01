import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/css/App.css'
import CardsAdmin from "./components/Cards/CardsAdmin"
import NavbarAdmin from './components/navbaradmin'

function Customer() {
  const name = localStorage.getItem('is_admin');
  if (name=="true")
  {
  return (
    <div>
    <NavbarAdmin/>
   <CardsAdmin/>
   </div>
  )}else{
    console.log("ho");
    return <div>
      <h1 style={{margin: "2rem"}}>Not Authorized.</h1>
    </div>
  }
}

export default Customer