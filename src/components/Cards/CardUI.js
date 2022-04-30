import React from 'react'
import "../../css/card-style.css";

const CardsUI = props => {
  return (
    
    <div>
        <navbar/>
   <div id="fed" className=" text">
   <div className="overflow" style={{borderTopLeftRadius:"1em", borderTopRightRadius:"1em"}}>
       <img src={props.imgsrc} alt="cam" className="card-img-top card-imgcolor" width= "300px" height="300px" />
   </div>
   <div className="card-body-small text-dark">
       <h6 className="card-title-small " >{props.title}</h6>
   </div>

   </div>
   </div>

  )
}

export default CardsUI
