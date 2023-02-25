import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import MultiStep from "react-multistep";
import Participant1 from "./Participant1";
import Participant2 from "./Participant2";
import Participant3 from "./Participant3";
import Participant4 from "./Participant4";
import "./OrganizeHacki.css";
import {Navbar} from './Navbar';

const Register = () => {
    
const prevStyle = {
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    p: "7px",
    height:'2rem',
    "&:hover": { backgroundColor: "#9E4770", color: "white" },
  };
  return (
    <>
      <Paper
        style={{
          backgroundColor: "#201A23",
          fontFamily: "Ubuntu",
          height: "70vh",
          border:'2px solid red'
        }}
      >
        <Navbar/>
        {/* <p>
          <h2
            className="heading"
            style={{
              color: "#FBFBFB",
              margin: "1.5rem 0",
              position: "absolute",
              left: "2rem",
              fontSize: "2rem",
              letterSpacing: "2",
            }}
          >
            Registration
          </h2>
        </p> */}
        {/* <hr style={{ color: "white", height: "5rem" }} /> */}
        <div
          style={{
            backgroundColor: "#201A23",
            fontFamily: "Ubuntu",
            // height: "70vh",
            position:'relative',
            left:'30vw'
          }}
        >
          {/* <MultiStep
            activeStep={1}
            showNavigation={true}
            prevStyle={prevStyle}
            nextStyle={prevStyle}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Participant1 title="Participant 1" />
            <Participant2 title="Participant 2" />
            <Participant3 title="Participant 3" />
            <Participant4 title="Participant 4" />
          </MultiStep> */}
          
        </div>
      </Paper>
    </>
  );
};

export default Register;
