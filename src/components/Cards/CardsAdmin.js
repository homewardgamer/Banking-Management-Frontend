// import React, { Component } from "react";
// import Card from "./CardUI";
// import Card2 from "./Card2UI";
// import deposit from "../../img/deposit.png"
// import withdraw from "../../img/withdraw.png"
// import addBranch from "../../img/addBranch.png"
// import CustD from "../../img/CustomerDetails.png"
// import editCustInfo from "../../img/editCustInfo.png"
// import addEmployee from "../../img/addEmployee.png"
// // import ChangePassword from "../../img/change-pwd.png"
// import { Link } from "react-router-dom";

// class Cards extends Component {
//   render() {
//     return (
//       //  <div><navbar/>

//       <div style={{marginTop: "5rem"}}>
//         <div
//           className="container-fluid d-flex justify-content-space around"
//           id="scards"
//         >
//           {/* <img className="background" src="https://www.imagesource.com/wp-content/uploads/2019/06/Rio.jpg" alt="Aleq"></img> */}

//           <div className="row">
//             {/* <div className="row"> */}

//             <div className="col-md-12 col-sm-12 ff" id="first">
//               <Card2
//                 title="Admin Name"
//               />
//             </div>
            
//             <div className="col-md-2 col-sm-12 ss" id="first">
//             <Link to="/deposit">
//               <Card
//                 imgsrc={deposit}
//                 title="Deposit Money"
//               />
//               </Link>
//             </div>
//             <div className="col-md-2 col-sm-12 ss" id="sec">
//             <Link to="/withdraw">
//               <Card
//                 imgsrc={withdraw}
//                 title="Withdraw Money"
//               />
//               </Link>
//             </div>
//             <div className="col-md-2 col-sm-12 ss" id="first">
//             <Link to="/see-account-info">
//               <Card
//                 imgsrc={editCustInfo}
//                 title="Customer Info"
//               />
//               </Link>
//             </div>
//             <div className="col-md-2 col-sm-12 ss" id="sec">
//             <Link to="/new-employee">
//               <Card
//                 imgsrc={addEmployee}
//                 title="Add Employee"
//               />
//               </Link>
//             </div>
//             <div className="col-md-2 col-sm-12 ss" id="first">
//             <Link to="/new-branch">
//               <Card
//                 imgsrc={addBranch}
//                 title="Add New Branch"
//               />
//               </Link>
//             </div>
//             <div className="col-md-2 col-sm-12 ss" id="first">
//             <Link to="/branch-customer">
//               <Card
//                 imgsrc={CustD}
//                 title="Branch Customers"
//               />
//               </Link>
//             </div>
//             {/* <div className="col-md-2 col-sm-12 ss" id="first">
//             <Link to="/change-pwd">
//               <Card
//                 imgsrc={ChangePassword}
//                 title="Change Password"
//               />
//               </Link>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Cards; 

import React from "react";
import Card from "@mui/material/Card";
import Card2 from "./Card2UI"
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";

import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import data from "./data2";
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
               title="Admin Name"
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
                    sx={{ width: 130 }}
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