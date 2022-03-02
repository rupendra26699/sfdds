
let express = require("express");
let router = express.Router();

let Project = require("../../dataModels/Project.js");



router.get('/get/all', async (req, res, next) => {
    console.log("in Project View List")
    let allProjects = await Project.findAll()
    res.json(allProjects)
})


module.exports = router;