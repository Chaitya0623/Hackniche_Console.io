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
import { FileUploader } from "react-drag-drop-files";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";



const Essentials = (props) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const { data,multer,handleImageUpload, handleChange, next } = props;

  const fileTypes = ["JPEG", "PNG", "GIF"];
  // const [file, setFile] = useState(null);
  // const handleChange = (file) => {
  //   setFile(file);
  // };
  // const [domain, setdomain] = useState("");
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

  // const handleDomain = (val) => {
  //   console.log(val);
  //   setdomain(val);
  //   console.log(domain);
  //   setData({ ...data, domain:val});
  // };

  // const handleImageUpload = (e) => {
  //   console.log("Handle Image Upload");
  //   console.log(e.target.files[0]);
  //   console.log(e.target.files[0].name);
  //   setData({...data , image:e.target.files[0]})
  // }

  // const handleChange = (e) => {
  //   console.log(e.target.name, e.target.value);
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };


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

  return (
    <>
      <Paper style={{ width: '78vw', position: 'relative', right: '20vw', top: '5rem', borderRadius: 5, height: 400 }}>
        <Box style={{ backgroundColor: "white" }}>

          <Grid container spacing={4} style={{ padding: '3rem', margin: 'rem 0' }}>
            <Grid item xs={6} style={{}}>
              <Box sx={{ display: "flex" }}>
                <Box>
                  <p style={{ color: "#9E4770", marginRight: '46em' }}>Hackathon Logo</p>
                  {/* <FileUploader
                    multiple={true}
                    type="file"
                    handleChange={handleImageUpload}
                    name="logo"
                    value={data.logo}
                  /> */}
                  <TextField
                    id="outlined-search"
                    label="Hackathon Name"
                    name="title"
                    value={multer.logo}
                    type="file"
                    onChange={handleImageUpload}
                    required
                    style={{ color: "white", marginBottom: '1.8rem', marginTop: '1rem', width: '33.5em', marginRight: '20rem' }}
                  />
                  {/* <p style={{marginRight:'28.5em',marginTop:'0.8em',marginRight:'43em'}}> {file ? `File name: ${file[0].name}` : "No files uploaded yet"}</p> */}
                  <TextField
                    id="outlined-search"
                    label="Hackathon Name"
                    name="title"
                    value={data.title}
                    // type="search"
                    onChange={handleChange}
                    required
                    style={{ color: "white", marginBottom: '1.8rem', marginTop: '1rem', width: '33.5em', marginRight: '20rem' }}
                  />
                  <TextField
                    id="outlined-search"
                    label="Hackathon Organisation"
                    name="organisation"
                    onChange={handleChange}
                    value={data.organisation}
                    type="search"
                    required
                    style={{ color: "white", marginBottom: '2rem', width: '33.5em', marginRight: '20rem' }}
                  />
                </Box>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <TextField
                      sx={{
                        marginRight: 2,
                      }}
                      name="regiStart"
                      id="standard-basic"
                      variant="outlined"
                      type="date"
                      onChange={handleChange}
                      value={data.regiStart}
                    />
                    <TextField
                      sx={{
                        marginLeft: 2,
                      }}
                      name="regiEnd"
                      id="standard-basic"
                      variant="outlined"
                      type="date"
                      onChange={handleChange}
                      value={data.regiEnd}
                    />
                  </Box>
                  <FormControl>
                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                      style={{ color: "#9E4770" }}
                    >
                      Mode Of Hackathon
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      style={{ marginBottom: '2rem' }}
                      onChange={handleChange}
                      value={data.modeOfHacki}
                    >
                      <FormControlLabel
                        value="Online"
                        control={<Radio />}
                        label="Online"
                        name="modeOfHacki"
                      />
                      <FormControlLabel
                        value="Offline"
                        control={<Radio />}
                        label="Offline"
                        name="modeOfHacki"
                      />
                    </RadioGroup>
                  </FormControl>
                  <MultiSelect
                    sx={{ backgroundColor: "#fff", marginTop: 3 }}
                    name="domain"
                    placeholder="Domains"
                    className="multi-select"
                    value={data.domain}
                  onChange={handleChange}
                  options={DomainOptions}
                  />
                </Box>
              </Box>
              <button onClick={next}>Next</button>
              {/* <p style={{ color: "#9E4770" }}>
            When does your hackathon submission period begin?
          </p>
          <p style={{ color: "#9E4770" }}>
          (This is the
            expected day participants will start building.)
          </p> */}

              {/* <p style={{ color: "#9E4770" }}>Name of your organisation(if any)</p>
          <TextField
            id="outlined-search"
            label="Organisation Name"
            type="search"
            required
            style={{ color: "white" }}
          /> */}

              {/* <form
            className="inputBox"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            </form> */}
            </Grid>
            {/* <Grid item xs={6}>
          <Typography
              sx={{
                color: "#9E4770",
                margin:'1rem',
                position:'relative',
                right:'8rem'
              }}
            >
              Select Domain
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
          </Grid> */}
          </Grid>

        </Box>
      </Paper>
    </>
  );
};

export default Essentials;
