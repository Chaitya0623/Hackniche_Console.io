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
  max: { type: String, required: true },
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
    title: Joi.string().required().label("Title"),
    modeOfHacki: Joi.string().required().label("modeOfHacki"),
    organisation: Joi.string().required().label("organisation"),
    domain: Joi.string().required().label("domain"),
    regiStart: Joi.string().required().label("regiStart"),
    regiEnd: Joi.string().required().label("regiEnd"),
    hackiStart: Joi.string().required().label("hackiStart"),
    hackiEnd: Joi.string().required().label("hackiEnd"),
    preferredSkills: Joi.string().required().label("preferredSkills"),
    min: Joi.string().required().label("min"),
    max: Joi.string().required().label("max"),
    contactEmail: Joi.string().required().label("contactEmail"),
    discordLink: Joi.string().required().label("discordLink"),
    instaLink: Joi.string().required().label("instaLink"),
    linkedInLink: Joi.string().required().label("linkedInLink"),
    rules: Joi.string().required().label("rules"),
    price1: Joi.string().required().label("price1"),
    price2: Joi.string().required().label("price2"),
    price3: Joi.string().required().label("price3"),
  });
  return schema.validate(data);
};
const HackiDetailModel = mongoose.model("HackiDetail", HackiDetailsSchema);

module.exports = {
  HackiDetailModel,
  validateHackiDetail,
};
