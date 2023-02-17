const express = require('express');
const { getNumberOfCommits } = require('../controllers/githubController');
// const { getAllAdminsController, addNewAdminController, getUserCount } = require('../controllers/adminController');
const router = express.Router();

router.get('/:username',getNumberOfCommits);

module.exports=router