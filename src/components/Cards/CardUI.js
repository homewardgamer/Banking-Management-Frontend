import React from 'react'
import "./card-style.css";

const CardsUI = props => {
  return (
    
    <div>
        <navbar/>
   <div id="fed" className="card text" style={{backgroundColor: "rgba(0, 1, 2, 0.8)"}}>
   <div className="overflow">
       <img src={props.imgsrc} alt="cam" className="card-img-top" />
   </div>
   <div className="card-body text-dark">
       <h4 className="card-title " style={{color: "rgba(255, 255, 170, 0.8)"}}>{props.title}</h4>
       <p className="card-text " style={{color: 'white'}}>
           {/* lorem epsum kkjjedhjdkehkehkehekhdkgdjgd ejgejkegkjehkejlelel dfjfhmh hgkfkg, gfkbbj jhfitoihk fyiuto8ln h7itig,j gukfkliyyftd ghli,jb fjyfhjmh oufjdgrsxcm dgcmv,luiu gdhtdrsh fiyfk */}
24
           {/* {props.content} */}
       </p>
       <p className="card-text " style={{color: 'white'}}>
           $5604
       </p>
   </div>

   </div>
   </div>

  )
}

export default CardsUI
