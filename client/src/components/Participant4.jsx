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

const Participant4 = () => {
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
        position:'relative',
        right:'6rem',
        top:'1.5rem',
        "&:hover": { backgroundColor: "#5E9387", color: "white" },
      });
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      {/* <Particle /> */}
      <Paper
        elevation={5}
        style={{
          width: "80vw",
          position: "relative",
          left: "10vw",
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
                  type="search"
                  style={{ color: "white", marginBottom: "2rem" }}
                />
                <p style={{ color: "#9E4770" }}>Enter year of college</p>
                <TextField
                  id="outlined-search"
                  label="Year"
                  type="search"
                  style={{ color: "white", marginBottom: "2rem" }}
                />
                 <p style={{ color: "#9E4770" }}>Enter resume</p>
                 <TextField
                  id="outlined-search"
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
                    <FormControlLabel
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
              <SubmitButton type="submit">Submit</SubmitButton>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </>
  );
};

export default Participant4;