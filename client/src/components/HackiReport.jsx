import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import { Paper, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Chart from "chart.js/auto";
import { Line, Pie, Doughnut } from "react-chartjs-2";
import DownloadDoneOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined";
import EngineeringIcon from '@mui/icons-material/Engineering';
import PersonIcon from '@mui/icons-material/Person';

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.2.1/chart.min.js"></script>;

const labels = ["2", "4", "6", "8", "10", "12"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "No. of Participants vs No. of hackathons ",
      backgroundColor: "#f56dad",
      borderColor: "#f56dad",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const Pielabels = ["Web", "AI/ML", "IOT", "Gaming", "BlockChain", "Cloud"];
const Piedata = {
  labels: Pielabels,
  datasets: [
    {
      label: "Domain Distribution",
      backgroundColor: [
        "#f56dad",
        "#631D76",
        "#FBFBFB",
        "#d8afe0",
        "#afc1e0",
        "#e3ce96",
      ],
      // borderColor: "#f56dad",
      data: [10, 10, 5, 2, 20, 30, 45],
      borderWidth: 1,
    },
  ],
};

const Doughnutdata = {
  labels: ["Male", "Female", "Prefer not to say", "Transgender"],
  datasets: [
    {
      label: "Gender",
      data: [300, 100, 10, 3],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
        "#74f7d7",
      ],
      hoverOffset: 4,
    },
  ],
};

const HackiReport = () => {
  // adding event listener for responsiveness
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const responsiveness = { responsive: width < 1053 };
  const resp = responsiveness.responsive;
  //

  const HackiButton = styled(Button)({
    backgroundColor: "#9E4770",
    margin: "1rem",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: "10rem",
    color: "white",
    fontSize: "0.8rem",
    position: "relative",
    left: "22rem",
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });
  const LogoutButton = styled(Button)({
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
    left: "22rem",
    "&:hover": { backgroundColor: "#5E9387", color: "white" },
  });
  const userDataStyle = {
    width: "11rem",
    height: "8rem",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "6px",
    position: "relative",
    left: resp ? "1rem" : "3rem",
    top:resp?"" : '2rem',
    backgroundColor:'#2E2532',
    color:'white',
    "&:hover": {
      boxShadow: "0px 0px 10px 1px rgba(255, 255, 255, 0.5)",
    },
  };

  const WebsiteUserData = () => (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Paper elevation={3} style={userDataStyle}>
        <Grid xs={6}>
          <PersonIcon style={{ position: "relative", right: "1rem" }} />
          <h2>45+</h2>
          <span>Registrations</span>

          <p style={{color:'#4caf50', margin:'0', position:'relative', left:'6rem', bottom:'1.2rem'}}>50%</p>
        </Grid>
      </Paper>
      <Paper elevation={3} style={userDataStyle}>
        <Grid xs={6}>
          <EngineeringIcon style={{ position: "relative", right: "1rem" }} />
          <h1 style={{ marginTop: "1em", marginBottom: "0" }}>21</h1>
          <span>Total Participants</span>
          <p
            style={{
              color: "#4caf50",
              margin: "0",
              position: "relative",
              left: "6rem",
              bottom: "1.8rem",
            }}
          >
            70%
          </p>
        </Grid>
      </Paper>
      <Paper elevation={3} style={userDataStyle}>
        <Grid xs={12} sm={6}>
          <DownloadDoneOutlinedIcon
            style={{ position: "relative", right: "1rem" }}
          />
          <h1 style={{ marginTop: "1em", marginBottom: "0" }}>4</h1>
          <span>Hackathon Count</span>
          <p
            style={{
              color: "#4caf50",
              margin: "0",
              position: "relative",
              left: "5rem",
              bottom: "1.8rem",
            }}
          >
            30%
          </p>
        </Grid>
      </Paper>
      <Paper elevation={3} style={userDataStyle}>
        <Grid xs={12} sm={6}>
          <PersonIcon style={{ position: "relative", right: "1rem" }} />
          <h1 style={{ marginTop: "1em", marginBottom: "0" }}>102</h1>
          <span>Visitors</span>
          <p
            style={{
              color: "#4caf50",
              margin: "0",
              position: "relative",
              left: "5rem",
              bottom: "1.2rem",
            }}
          >
            20%
          </p>
        </Grid>
      </Paper>
    </Grid>
  );

  return (
    <>
      <Paper
        elevation={5}
        style={{
          backgroundColor: "#201A23",
          fontFamily: "Ubuntu",
          height: "135vh",
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
            }}
          >
            Dashboard
          </h2>
        </p>
        <HackiButton>My Hackathons</HackiButton>
        <LogoutButton type="submit">Log out</LogoutButton>
        <hr style={{ color: "white" }} />

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Card
              sx={{
                maxWidth: 700,
                width: 500,
                height: 300,
                backgroundColor: "#2E2532",
                boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
                transition: "box-shadow 0.3s ease-in-out",
                margin: "2rem 6rem",
                padding: "2rem",
                "&:hover": {
                  boxShadow: "0px 0px 10px 1px rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              <Line data={data} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card
              sx={{
                maxWidth: 700,
                width: 500,
                height: 300,
                backgroundColor: "#2E2532",
                boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
                transition: "box-shadow 0.3s ease-in-out",
                margin: "2rem",
                padding: "2rem",
                "&:hover": {
                  boxShadow: "0px 0px 10px 1px rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              <Pie data={Piedata} />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Card
              sx={{
                maxWidth: 700,
                width: 500,
                height: 300,
                backgroundColor: "#2E2532",
                boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
                transition: "box-shadow 0.3s ease-in-out",
                margin: "2rem 6rem",
                padding: "2rem",
                "&:hover": {
                  boxShadow: "0px 0px 10px 1px rgba(255, 255, 255, 0.5)",
                },
              }}
            >
              <Doughnut data={Doughnutdata} />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <WebsiteUserData/>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default HackiReport;