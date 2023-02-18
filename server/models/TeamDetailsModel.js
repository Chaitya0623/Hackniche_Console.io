const mongoose = require("mongoose");
// const Joi = require("joi");

const Schema = mongoose.Schema;

const TeamDetailsSchema = new Schema({
    teamName:{type:String},
    name1:{type:String},
    resume1:{type:String},
    skills1:{type:String},
    glink1:{type:String},
    year1: {type:String},

    name2: {type:String},
    resume2:{type:String},
    skills2: {type:String},
    glink2: {type:String},
    year2: {type:String},

    name3: {type:String},
    resume3:{type:String},
    skills3:{type:String},
    glink3: {type:String},
    year3: {type:String},

    name4: {type:String},
    resume4: {type:String},
    skills4:{type:String},
    glink4: {type:String},
    year4: {type:String},
});

// const validateTeamDetail = (data) => {
//     const schema = Joi.object({
//         name1: Joi.string().label("Member1 Name"),
//         resume1: Joi.string().label("Member1 Resume"),
//         skills1: Joi.string().label("Member1 Skills"),
//         glink1: Joi.string().label("Member1 githubLink"),
//         year1: Joi.string().label("Member1 year"),

//         name2: Joi.string().label("Member2 Name"),
//         resume2: Joi.string().label("Member2 Resume"),
//         skills2: Joi.string().label("Member2 Skills"),
//         glink2: Joi.string().label("Member2 githubLink"),
//         year2: Joi.string().label("Member2 year"),

//         name3: Joi.string().label("Member3 Name"),
//         resume3: Joi.string().label("Member3 Resume"),
//         skills3: Joi.string().label("Member3 Skills"),
//         glink3: Joi.string().label("Member3 githubLink"),
//         year3: Joi.string().label("Member3 year"),

//         name4: Joi.string().label("Member4 Name"),
//         resume4: Joi.string().label("Member4 Resume"),
//         skills4: Joi.string().label("Member4 Skills"),
//         glink4: Joi.string().label("Member4 githubLink"),
//         year4: Joi.string().label("Member4 year"),
//     });
//     return schema.validate(data);
// };
const TeamDetailModel = mongoose.model("TeamDetail", TeamDetailsSchema);

module.exports = {
    // validateTeamDetail,
    TeamDetailModel,
};