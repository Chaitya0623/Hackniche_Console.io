const {
    addTeamDetail,
    getTeamDetails,
    getTeamDetail,
    editTeamDetail,
    deleteTeamDetail,
    } = require("../controllers/teamDetailsController");
    
    const { upload } = require("../middlewares/multerTeam");
    const express = require("express");
    const router = express.Router();
    
    router.post("/addTeamDetail/:id", upload.single("file"), addTeamDetail);
    router.get("/allTeamDetails", getTeamDetails);
    router.get("/:email", getTeamDetail);
    router.get("/:id", getTeamDetail);
    router.put("/:id", editTeamDetail);
    router.delete("/:id", deleteTeamDetail);
    
    // router.get("/all", (req, res) => {
    //   console.log("Hey!");
    //   res.send("Hey , Kreena here!");
    // });
    
    router.get("/", (req, res) => {
      console.log("Welcome");
      res.status(200).send("Welcome 🙌 ");
    });
    
    module.exports = router;