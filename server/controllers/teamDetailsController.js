const {
    TeamDetailsModel,
    // validateClientProfile,
  } = require("../models/TeamDetailsModel");
  
  const addTeamDetail = async (request, response) => {
    console.log("TeamDetailcontroller => addTeamDetail");
    console.log(request.body);
    console.log(request.file);
    const image = request.file ? request.file.filename : null;
    console.log("Image declare krne ke baad", image);
  
    const {
        teamName,
        name1,
        skills1,
        glink1,
        year1,
    
        name2,
        skills2,
        glink2,
        year2,
    
        name3,
        skills3,
        glink3,
        year3,
    
        name4,
        skills4,
        glink4,
        year4,
    } = request.body;
  
    const teamDetail = {
        teamName,
        name1,
        resume1,
        skills1,
        glink1,
        year1,
    
        name2,
        resume2,
        skills2,
        glink2,
        year2,
    
        name3,
        resume3,
        skills3,
        glink3,
        year3,
    
        name4,
        resume4,
        skills4,
        glink4,
        year4,
    };
    // const { error } = validateClientProfile(clientProfile);
    // if (error) {
    //   console.log(error.details[0].message);
    //   return response.status(400).send({ message: error.details[0].message });
    // }
  
    const newTeamDetail = new TeamDetailsModel({
        teamName,
        name1,
        resume1,
        skills1,
        glink1,
        year1,
    
        name2,
        resume2,
        skills2,
        glink2,
        year2,
    
        name3,
        resume3,
        skills3,
        glink3,
        year3,
    
        name4,
        resume4,
        skills4,
        glink4,
        year4,
    });
    try {
      console.log("try");
      await newTeamDetail.save();
      response.status(201).json(newTeamDetail);
      console.log("HackiDetail created successfully");
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  };
  
  const getTeamDetails = async (request, response) => {
    try {
      const teamDetails = await TeamDetailModel.find({});
      response.status(200).json(teamDetails);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };
  
  const getTeamDetail = async (request, response) => {
    try {
      // console.log(request.params.email);
      const teamDetail = await TeamDetailModel.findOne({
        email: request.params.email,
      });
      // const user = await User.findById(request.params.id);
      response.status(200).json(teamDetail);
      // console.log(user);
    } catch (error) {
      response.status(404).json({ message: error.message });
    }
  };
  
  const editTeamDetail = async (request, response) => {
    const teamDetail = request.body;
    console.log(teamDetail);
    const editTeamDetail = new TeamDetailModel(teamDetail);
    try {
      await User.updateOne({ email: teamDetail.email }, editTeamDetail);
      response.status(201).json(editTeamDetail);
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  };
  
  const deleteTeamDetail = async (request, response) => {
    try {
      await TeamDetailModel.deleteOne({ _id: request.params.id });
      response.status(201).json(editTeamDetail);
    } catch (error) {
      response.status(409).json({ message: error.message });
    }
  };
  
  module.exports = {
    addTeamDetail,
    getTeamDetails,
    getTeamDetail,
    editTeamDetail,
    deleteTeamDetail,
  };