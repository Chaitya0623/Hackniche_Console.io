import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import "./HackiDisplay.css";
import { Paper, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { styled, alpha, ThemeProvider } from "@mui/material/styles";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Edit, HowToReg } from "@mui/icons-material";
import { LocationOn, Person, Groups, DoubleArrow } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import { ButtonGroup } from "@mui/material"

const HackiDisplay = () => {
  const TimeButton = styled(Button)({
    backgroundColor: "#2E2532",
    margin: "1rem",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    padding: "12px 15px ",
    width: "8rem",
    color: "white",
    fontSize: "0.8rem",
    backgroundColor: "#9E4770",
    "&:hover": { backgroundColor: "#FBFBFB", color: "#9E4770" },
  });
  const theme = createTheme({
    palette: {
      naigara: {
        main: "#3bb19b",
      },
      white: {
        main: "#fff",
      },
    },
  });
  const buttons = [
    <Button key="min"><Person /> &nbsp; Min: 2</Button>,
    <Button key="max"><Groups /> &nbsp; Max: 4</Button>
  ];
  return (
    <>
    <ThemeProvider theme={theme}>
      <Paper
        style={{
          backgroundColor: "#192841",
          fontFamily: "Ubuntu",
          height: "260vh",
        }}
        //   className="maiii"
      >
        <p>
          <h2
            className="title"
            style={{
              color: "#FBFBFB",
              margin: "1.5rem 0",
              position: "absolute",
              left: "2rem",
              fontSize: "2rem",
            }}
          >
            Hackathons
          </h2>
        </p>
        <hr style={{ color: "white", height: "5rem" }} />
        <Card className="HackiDisplay"
          sx={{
            margin: 'auto',
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor:'#004581',
            boxShadow:'0 0 10px 5px rgba(0, 0, 0, 0.2)',
            transition:'box-shadow 0.3s ease-in-out',
            margin:'2rem'
          }}
        >
          <CardMedia
            sx={{ height: 300, width: "80%", margin: "1rem", borderRadius: 2 }}
            image="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="green iguana"
          />
          <Button className="HackiButton" style={{backgroundColor:'#fff', color: '#2E2532', height: '2em', marginLeft: "70%"}}>
                <Edit />
                Edit
              </Button>
            <Typography gutterBottom variant="h2" component="div" style={{color:'#FBFBFB'}}>
              Trident Hacks : National Level hackathon
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                <Box sx={{border: '2px solid #018abd', marginRight: '2em', borderRadius: '1em'}}>
                <Typography gutterBottom variant="h5" component="div" style={{color:'#FBFBFB', marginTop: '1em', marginLeft: '1em', marginRight: '1em'}}>
                <LocationOn />
                &nbsp; Dwarkadas J. Sanghvi College of Engineering
            </Typography>
            <div sx={{ display: "flex", width: 300 }}>
              <TimeButton>
                Upcoming
              </TimeButton>
              <Button style={{color:'#FBFBFB'}}>
                <LanguageOutlinedIcon sx={{m:'0.7rem'}}/>
                Online
              </Button>
            </div>
            <ButtonGroup color="white" aria-label="large button group" sx={{margin: '1em'}}>
                {buttons}
            </ButtonGroup>
                </Box>
                <Box  sx={{border: '2px solid #018abd', marginLeft: '2em', borderRadius: '1em'}}>
                <Typography variant="h5" style={{color:'#FBFBFB', marginTop: '0.5em', marginRight: '4em', marginLeft: '4em'}}>
                Hackathon Dates
                </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h7" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                Start-Date: &nbsp;
                </Typography>
                <Typography variant="h7" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                22-22-2022
                </Typography>
                <Typography variant="h7" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                &nbsp; | &nbsp;
                </Typography>
                <Typography variant="h7" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                End-Date: &nbsp;
                </Typography>
                <Typography variant="h7" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                22-22-2022
                </Typography>
            </Box>
                <Typography variant="h5" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                Registration Dates
                </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Typography variant="h7" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                Start-Date: &nbsp;
                </Typography>
                <Typography variant="h7" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                22-22-2022
                </Typography>
                <Typography variant="h7" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                &nbsp; | &nbsp;
                </Typography>
                <Typography variant="h7" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                End-Date: &nbsp;
                </Typography>
                <Typography variant="h7" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                22-22-2022
                </Typography>
            </Box>
                <Button className="HackiButton" style={{backgroundColor:'#fff', color: '#2E2532', height: '2em', margin: '1em', marginTop: '1.3em'}}>
                <HowToReg />
                  Register
                </Button>
                </Box>
            </Box>
            <Box>
            <Typography variant="h2" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
              Rules
            </Typography>
            <Box className='Rules' sx={{border: '2px solid #018abd', width: '80%', marginLeft: '10%', borderRadius: '1em', marginTop: '1em'}}>
            <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em', marginLeft: '1em', marginRight: '1em'}}>
              <DoubleArrow /> Maximum team size of 4 participants and minimum of 2.
            </Typography>
            <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em', marginLeft: '1em', marginRight: '1em'}}>
              <DoubleArrow /> All team members should be present 10 minutes prior than the scheduled time.
            </Typography>
            <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em', marginLeft: '1em', marginRight: '1em'}}>
              <DoubleArrow /> Bring a valid government-issued card and/or college ID.
            </Typography>
            <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em', marginLeft: '1em', marginRight: '1em'}}>
              <DoubleArrow /> It is advisable to bring a water bottle and some common medications (paracetamols,etc..) with you.
            </Typography>
            <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em', marginLeft: '1em', marginRight: '1em'}}>
              <DoubleArrow /> Duration is 24 hours. Only the submissions made during this timeline will be considered.
            </Typography>
            <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em', marginLeft: '1em', marginRight: '1em'}}>
              <DoubleArrow /> Participants will have to pay for any damage to belongings within the college campus.
            </Typography>
            <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em', marginLeft: '1em', marginRight: '1em'}}>
              <DoubleArrow /> All work on a project should be done during the hackathon
            </Typography>
            <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em', marginLeft: '1em', marginRight: '1em'}}>
              <DoubleArrow /> No plagiarism/copy-paste will be entertained; if found, the teams will directly be disqualified from the hackathon. 
            </Typography>
            <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em', marginLeft: '1em', marginRight: '1em'}}>
              <DoubleArrow /> Working on a project before the event and open-sourcing it for the sole purpose of using the code during the event is against the spirit of the rules and is not allowed.
            </Typography>
            <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em', marginLeft: '1em', marginRight: '1em'}}>
              <DoubleArrow /> Reasons for disqualification might include but are not limited to breaking the Competition Rules, the Code of Conduct, or other unsporting behaviour.
            </Typography>
            <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em', marginLeft: '1em', marginRight: '1em', marginBottom: '1em'}}>
              <DoubleArrow /> Teams must stop hacking once the time is up.
            </Typography>
            </Box>
            </Box>
            <Box>
            <Typography variant="h2" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                Organization Details
            </Typography>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
                Contact Email: &nbsp;
              </Typography>
              <Typography variant="h6" style={{color:'#FBFBFB', marginTop: '0.5em'}}>
               abc@gmail.com
              </Typography>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Typography variant="h6" style={{color:'#FBFBFB'}}>
                Instagram: &nbsp;
              </Typography>
              <Typography variant="h6" style={{color:'#FBFBFB'}}>
              www.google.com
              </Typography>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Typography variant="h6" style={{color:'#FBFBFB'}}>
                Discord Link: &nbsp;
              </Typography>
              <Typography variant="h6" style={{color:'#FBFBFB'}}>
               www.google.com
              </Typography>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'center'}}> 
              <Typography variant="h6" style={{color:'#FBFBFB'}}>
                Linkedin: &nbsp;
              </Typography>
              <Typography variant="h6" style={{color:'#FBFBFB'}}>
               www.google.com
              </Typography>
              </Box>
            </Box>
            <Button className="HackiButton" style={{backgroundColor:'#fff', color: '#2E2532', height: '2em', marginLeft: "70%", marginTop: '1em', marginBottom: '2em'}}>
                <Edit />
                Edit
            </Button>
        </Card>
      </Paper>
      </ThemeProvider>
    </>
  );
};

export default HackiDisplay;