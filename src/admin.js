import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/css/App.css'
import CardsAdmin from "./components/Cards/CardsAdmin"
import NavbarAdmin from './components/navbaradmin'

function Customer() {
  return (
    <div>
    <NavbarAdmin/>
   <CardsAdmin/>
   </div>
  )
}

export default Customer