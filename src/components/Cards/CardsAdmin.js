import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import Card2 from "./Card2UI";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import data from "./data2";
import { useState } from "react";
import Axios from "axios";

export default function CardSnippet(props) {
  const [filter, setFilter] = useState("");
  const [name, setName] = useState("");
  
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
    const url = "http://127.0.0.1:8000/api/user/view";
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
    <div style={{ marginTop: "6rem", padding: "0.5rem",  }}>
      <Card2 title={name} />
      <Grid
        container
        spacing={1}
        style={{ marginTop: "0.5rem", padding: "3rem", marginLeft:"auto",marginRight:"auto" }}
      >
        {dataSearch.map((item, index) => {
          return (
            <Grid item xs={4} sm={4} md={3} lg={3}>
            <Link href={item.urlsrc}>
              <Card
                className="empower-card"
                style={{ backgroundColor: item.colorName ,borderRadius: 12,padding: 5,}}
                sx={{ width: "44vh",height:"24vh", marginTop:"1rem" }}
                //sx={{ pt: 2, px: 1 }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CardMedia
                    className="empower-card-img"
                    component="img"
                    sx={{ width: 80,height: 100 }}
                    style={{ marginTop: 5}}
                    image={item.imageUrl}
                    alt="Bank"
                  />
                </div>
                <CardContent align="center" style={{textDecoration:"none !important"}}>
                  <Typography
                    className="empower-que"
                    gutterBottom
                    variant="h6"
                    component="div"
                  ></Typography>
                  <Typography variant="body2" color="text.secondary" style={{fontWeight:"bold",color:"white"}}>
                    {item.note}
                  </Typography>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
