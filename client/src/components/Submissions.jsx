import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import { Paper, Typography } from "@mui/material";
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
import { Button } from "@mui/material";
// import Particle from "./Particle";

const Submissions = (props) => {
  const {data,handleImageUpload,handleChange,next,back}=props;
//   const [data, setData] = useState({
//     logo: "",
//     title: "",
//     modeOfHacki: "",
//     organisation: "",
//     domian: "",
//     regiStart: "",
//     regiEnd: "",
//     hackiStart: "",
//     hackiEnd: "",
//     preferredSkills: "",
//     min: "",
//     max: "",
//     contactEmail:"",
//     discordLink: "",
//     instaLink: "",
//     linkedInLink: "",
//     rules: "",
//     price1:"",
//     price2:"",
//     price3:"",
//   });
//   const handleChange = (e) => {
//     console.log(e.target.name, e.target.value);
//     setData({ ...data, [e.target.name]: e.target.value });
//   };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
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
  return (
    <>
      {/* <Particle /> */}
      <Paper elevation={5} style={{width:'80vw', position:'relative', left:'12vw', marginBottom:'2rem'}}>
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
                  position:'relative',
                  bottom:'3rem'
                }}
              >
                <p style={{ color: "#9E4770" }}>Participants in a team</p>
                <div style={{ display: "flex" , marginBottom:'2rem'}}>
                  <TextField
                    id="outlined-search"
                    label="min"
                    name="min"
                    type="search"
                    value={data.min}
                    onChange={handleChange}
                    required
                    style={{
                      color: "white",
                      width: "8rem",
                      margin: "0 1rem",
                      position: "relative",
                      left: "4rem",
                    }}
                  />
                  <TextField
                    id="outlined-search"
                    label="max"
                    name="max"
                    type="search"
                    value={data.max}
                    onChange={handleChange}
                    required
                    style={{
                      color: "white",
                      width: "8rem",
                      margin: "0 1rem",
                      position: "relative",
                      left: "4rem",
                    }}
                  />
                </div>
                <p style={{ color: "#9E4770" }}>Start of Submission period</p>
                <TextField
                  id="outlined-search"
                  name="hackiStart"
                  value={data.hackiStart}
                    onChange={handleChange}
                  // label="Hackathon Date"
                  type="date"
                  required
                  style={{ color: "white", display: "block", marginBottom:'2rem' }}
                />
                <p style={{ color: "#9E4770" }}>Submission Deadline</p>
                <TextField
                  id="outlined-search"
                  name="hackiEnd"
                  value={data.hackiEnd}
                    onChange={handleChange}
                  // label="Hackathon Date"
                  type="date"
                  required
                  style={{ color: "white", display: "block" }}
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
                Select Preference Skills
              </Typography>
              <FormGroup>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={6}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <FormControlLabel
                    name='preferredSkills'
                    onChange={handleChange}
                    value={data.preferredSkills}
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      }
                      label="Gaming"
                    />
                    <FormControlLabel
                    name="preferredSkills"
                    onChange={handleChange}
                    value={data.preferredSkills}
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      }
                      label="Web "
                    />
                    <FormControlLabel
                    name="preferredSkills"
                    onChange={handleChange}
                    value={data.preferredSkills}
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      }
                      label="Machine Learning"
                    />
                    <FormControlLabel
                    name="preferredSkills"
                    onChange={handleChange}
                    value={data.preferredSkills}
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      }
                      label="Databases"
                    />
                    <FormControlLabel
                    name="preferredSkills"
                    onChange={handleChange}
                    value={data.preferredSkills}
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      }
                      label="Cloud"
                    />
                    <FormControlLabel
                    name="preferredSkills"
                    onChange={handleChange}
                    value={data.preferredSkills}
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      }
                      label="IoT"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <FormControlLabel
                    name="preferredSkills"
                    onChange={handleChange}
                    value={data.preferredSkills}
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      }
                      label="Blockchain"
                    />
                    <FormControlLabel
                    name="preferredSkills"
                    onChange={handleChange}
                    value={data.preferredSkills}
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      }
                      label="Cybersecurity"
                    />
                    <FormControlLabel
                    name="preferredSkills"
                    onChange={handleChange}
                    value={data.preferredSkills}
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      }
                      label="DevOps"
                    />
                    <FormControlLabel
                    name="preferredSkills"
                    onChange={handleChange}
                    value={data.preferredSkills}
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      }
                      label="Musin/Art"
                    />
                    <FormControlLabel
                    name="preferredSkills"
                    onChange={handleChange}
                    value={data.preferredSkills}
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      }
                      label="Design"
                    />
                    <FormControlLabel
                    name="preferredSkills"
                    onChange={handleChange}
                    value={data.preferredSkills}
                      control={
                        <Checkbox
                          {...label}
                          sx={{
                            color: pink[800],
                            "&.Mui-checked": {
                              color: pink[600],
                            },
                          }}
                        />
                      }
                      label="Low/No Code"
                    />
                  </Grid>
                </Grid>
              </FormGroup>
            </Grid>
          </Grid>
          <SignupButton onClick={back} sx={{position: 'relative', bottom: '10em'}}>Back</SignupButton>
          <SignupButton onClick={next} sx={{position: 'relative', bottom: '10em'}}>Next</SignupButton>
        </div>
      </Paper>
    </>
  );
};

export default Submissions;
