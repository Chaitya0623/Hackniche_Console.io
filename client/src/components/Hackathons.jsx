import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as React from "react";
import "./Hackathons.css";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { styled, alpha } from "@mui/material/styles";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import  {Navbar}  from "./Navbar";
import './Navbar.css'

const Hackathons = () => {
  const TimeButton = styled(Button)({
    margin: "1rem",
    borderRadius: "3rem",
    marginLeft: "1.2rem",
    textDecoration: "none",
    // padding: "12px 15px ",
    width: "8rem",
    color: "white",
    fontSize: "0.8rem",
    backgroundColor: "#9E4770",
    "&:hover": { color: "#9E4770" },
  });

  const emailStored = localStorage.getItem("email");
  console.log(emailStored);
  const navigate=useNavigate();
  
    const [hackiDetails, sethackiDetails] = useState([]);
  
    useEffect(() => {
      gethackiDetail();
    }, []);
  
    const gethackiDetail = async () => {
      try {
        let response = await axios.get(`http://localhost:8080/hacki/allHackiDetails`);
        console.log(response.data);
        sethackiDetails(response.data);
      } catch (error) {
        console.log("Error while calling gethackiDetail API");
      }
    };

  return (
    
    <>
    
      <Paper
        style={{
          backgroundImage:
      " linear-gradient(210deg, rgba(107, 107, 107, 0.04) 0%, rgba(107, 107, 107, 0.04) 8%,rgba(31, 31, 31, 0.04) 8%, rgba(31, 31, 31, 0.04) 100%),linear-gradient(178deg, rgba(228, 228, 228, 0.04) 0%, rgba(228, 228, 228, 0.04) 62%,rgba(54, 54, 54, 0.04) 62%, rgba(54, 54, 54, 0.04) 100%),linear-gradient(293deg, rgba(18, 18, 18, 0.04) 0%, rgba(18, 18, 18, 0.04) 37%,rgba(233, 233, 233, 0.04) 37%, rgba(233, 233, 233, 0.04) 100%),linear-gradient(422deg, rgba(201, 201, 201, 0.04) 0%, rgba(201, 201, 201, 0.04) 55%,rgba(47, 47, 47, 0.04) 55%, rgba(47, 47, 47, 0.04) 100%),linear-gradient(439deg, rgba(172, 172, 172, 0.04) 0%, rgba(172, 172, 172, 0.04) 33%,rgba(26, 26, 26, 0.04) 33%, rgba(26, 26, 26, 0.04) 100%),linear-gradient(233deg, rgba(11, 11, 11, 0.04) 0%, rgba(11, 11, 11, 0.04) 38%,rgba(87, 87, 87, 0.04) 38%, rgba(87, 87, 87, 0.04) 100%),linear-gradient(516deg, rgba(199, 199, 199, 0.04) 0%, rgba(199, 199, 199, 0.04) 69%,rgba(4, 4, 4, 0.04) 69%, rgba(4, 4, 4, 0.04) 100%),linear-gradient(482deg, rgba(36, 36, 36, 0.04) 0%, rgba(36, 36, 36, 0.04) 20%,rgba(91, 91, 91, 0.04) 20%, rgba(91, 91, 91, 0.04) 100%),linear-gradient(259deg, rgb(3,7,39),rgb(18,140,212))",
          fontFamily: "Ubuntu",
          height: "100vh",

        }}
        //   className="maiii"
      >
        <Navbar />
          {/* <h2
            className="heading"
            style={{
              margin: "1.5rem 0",
              position: "absolute",
              left: "2rem",
              fontSize: "2rem",
            }}
          >
            Hackathons
          </h2>
          <hr style={{ color: "white", height: "5rem" }} /> */}
        {hackiDetails.map((hackiDetail,index)=>{return(<>
          <Card
          className="HackiCard"
          sx={{
            maxWidth: 900,
            width:900,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5",
            boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s ease-in-out",
            margin: "2rem",
            position:'absolute',
            left:'28vw',
            marginTop: '3em',
          }}
        >
          <CardMedia
            sx={{ height: 200, width: 300, margin: "2rem",borderRadius: 2 }}
            image="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              {hackiDetail.title}
            </Typography>
            <div sx={{  width: 300 , display:'flex', flexDirection:'flex-start' }}>
              <TimeButton sx={{fontSize: '1em', color: 'white'}}>Upcoming</TimeButton>
              <Button style={{ color: "#000" }}>
                <LanguageOutlinedIcon sx={{ m: "0.7rem",color: '#000' }} />
                {hackiDetail.modeOfHacki}
              </Button>
            </div>
            {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
            <h4 style={{ margin:'0 1rem 0.3rem 0 ', letterSpacing:2}}>Registration Deadline : {hackiDetail.regEnd}</h4>
            <CardActions style={{  position:'relative', left:'2rem'}}>
              <LocationOnOutlinedIcon size="small" style={{ position:'relative' }}/>
                <span style={{ marginRight:'1rem'}}>{hackiDetail.organisation}</span>
              <EmojiEventsOutlinedIcon size="small"/>
              <span style={{ marginRight:'1rem'}}>Rs. 25000</span>
              <Button size="small" style={{ color: "#000" }} onClick={()=>{localStorage.setItem("_id",hackiDetail._id)
                navigate('/hackathons/display')}}>
                Learn More
              </Button>
            </CardActions>
          </CardContent>
          
        </Card>
        </>
        )})}
        {/* <Card
          className="HackiCard"
          sx={{
            maxWidth: 700,
            display: "flex",
            flexDirection: "flex-start",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5",
            boxShadow: "0 0 10px 5px rgba(0, 0, 0, 0.2)",
            transition: "box-shadow 0.3s ease-in-out",
            margin: "2rem",
            position:'absolute',
            left:'28vw',
            marginTop: '3em',
          }}
        >
          <CardMedia
            sx={{ height: 200, width: 300, margin: "2rem",borderRadius: 2 }}
            image="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              Trident Hacks : National Level hackathon
            </Typography>
            <div sx={{  width: 300 , display:'flex', flexDirection:'flex-start' }}>
              <TimeButton sx={{fontSize: '1em', color: 'white'}}>Upcoming</TimeButton>
              <Button style={{ color: "#000" }}>
                <LanguageOutlinedIcon sx={{ m: "0.7rem",color: '#000' }} />
                Online
              </Button>
            </div>
            {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
            {/* <h4 style={{ margin:'0 1rem 0.3rem 0 ', letterSpacing:2}}>Registration Deadline : 22/22/2222</h4>
            <CardActions style={{  position:'relative', left:'2rem'}}>
              <LocationOnOutlinedIcon size="small" style={{ position:'relative' }}/>
                <span style={{ marginRight:'1rem'}}>Location</span>
              <EmojiEventsOutlinedIcon size="small"/>
              <span style={{ marginRight:'1rem'}}>Prize</span>
              <Button size="small" style={{ color: "#000" }}>
                Learn More
              </Button>
            </CardActions>
          </CardContent>
          
        </Card> */}
      </Paper>
    </>
  );
};

export default Hackathons;
