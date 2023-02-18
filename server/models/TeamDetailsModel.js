const mongoose = require("mongoose");
const Joi = require("joi");

const Schema = mongoose.Schema;

const TeamDetailsSchema = new Schema({
  member1_name: { type: String, required: true },
  member1_skills: { type: String, required: true },
  member1_resume: { type: String, required: true },
  member2_name: { type: String, required: true },
  member2_skills: { type: String, required: true },
  member2_resume: { type: String, required: true },
  member3_name: { type: String },
  member3_skills: { type: String },
  member3_resume: { type: String },
  member4_name: { type: String },
  member4_skills: { type: String },
  member4_resume: { type: String },
});

const validateTeamDetail = (data) => {
  const schema = Joi.object({
    member1_name: Joi.string().required().label("Member1 Name"),
    member1_skills: Joi.string().required().label("Member1 Skills"),
    member1_resume: Joi.string().required().label("Member1 Resume"),
    member2_name: Joi.string().required().label("Member2 Name"),
    member2_skills: Joi.string().required().label("Member2 Skills"),
    member2_resume: Joi.string().required().label("Member2 Resume"),
    member3_name: Joi.string().label("Member3 Name"),
    member3_skills: Joi.string().label("Member3 Skills"),
    member3_resume: Joi.string().label("Member3 Resume"),
    member4_name: Joi.string().label("Member4 Name"),
    member4_skills: Joi.string().label("Member4 Skills"),
    member4_resume: Joi.string().label("Member4 Resume"),
  });
  return schema.validate(data);
};
const TeamDetailModel = mongoose.model("HackiDetail", TeamDetailsSchema);

module.exports = {
  validateTeamDetail,
  TeamDetailModel,
};
