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

const OrgDetails = (props) => {
  const { data,handleImageUpload, handleChange, next, back } = props;
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
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });
      const SignupButton = styled(Button)({
    backgroundColor: "#2E2532",
    margin: "1rem",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: "10rem",
    color: "white",
    fontSize: "0.8rem",
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });
  const handleSubmit = async (e) => {
    console.log("Handle Submit");
    console.log(data);
    // console.log(data.image, data.image.name);
    e.preventDefault();
    let url = "http://localhost:8080/hacki/addHackiDetail";
    const formdata = new FormData();
    // formdata.append("file", data.image);
    formdata.append("title", data.title);
    formdata.append("modeOfHacki", data.modeOfHacki);
    formdata.append("organisation", data.organisation);
    formdata.append("domain", data.domain);
    formdata.append("regiStart", data.regiStart);
    formdata.append("regiEnd", data.regiEnd);
    formdata.append("hackiStart", data.hackiStart);
    formdata.append("hackiEnd", data.hackiEnd);
    formdata.append("preferredSkills", data.preferredSkills);
    formdata.append("min", data.min);
    formdata.append("max", data.max);
    formdata.append("contactEmail", data.contactEmail);
    formdata.append("discordLink", data.discordLink);
    formdata.append("instaLink", data.instaLink);
    // formdata.append("rules", data.rules);
    // formdata.append("price1", data.price1);
    // formdata.append("price2", data.price2);
    // formdata.append("price3", data.price3);
    console.log("After appending in formData");
    try {
      let response = await axios.post(url, formdata);
      if (response.status === 200) {
        console.log(
          "/client/addClientProfile API successfully called from frontend"
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Paper elevation={5} style={{ width: '35vw', position: 'relative', left: '34vw', marginBottom: '5rem', top:'2rem' }}>
        <div style={{ backgroundColor: "white", padding: '0.3rem', margin: '0.5rem 0' }}>
          <p style={{ color: "#9E4770" }}>Enter Contact Email</p>
          <TextField
            id="outlined-search"
            label="Contact Email"
            type="search"
            value={data.contactEmail}
            name="contactEmail"
            onChange={handleChange}
            required
            style={{ color: "white", marginBottom: '2rem' }}
          />
          <p style={{ color: "#9E4770" }}>Enter Discord link</p>
          <TextField
            id="outlined-search"
            label="Discord"
            type="search"
            value={data.discordLink}
            name="discordLink"
            onChange={handleChange}
            required
            style={{ color: "white", marginBottom: '2rem' }}
          />
          <p style={{ color: "#9E4770" }}>Enter Instagram Page link (if any)</p>
          <TextField
            id="outlined-search"
            label="Instagram"
            type="search"
            value={data.instaLink}
            name="instaLink"
            onChange={handleChange}
            required
            style={{ color: "white", marginBottom: '2rem' }}
          />
          <p style={{ color: "#9E4770" }}>Enter LinkedIn Page link (if any)</p>
          <TextField
            id="outlined-search"
            label="LinkedIn"
            value={data.linkedInLink}
            name="linkedInLink"
            onChange={handleChange}
            type="search"
            required
            style={{ color: "white" }}
          />
        </div>
        <SignupButton onClick={back}>Back</SignupButton> 
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
               </Paper>
    </>
  );
};

export default OrgDetails;