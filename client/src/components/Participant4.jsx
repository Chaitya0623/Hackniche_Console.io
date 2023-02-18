import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import { Paper, Typography ,Button} from "@mui/material";
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
import Submit from "./SubmitMultiStep";

const Participant4 = (props) => {
  const { data, handleChange, handleMulterShit, next,back } = props;
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
  const SignupButton = styled(Button)({
    backgroundColor: "#2E2532",
    margin: "1rem",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: "30rem",
    color: "white",
    fontSize: "0.8rem",
    position:'relative',
    left:'3rem',
    top:'2rem',
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      {/* <Particle /> */}
      <Paper
        elevation={5}
        style={{
          width: "60vw",
          position:'relative', left:'17vw',height:'80vh',
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
                <p style={{ color: "#9E4770" }}>Participant 4 Name</p>
                <TextField
                  id="outlined-search"
                  label="Name"
                  value={data.name4}
                  handleChange={handleChange}
                  type="search"
                  style={{ color: "white", marginBottom: "2rem" }}
                />
                <p style={{ color: "#9E4770" }}>Enter year of college</p>
                <TextField
                  id="outlined-search"
                  label="Year"
                  value={data.year4}
                  handleChange={handleChange}
                  type="search"
                  style={{ color: "white", marginBottom: "2rem" }}
                />
                 <p style={{ color: "#9E4770" }}>Enter resume</p>
                 <TextField
                  id="outlined-search"
                  value={data.resume4}
                  handleChange={handleChange}
                  type="file"
                  style={{ color: "white", marginBottom: "2rem", width:'15rem' }}
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
                      name="domain"
                      placeholder="Domains"
                      className="multi-select"
                      value={data.domain}
                      onChange={handleChange}
                      options={DomainOptions}
                    />
                   <div style={{display:'flex'}}>
                    <SignupButton type="submit" onClick={back}>Back</SignupButton>
                    <SignupButton type="submit" onClick={next}>Submit</SignupButton>
                    </div>
                  </Grid>
                </Grid>
              </FormGroup>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </>
  );
};

export default Participant4;