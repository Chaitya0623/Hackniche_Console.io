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
          height: "140vh",
        }}
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
              letterSpacing: "2",
            }}
          >
            Organize Hackathon
          </h2>
        </p>
        <hr style={{ color: "white", height: "5rem" }} />
        <div
          style={{
            backgroundColor: "#201A23",
            fontFamily: "Ubuntu",
            height: "100vh",
          }}
        >
          <MultiStep
            activeStep={1}
            showNavigation={true}
            prevStyle={prevStyle}
            nextStyle={prevStyle}
            style={{ display: "flex", justifyContent: "center" }}
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
