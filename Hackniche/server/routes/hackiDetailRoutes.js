const {
  addHackiDetail,
  getHackiDetails,
  getHackiDetail,
  editHackiDetail,
  deleteHackiDetail,
  } = require("../controllers/hackiDetailController");
  
  const { upload } = require("../middlewares/multerHacki");
  const express = require("express");
  const router = express.Router();
  
  router.post("/addHackiDetail", addHackiDetail);
  router.get("/allHackiDetails", getHackiDetails);
  router.get("/:email", getHackiDetail);
  router.get("/:id", getHackiDetail);
  router.put("/:id", editHackiDetail);
  router.delete("/:id", deleteHackiDetail);
  
  // router.get("/all", (req, res) => {
  //   console.log("Hey!");
  //   res.send("Hey , Kreena here!");
  // });
  
  router.get("/", (req, res) => {
    console.log("Welcome");
    res.status(200).send("Welcome 🙌 ");
  });
  
  module.exports = router;