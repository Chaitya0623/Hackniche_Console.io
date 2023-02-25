const {
  HackiDetailModel,
  // validateClientProfile,
} = require("../models/hackiDetailsModel");

const addHackiDetail = async (request, response) => {
  console.log("HackiDetailcontroller => addHackiDetail");
  console.log("REQUEST",request.body);
  // console.log(request.file);
  // const image = request.file ? request.file.filename : null;
  // console.log("Image declare krne ke baad", image);


  const {
    title,
    modeOfHacki,
    organisation,
    domain,
    regiStart,
    regiEnd,
    hackiStart,
    hackiEnd,
    preferredSkill,
    min,
    max,
    contactEmail,
    discordLink,
    instaLink,
    linkedInLink,
  } = request.body;

  const hackiDetail = {
    title,
    modeOfHacki,
    organisation,
    domain,
    regiStart,
    regiEnd,
    hackiStart,
    hackiEnd,
    preferredSkill,
    min,
    max,
    contactEmail,
    discordLink,
    instaLink,
    linkedInLink,
  };
  // const { error } = validateClientProfile(clientProfile);
  // if (error) {
  //   console.log(error.details[0].message);
  //   return response.status(400).send({ message: error.details[0].message });
  // }

  const newHackiDetail = new HackiDetailModel({
    title,
    modeOfHacki,
    organisation,
    domain,
    regiStart,
    regiEnd,
    hackiStart,
    hackiEnd,
    preferredSkill,
    min,
    max,
    contactEmail,
    discordLink,
    instaLink,
    linkedInLink,
  });
  try {
    console.log("try");
    await newHackiDetail.save();
    response.status(201).json(newHackiDetail);
    console.log("HackiDetail created successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const getHackiDetails = async (request, response) => {
  try {
    const hackiDetails = await HackiDetailModel.find({});
    response.status(200).json(hackiDetails);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const getHackiDetail = async (request, response) => {
  try {
    // console.log(request.params.email);
    const hackiDetail = await HackiDetailModel.findOne({
      email: request.params.email,
    });
    // const user = await User.findById(request.params.id);
    response.status(200).json(hackiDetail);
    // console.log(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const editHackiDetail = async (request, response) => {
  const hackiDetail = request.body;
  console.log(clientProfile);
  const editHackiDetail = new HackiDetailModel(hackiDetail);
  try {
    await User.updateOne({ email: clientProfile.email }, editHackiDetail);
    response.status(201).json(editHackiDetail);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const deleteHackiDetail = async (request, response) => {
  try {
    await HackiDetailModel.deleteOne({ _id: request.params.id });
    response.status(201).json(editHackiDetail);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

module.exports = {
  addHackiDetail,
  getHackiDetails,
  getHackiDetail,
  editHackiDetail,
  deleteHackiDetail,
};