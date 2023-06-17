import React from 'react'
import "../../css/card-style.css";

const CardsUI = props => {
  return (
    
    <div>
        
   <div id="fed bgg topcard" className="text">
   <div className="card-body-big text-dark">
       <h4 className="card-title-big p1">{props.title}</h4>
       {/* <p className="card-text p2" style={{color: 'white'}}>Account Type
           {/* {props.content} */}
       {/*</p>
       <p className="card-text p3" style={{color: 'white'}}>
           Balance: $5604
       </p> */}
   </div>

   </div>
   </div>

  )
}

export default CardsUI
