import Typography from "@mui/material/Typography";
import { AppBar, Toolbar, IconButton, Container, Box, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import './Navbar.css'

export const Navbar = () => {
  // const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout");
    localStorage.removeItem("token");
    localStorage.removeItem("isVerified");
    localStorage.removeItem("email");
    // window.location.reload();
    setStat("Login");
    navigate('/');
    console.log("Logout successfully");
  };



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

  const response = { responsive: width < 1080 };
  const resp = response.responsive;
  //

  const ViewHButton = styled(Button)({
    position: "absolute",
    right: resp ? "15vw" : "15vw",
    top: "1.5vh",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    p: "7px",
    fontSize: "1.1rem",
    "&:hover": { color: "white" },
  });

  const LoginButton = styled(Button)({
    position: "absolute",
    right: resp ? "7vw" : "7vw",
    top: "1.5vh",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    p: "7px",
    fontSize: "1.1rem",
    "&:hover": { backgroundColor: "#9E4770", color: "white" },
  });

  const SignupButton = styled(Button)({
    position: "absolute",
    right: resp ? "35vw" : "30vw",
    top: "1.5vh",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    p: "7px",
    fontSize: "1.1rem",
    "&:hover": { backgroundColor: "#9E4770", color: "white" },
  });

  const navigate = useNavigate();
  const [loginStatus, setStat] = useState("Login");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      setStat("Login");
    }
    else {
      setStat("Logout");
    }
  }, [])

  return (
    <Paper
      elevation={3}
      style={{ width: "100%", position: "relative", borderRadius: '8rem' }}
    >
      <AppBar position="static">
        <Toolbar
          style={{
            backgroundColor: "white",
            borderRadius: "6px",
          }}
        >
          <Typography variant="h6" style={{ color: "black",display:"flex" }}>
          <Typography variant="h6" classname='navButton' onClick={()=>navigate('/')} style={{ color: "#330867" }}>Home</Typography> Page
          </Typography>
          <Box flexGrow={1} />
          <SignupButton onClick={()=>navigate('/hackathons/organize')} className='navButton'>Organize Hackathon</SignupButton>
          <ViewHButton onClick={()=>navigate('/all-hackathons')} className="navButton">View Hackathons</ViewHButton>
          <LoginButton className="navButton" onClick={() => {
            if(loginStatus==="Login")
            navigate('/login-signup')
            else if(loginStatus==="Logout")
            handleLogout();
          }}>{loginStatus}</LoginButton>
          <AccountCircleOutlinedIcon
            style={{ color: "#330867", fontSize: "2rem" }}
          />
        </Toolbar>
      </AppBar>
    </Paper>
  )
};