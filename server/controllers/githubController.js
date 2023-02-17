const axios = require('axios');
const express = require('express');
const { Octokit } = require('octokit');

const getNumberOfCommits = async (req, res) => {
    const octokit = new Octokit({
        auth: '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'
    });
    try {
        const response = await octokit.request(`GET /users/${req.params.username}/repos`);
        const repos = response.data;
        const repoNames = repos.map((repo) => repo.name);
        let count=0;
        let commits=[];
        repoNames.map((names)=>{
            const re=octokit.request(`GET /repos/${req.params.username}/${names}/commits`)
            .then((r)=>{count+=r.data.length
            return(count)})
            .then((c)=>console.log(Math.round(c/repoNames.length)));
        })

    } catch (error) {
        return console.error(error);
    }
};

module.exports = { getNumberOfCommits };
// Example usage
// getNumberOfCommits('octocat')
//   .then((count) => {
//     console.log(`Total number of commits for octocat: ${count}`);
//   })
//   .catch((error) => {
//     console.error(error);
//   });