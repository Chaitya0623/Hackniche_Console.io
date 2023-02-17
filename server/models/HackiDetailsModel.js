const mongoose = require("mongoose");
const Joi = require("joi");

const Schema = mongoose.Schema;

const HackiDetailsSchema = new Schema({
  logo: { type: String, required: true },
  title: { type: String, required: true },
  modeOfHacki: {
    type: String,
    required: true,
  },
  organisation: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    require: true,
  },
  regiStart: { type: String, required: true },
  regiEnd: { type: String, required: true },
  hackiStart: { type: String, required: true },
  hackiEnd: { type: String, required: true },
  preferredSkills: { type: Array, required: true },
  min: { type: String, required: true },
  hackiEnd: { type: String, required: true },
  contactEmail: { type: String, required: true },
  discordLink: { type: String, required: true },
  instaLink: { type: String, required: true },
  linkedInLink: { type: String, required: true },
  rules: { type: Array, required: true },
  price1: { type: String, required: true },
  price2: { type: String, required: true },
  price3: { type: String, required: true },
});

const validateHackiDetail = (data) => {
  const schema = Joi.object({
    logo: Joi.string().required().label("Hacakthon Logo"),
  });
  return schema.validate(data);
};
const HackiDetailModel = mongoose.model("HackiDetail", HackiDetailsSchema);

module.exports = {
  HackiDetailModel,
  validateHackiDetail,
};
