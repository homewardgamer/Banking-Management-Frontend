import React from 'react'
import "../../css/card-style.css";

const CardsUI = props => {
  return (
    
    <div>
        <navbar/>
   <div id="fed" className=" text">
   <div className="overflow" style={{borderTopLeftRadius:"1em", borderTopRightRadius:"1em"}}>
       <img src={props.imgsrc} alt="cam" className="card-img-top" />
   </div>
   <div className="card-body-small text-dark">
       <h4 className="card-title-small " >{props.title}</h4>
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
