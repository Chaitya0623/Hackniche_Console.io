import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { AppBar, Toolbar, IconButton, Container, Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Unstable_Grid2";
import { CenterFocusStrong } from "@mui/icons-material";
import illustration from "../images/illustration.svg";
import { height } from "@mui/system";
import  {Navbar}  from "./Navbar";

const Home = () => {
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

  const searchBarStyle = {
    borderRadius: "10rem",
    color: "#9E4770",
    flexShrink: "6",
    display: "inline",
    width: resp ? "40vw" : "35vw",
    border: "2px solid #9E4770",
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.7),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#6B0EF8",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      height: "1.7rem",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const searchStyle = {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    top: "-8rem",
    left:'7rem',
  };


  const AccountIcon = styled(AccountCircleOutlinedIcon)({
    color: "#2DBD79",
  });

  const imgStyle = {
    backgroundImage:
      " linear-gradient(210deg, rgba(107, 107, 107, 0.04) 0%, rgba(107, 107, 107, 0.04) 8%,rgba(31, 31, 31, 0.04) 8%, rgba(31, 31, 31, 0.04) 100%),linear-gradient(178deg, rgba(228, 228, 228, 0.04) 0%, rgba(228, 228, 228, 0.04) 62%,rgba(54, 54, 54, 0.04) 62%, rgba(54, 54, 54, 0.04) 100%),linear-gradient(293deg, rgba(18, 18, 18, 0.04) 0%, rgba(18, 18, 18, 0.04) 37%,rgba(233, 233, 233, 0.04) 37%, rgba(233, 233, 233, 0.04) 100%),linear-gradient(422deg, rgba(201, 201, 201, 0.04) 0%, rgba(201, 201, 201, 0.04) 55%,rgba(47, 47, 47, 0.04) 55%, rgba(47, 47, 47, 0.04) 100%),linear-gradient(439deg, rgba(172, 172, 172, 0.04) 0%, rgba(172, 172, 172, 0.04) 33%,rgba(26, 26, 26, 0.04) 33%, rgba(26, 26, 26, 0.04) 100%),linear-gradient(233deg, rgba(11, 11, 11, 0.04) 0%, rgba(11, 11, 11, 0.04) 38%,rgba(87, 87, 87, 0.04) 38%, rgba(87, 87, 87, 0.04) 100%),linear-gradient(516deg, rgba(199, 199, 199, 0.04) 0%, rgba(199, 199, 199, 0.04) 69%,rgba(4, 4, 4, 0.04) 69%, rgba(4, 4, 4, 0.04) 100%),linear-gradient(482deg, rgba(36, 36, 36, 0.04) 0%, rgba(36, 36, 36, 0.04) 20%,rgba(91, 91, 91, 0.04) 20%, rgba(91, 91, 91, 0.04) 100%),linear-gradient(259deg, rgb(3,7,39),rgb(18,140,212))",
    // backgroundImage:"url('https://cdn.pixabay.com/photo/2018/01/29/13/03/internet-3116062__340.jpg')",  
    height: "100vh",
    width: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: "0.9",
  };

  const categoryImgStyle = {
    width: "8rem",
    height: "7.5rem",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "10px",
  };

  //   const CategoryComponent = () => (
  //     <div
  //       style={{ width: "60%", position: "relative", left: "20%", top: "30%"}}
  //     >
  //       <Grid container spacing={0}>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Cleaning and Pest Control</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Appliance Repair</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Home Painting</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Hair cut</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} style={{visibility:'hidden'}}>
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Special Service for women</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={3} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div style={{position:'relative', left:'0%'}}>
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Special Service for women</h3>
  //       </Paper>
  //       </Grid>
  //       <Grid xs={6} >
  //       <Paper elevation={5} style={categoryImgStyle}>
  //       <div >
  //             <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png" alt="Appliance-repair" itemScope itemProp="image"
  //             style={{objectFit:'cover', width:'2.5rem', height:'2.5rem'}}/>
  //           </div>
  //         <h3 >Plumbers and Carpenters</h3>
  //       </Paper>
  //       </Grid>

  //       </Grid>
  //     </div>
  //   );

  return (
    <Paper style={imgStyle} sx={{overflow: 'hidden'}}>
      <Navbar/>
      <div
        style={{
          width: "25rem",
          height: "20rem",
          backgroundImage: `url(${illustration})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          top: "12rem",
          left: "5rem",
        //   opacity: "0.8",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection:'column',
          // justifyContent: "flex-start",
          alignItems:'flex-start',
          position: "relative",
          top: "-5rem",
          left:'40vw',
          color: "white",
          fontSize:'4rem'
        }}
      >
        <p style={{margin:'0 0'}}>Come for the code, </p>
        <p style={{margin:'0 0'}}>stay for the community.</p>
      </div>
      <Toolbar style={searchStyle} sx={{marginTop: '5em'}}>
        <Search style={searchBarStyle}>
          <SearchIconWrapper>
            <SearchIcon style={{ color: "#9E4770" }} />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search for Hackathons"
            inputProps={{ "aria-label": "search" }}
            sx={{ width: "20rem"  }}
          />
        </Search>
      </Toolbar>
      {/* <h1
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          top: "11rem",
          color: "white ",
          textShadow:'2px 2px 2px #333'
        }}
      >
       Categories
      </h1> */}
      {/* <CategoryComponent /> */}
    </Paper>
  );
};

export default Home;
