const {
  HackiDetailModel,
  validateHackiDetail,
} = require("../models/HackiDetailsModel");

const addHackiDetail = async (request, response) => {
  console.log("HackiDetailcontroller => addHackiDetail");
  console.log(request.body);
  console.log(request.file);
  const image = request.file ? request.file.filename : null;
  console.log("Image declare krne ke baad", image);

  const { title , modeOfHacki,organisation,domain,regiStart,
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
  rules,
  price1,
  price2,
  price3 } = request.body;

  const HackiDetail = {
  logo , title , modeOfHacki,organisation,domain,regiStart,
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
  rules,
  price1,
  price2,
  price3
  };
  const { error } = validateHackiDetail(HackiDetail);
  if (error) {
    console.log(error.details[0].message);
    return response.status(400).send({ message: error.details[0].message });
  }

  const newHackiDetail = new HackiDetailModel({
  logo , title , modeOfHacki,organisation,domain,regiStart,
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
  rules,
  price1,
  price2,
  price3
  });
  try {
    console.log("try");
    await newHackiDetail.save();
    response.status(201).json(newHackiDetail);
    console.log("Client Profile created successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

const getHackiDetails = async (request, response) => {
  try {
    const HackiDetails = await HackiDetailModel.find({});
    response.status(200).json(HackiDetails);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const getHackiDetail = async (request, response) => {
  try {
    // console.log(request.params.email);
    const HackiDetail = await HackiDetailModel.findOne({
      email: request.params.email,
    });
    // const user = await User.findById(request.params.id);
    response.status(200).json(HackiDetail);
    // console.log(user);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

const editHackiDetail = async (request, response) => {
  const HackiDetail = request.body;
  console.log(HackiDetail);
  const editHackiDetail = new HackiDetailModel(HackiDetail);
  try {
    await HackiDetailModel.updateOne({ email: HackiDetail.email }, editHackiDetail);
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
