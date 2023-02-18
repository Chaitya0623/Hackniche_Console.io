const mongoose = require("mongoose");
// const Joi = require("joi");
const Schema = mongoose.Schema;

const HackiDetailsSchema = new Schema({
  logo: { type: String },
  title: { type: String },
  modeOfHacki: {
    type: String,
  },
  organisation: {
    type: String,
  },
  domain: {
    type: String,
  },
  regiStart: { type: String },
  regiEnd: { type: String },
  hackiStart: { type: String },
  hackiEnd: { type: String,},
  preferredSkills: { type: Array },
  min: { type: String },
  max: { type: String },
  contactEmail: { type: String },
  discordLink: { type: String },
  instaLink: { type: String },
  linkedInLink: { type: String },
});

// const validateHackiDetail = (data) => {
//   const schema = Joi.object({
//     logo: Joi.string().required().label("Hacakthon Logo"),
//   });
//   return schema.validate(data);
// };
const HackiDetailModel = mongoose.model("HackiDetail", HackiDetailsSchema);

module.exports = {
  HackiDetailModel,
  // validateHackiDetail,
};