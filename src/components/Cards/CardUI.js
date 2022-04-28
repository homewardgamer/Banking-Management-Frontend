import React from 'react'
import "../../css/card-style.css";

const CardsUI = props => {
  return (
    
    <div>
        <navbar/>
   <div id="fed" className=" text">
   <div className="overflow" style={{borderTopLeftRadius:"1em", borderTopRightRadius:"1em"}}>
       <img src={props.imgsrc} alt="cam" className="card-img-top" width="240px" height="240px"/>
   </div>
   <div className="card-body-small text-dark">
       <h4 className="card-title-small " >{props.title}</h4>
   </div>

   </div>
   </div>

  )
}

export default CardsUI
