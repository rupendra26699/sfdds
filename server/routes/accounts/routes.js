
let express = require("express");
let router = express.Router();

let Accounts = require("../../dataModels/Accounts.js");



router.get('/get/all', async (req, res, next) => {
    console.log("in Account View List")
    let allAccounts = await Accounts.findAll()
    res.json(allAccounts)
})

router.post('/createAccount', async (req, res, next) => {
    console.log("in create account")
    let newAccount = Accounts.build(req.body);
    console.log(req.body)
    await newAccount.save();
    res.json(newAccount);
    console.log("new accoutn created")
    // res("Account created successfully")
})

module.exports = router;