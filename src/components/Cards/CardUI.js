// import React from 'react'
// import "../../css/card-style.css";

// const CardsUI = props => {
//   return (
    
//     <div>
//         <navbar/>
//    <div id="fed" className=" text">
//    <div className="overflow" style={{borderTopLeftRadius:"1em", borderTopRightRadius:"1em"}}>
//        <img src={props.imgsrc} alt="cam" className="card-img-top card-imgcolor" width= "300px" height="300px" />
//    </div>
//    <div className="card-body-small text-dark">
//        <h6 className="card-title-small " >{props.title}</h6>
//    </div>

//    </div>
//    </div>

//   )
// }

// export default CardsUI
// import React from "react";
// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import IconButton from "@mui/material/IconButton";
// import CardActions from "@mui/material/CardActions";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import data from "./data";
// import { useState } from "react";

// const CardsUI = props => {
//     const [filter, setFilter] = useState("");
//     const searchText = (event) => {
//       setFilter(event.target.value);
//     };
//     let dataSearch = data.cardData.filter((item) => {
//       return Object.keys(item).some((key) =>
//         item[key]
//           .toString()
//           .toLowerCase()
//           .includes(filter.toString().toLowerCase())
//       );
//     });
//   return (
    
// <Grid container spacing={10}>
//         {dataSearch.map((item, index) => {
//           return (
//             <Grid item xs={12} sm={12} md={6} lg={4}>
//               <Card
//                 className="empower-card"
//                 style={{ backgroundColor: item.colorName }}
//                 sx={{ pt: 3, px: 1 }}
//               >
//                 <div style={{ display: "flex", justifyContent: "center" }}>
//                   <CardMedia
//                     className="empower-card-img"
//                     component="img"
//                     sx={{ width: 100 }}
//                     image={item.imageUrl}
//                     alt="Bank"
//                   />
//                 </div>
//                 <CardContent align="center">
//                   <Typography
//                     className="empower-que"
//                     gutterBottom
//                     variant="h6"
//                     component="div"
//                   >
                   
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {item.note}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//   )
//       }

// export default CardsUI;

import React from "react";
import Card from "@mui/material/Card";
import Card2 from "./Card2UI"
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";

import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import data from "./data";
import { useState } from "react";
import search from "../../img/accountstatement.png";


export default function CardSnippet(props) {
  const [filter, setFilter] = useState("");
  const searchText = (event) => {
    setFilter(event.target.value);
  };
  let dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <div style={{marginTop: "7rem",padding: "0.5rem"}}>
    <Card2
                title="Customer Name"
              />
      <Grid container spacing={10}  style={{marginTop: "1rem",padding: "0.5rem"}}>
        {dataSearch.map((item, index) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Card
                className="empower-card"
                style={{ backgroundColor: item.colorName }}
                sx={{ pt: 2, px: 1 }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CardMedia
                    className="empower-card-img"
                    component="img"
                    sx={{ width: 125 }}
                    image={item.imageUrl}
                    alt="Bank"
                  />
                </div>
                <CardContent align="center">
                  <Typography
                    className="empower-que"
                    gutterBottom
                    variant="h6"
                    component="div"
                  >
                   
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.note}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}