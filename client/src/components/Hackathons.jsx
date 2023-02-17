import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import "./Hackathons.css";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { styled, alpha } from "@mui/material/styles";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Hackathons = () => {
  const TimeButton = styled(Button)({
    backgroundColor: "#2E2532",
    margin: "1rem",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: "8rem",
    color: "white",
    fontSize: "0.8rem",
    backgroundColor: "#9E4770",
    "&:hover": { backgroundColor: "#FBFBFB", color: "#9E4770" },
  });
  return (
    <>
      <Paper
        style={{
          backgroundColor: "#201A23",
          fontFamily: "Ubuntu",
          height: "100vh",
        }}
        //   className="maiii"
      >
        <p>
          <h2
            className="heading"
            style={{
              color: "#FBFBFB",
              margin: "1.5rem 0",
              position: "absolute",
              left: "2rem",
              fontSize: "2rem",
            }}
          >
            Hackathons
          </h2>
        </p>
        <hr style={{ color: "white", height: "5rem" }} />
        <Card className="HackiCard"
          sx={{
            maxWidth: 450,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:'#2E2532',
            boxShadow:'0 0 10px 5px rgba(0, 0, 0, 0.2)',
            transition:'box-shadow 0.3s ease-in-out',
            margin:'2rem'
          }}
        >
          <CardMedia
            sx={{ height: 200, width: 300, margin: "1rem" }}
            image="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{color:'#FBFBFB'}}>
              Trident Hacks : National Level hackathon
            </Typography>
            <div sx={{ display: "flex", width: 300 }}>
              <TimeButton>
                Upcoming
              </TimeButton>
              <Button style={{color:'#FBFBFB'}}>
                <LanguageOutlinedIcon sx={{m:'0.7rem'}}/>
                Online
              </Button>
            </div>
            {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small"  style={{color:'#FBFBFB'}}>Share</Button>
            <Button size="small"  style={{color:'#FBFBFB'}}>Learn More</Button>
          </CardActions>
        </Card>
      </Paper>
    </>
  );
};

export default Hackathons;
