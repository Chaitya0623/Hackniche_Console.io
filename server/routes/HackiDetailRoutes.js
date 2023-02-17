const {
  addHackiDetail,
  getHackiDetails,
  getHackiDetail,
  editHackiDetail,
  deleteHackiDetail,
} = require("../controllers/HackiDetailsController");

const { upload } = require("../middlewares/multer");
const express = require("express");
const router = express.Router();

router.post("/addHackiDetail", upload.single("file"), addHackiDetail);
router.get("/allHackiDetails", getHackiDetails);
router.get("/:email", getHackiDetail);
router.get("/:id", getHackiDetail);
router.put("/:id", editHackiDetail);
router.delete("/:id", deleteHackiDetail);

router.get("/", (req, res) => {
  console.log("Welcome");
  res.status(200).send("Welcome 🙌 ");
});

module.exports = router;
