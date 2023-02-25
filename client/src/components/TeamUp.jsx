import { Table, TableHead, TableBody, TableRow, Button, Typography,TableCell } from "@mui/material";
// import {getUsers , deleteUser} from '../service/api.js';
import { useEffect, useState } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import * as React from "react";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import { createTheme } from '@mui/material/styles';
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
// import './Components.css'

// import { StyledTableCell , StyledTableRow} from "./VerificationAdmin";

const URL = "http://localhost:3000";
const imageURL = "http://localhost:3000/ClientImages/";

export const columns = [
  { id: "image", label: "Image" },
  { id: "name", label: "Name" },
  { id: "address", label: "Address" },
  {
    id: "contact",
    label: "contact",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "email",
    label: "email",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "delete", label: "Delete" },
];

const mytheme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#8FC79A',
      darker: '#2D8D79',
    },
    neutral: {
      main: '#CEE9B6',
      contrastText: '#5E9387',
    },
  },
});

const Clients = () => {

 const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: mytheme.palette.primary.darker,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
    const [workerProfiles, setWorkerProfiles] = useState([]);

    useEffect(() => {
      getAllworkerProfiles();
    }, []);

    const getAllworkerProfiles = async () => {
      try {
        let response = await axios.get(`${URL}/client/allClientProfiles`);
        // console.log(response.data[0].name);
        // const workerProfileArray = Object.entries(response.data)
        // console.log("kreena")
        // console.log(typeof(workerProfileArray));
        // console.log(workerProfileArray);
        setWorkerProfiles(response.data);
        console.log(workerProfiles);
        // console.log(workerProfiles[0]);
        
      } catch (error) {
        console.log("Error while calling /client/allClientProfiles API");
      }
    };


// for responsiveness
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

const response = { responsive: width < 670 };
const resp = response.responsive;
//

// const [page, setPage] = React.useState(0);
// const [rowsPerPage, setRowsPerPage] = React.useState(10);

// const handleChangePage = (event, newPage) => {
//   setPage(newPage);
// };

// const handleChangeRowsPerPage = (event) => {
//   setRowsPerPage(+event.target.value);
//   setPage(0);
// };

// const [rows, setRows] = useState(data);

// const handleDelete = (id) => {
//   setRows(rows.filter((row) => row.id !== id));
// };

 const deleteClientProfiles = async (id) => {
//    await deleteClientProfile(id);
   getAllworkerProfiles();
 };

    return ( 
        <>
        <div className="clientBg Clientbg" style={{height: "100vh"}}>

            <TableContainer
              sx={{
                display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                marginTop: 7,
                marginLeft: 4.2,
                width: 1300,
              }}
              component={Paper}
            >
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell style={{ width: 160 }}>Name</StyledTableCell>
                    <StyledTableCell style={{ width: "65%" }}>Skills</StyledTableCell>
                    <StyledTableCell>TeamUp</StyledTableCell>
                    <StyledTableCell>Calling</StyledTableCell>
                    {/* <StyledTableCell>Contact</StyledTableCell>
                    <StyledTableCell>Address</StyledTableCell>
                    <StyledTableCell>Delete</StyledTableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {workerProfiles.map((workerProfile) => (
                    <StyledTableRow key={workerProfile._id}>
                      {/* <img
                        src={imageURL + workerProfile.image}
                        height="50"
                        width="50"
                        // alt="imageof"
                        // src={Antariksh_HomePageS2}
                        className="image"
                      ></img> */}
                      <StyledTableCell component="th" scope="row">
                        {workerProfile.image}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {workerProfile.name}
                      </StyledTableCell>
                      <StyledTableCell>{workerProfile.email}</StyledTableCell>
                      <StyledTableCell>{workerProfile.contact}</StyledTableCell>
                      <StyledTableCell>{workerProfile.address}</StyledTableCell>
                      <StyledTableCell>
                        <Button
                          sx={{ marginLeft: 3, backgroundColor: "#ff0000" }}
                          variant="contained"
                          onClick={() =>
                            deleteClientProfiles(workerProfile._id)
                          }
                        >
                          <DeleteIcon />
                          TeamUp
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>
      </>
    );
}
 
export default Clients;