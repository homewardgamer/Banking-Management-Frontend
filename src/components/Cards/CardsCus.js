// import React, { Component } from "react";
// import Card from "./CardUI";
// import Card2 from "./Card2UI";
// import MoneyTransfer from "../../img/moneytransfer.png"
// import BillPayment from "../../img/billpayment.png"
// import AccountStatement from "../../img/account-statement.png"
// import BlockAccount from "../../img/blockaccount.png"
// import ChangePassword from "../../img/change-pwd.png"
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
//                 title="Customer Name"
//               />
//             </div>

//             <div className="col-md-2 col-sm-12 ss" id="first">
//             <Link to="/account-statement">
//               <Card
//                 imgsrc={AccountStatement}
//                 title="Account Statement"
//               />
//               </Link>
//             </div>
//             <div className="col-md-2 col-sm-12 ss" id="sec">
//             <Link to="/transfer">
//               <Card
//                 imgsrc={MoneyTransfer}
//                 title="Money Transfer"
//               />
//               </Link>
//             </div>
//             <div className="col-md-2 col-sm-12 ss" id="first">
//             <Link to="/bill">
//               <Card
//                 imgsrc={BillPayment}
//                 title="Bill Payment"
//               />
//               </Link>
//             </div>
//             <div className="col-md-2 col-sm-12 ss" id="sec">
//             <Link to="/block-account">
//               <Card
//                 imgsrc={BlockAccount}
//                 title="Block Account"
//               />
//               </Link>
//             </div>
//             <div className="col-md-2 col-sm-12 ss" id="first">
//             <Link to="/change-pwd">
//               <Card
//                 imgsrc={ChangePassword}
//                 title="Change Password"
//               />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default Cards;

import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Card2 from "./Card2UI";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import data from "./data";
import { useState } from "react";
import Axios from "axios";

export default function CardSnippet(props) {
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
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
  useEffect(() => {
    const token = localStorage.getItem("token");
    const url = "http://localhost:8000/api/user/view";
    Axios.get(url, {
      headers: {
        Authorization: `Token ${token}`,
      },
    })
      .then((res) => {
        setName(res.data.first_name + " " + res.data.last_name);
      })
      .catch((err) => {
        alert(err);
      });
  });
  return (
    <div style={{ marginTop: "7rem", padding: "0.5rem" }}>
      <Card2 title={name} />
      <Grid
        container
        spacing={10}
        style={{ marginTop: "1rem", padding: "0.5rem" }}
      >
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
                    sx={{ width: 130,height: 150 }}
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
                  ></Typography>
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
