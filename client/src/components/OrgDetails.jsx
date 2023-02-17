import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import { Paper, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import MultiStep from "react-multistep";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { white } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./OrganizeHacki.css";
import Checkbox from "@mui/material/Checkbox";
import { pink } from "@mui/material/colors";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
// import { styled, alpha } from "@mui/material/styles";

const OrgDetails = () => {
  const SubmitButton = styled(Button)({
    backgroundColor: "#2E2532",
    margin: "1rem",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: "10rem",
    color: "white",
    fontSize: "0.8rem",
    position: "relative",
    bottom: "3rem",
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });
  return (
    <>
      <Paper
        elevation={3}
        style={{
          border: "2px solid black",
          width: "40vw",
          position: "relative",
          right: "2vw",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "3rem",
            margin: "1rem 0",
          }}
        >
          <p style={{ color: "#9E4770" }}>Enter Contact Email</p>
          <TextField
            id="outlined-search"
            label="Hackathon Name"
            type="search"
            required
            style={{ color: "white", marginBottom: "2rem" }}
          />
          <p style={{ color: "#9E4770" }}>Enter Discord link</p>
          <TextField
            id="outlined-search"
            label="Hackathon Name"
            type="search"
            required
            style={{ color: "white", marginBottom: "2rem" }}
          />
          <p style={{ color: "#9E4770" }}>Enter Instagram Page link (if any)</p>
          <TextField
            id="outlined-search"
            label="Hackathon Name"
            type="search"
            required
            style={{ color: "white", marginBottom: "2rem" }}
          />
          <p style={{ color: "#9E4770" }}>Enter LinkedIn Page link (if any)</p>
          <TextField
            id="outlined-search"
            label="Hackathon Name"
            type="search"
            required
            style={{ color: "white" }}
          />
        </div>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Paper>
    </>
  );
};

export default OrgDetails;
