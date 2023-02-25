import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import { Paper, Typography, Button,} from "@mui/material";
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
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

const Participant1 = (props) => {
  const DomainOptions = [
    { label: "Web Development", value: "Web Development" },
    { label: "Blockchain", value: "Blockchain" },
    { label: "AI/ML", value: "AI/ML" },
    { label: "IoT", value: "IoT" },
    { label: "Cloud", value: "Cloud" },
    { label: "Cybersecurity", value: "Cybersecurity" },
    { label: "Design", value: "Design" },
    { label: "DevOps", value: "DevOps" },
  ];
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { data, handleChange, handleMulterShit, next } = props;
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
    position:'relative',
    left:'3rem',
    top:'2rem',
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });
  return (
    <>
      {/* <Particle /> */}
      <Paper
        elevation={5}
        style={{
          width: "80vw",
          position: "relative",
          left: "8vw",
          marginBottom: "2rem",
        }}
      >
        <div style={{ backgroundColor: "white" }}>
          <Grid
            container
            spacing={4}
            style={{ padding: "3rem", margin: "1rem 0" }}
          >
            <Grid item xs={6} style={{}}>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "3rem",
                  margin: "1rem 0",
                  position: "relative",
                  bottom: "3rem",
                }}
              >
                <p style={{ color: "#9E4770" }}>Enter Team Name</p>
                <TextField
                  id="outlined-search"
                  label="TeamName"
                  type="search"
                  name="teamName"
                  value={data.teamName}
                  onChange={handleChange}
                  required
                  style={{ color: "white", marginBottom: "2rem" }}
                />
                <p style={{ color: "#9E4770" }}>Enter Leader Name</p>
                <TextField
                  id="outlined-search"
                  label="Name"
                  type="search"
                  name="name1"
                  value={data.name1}
                  onChange={handleChange}
                  required
                  style={{ color: "white", marginBottom: "2rem" }}
                />
                <p style={{ color: "#9E4770" }}>Enter year of college</p>
                <TextField
                  id="outlined-search"
                  label="Year"
                  type="search"
                  name="year1"
                  value={data.year1}
                  onChange={handleChange}
                  required
                  style={{ color: "white", marginBottom: "2rem" }}
                />
                <p style={{ color: "#9E4770" }}>Enter resume</p>
                <TextField
                  id="outlined-search"
                  type="file"
                  name="resume1"
                  value={data.resume1}
                  onChange={handleChange}
                  required
                  style={{
                    color: "white",
                    marginBottom: "2rem",
                    width: "15rem",
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  color: "#9E4770",
                  margin: "1rem",
                  position: "relative",
                  right: "8rem",
                }}
              >
                Select your Skills
              </Typography>
              <FormGroup>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={6}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <MultiSelect
                      sx={{ backgroundColor: "#fff", marginTop: 3 }}
                      name="domain1"
                      placeholder="Domains"
                      className="multi-select"
                      value={data.domain1}
                      onChange={handleChange}
                      options={DomainOptions}
                    />
                    <SignupButton type="submit" onClick={next}>Next</SignupButton>
                  </Grid>
                </Grid>
              </FormGroup>
            </Grid>
          </Grid>
          {/* <button onClick={next}>Next</button> */}
        </div>
      </Paper>
    </>
  );
};

export default Participant1;
