import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import MultiStep from "react-multistep";
import Essentials from "./Essentials";
import Submissions from "./Submissions";
import OrgDetails from "./OrgDetails";
import "./OrganizeHacki.css";
import {Navbar} from './Navbar';

const prevStyle = {
  borderRadius: "3rem",
  marginLeft: "1.2rem",
  p: "7px",
  height:'2rem',
  "&:hover": { backgroundColor: "#9E4770", color: "white" },
};

const OrganizeHacki = () => {
  return (
    <>
      <Paper
        style={{
          backgroundColor: "#201A23",
          fontFamily: "Ubuntu",
          margin:0 
          // height: "60vh",
        }}
      >
        <Navbar/>
        <div
          style={{
            backgroundColor: "#201A23",
            fontFamily: "Ubuntu",
            height: "100vh",position:"relative",left:"34rem"
          }}
        >
          {/* <Navbar/> */}
          <MultiStep
            activeStep={1}
            showNavigation={true}
            // prevStyle={prevStyle}
            // nextStyle={prevStyle}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Essentials title="Essentials" />
            <Submissions title="Submissions" />
            <OrgDetails title="Organisation Details" />
          </MultiStep>
        </div>
      </Paper>
    </>
  );
};

export default OrganizeHacki;
