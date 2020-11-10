const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


router.post("/api/burgers", function (req, res) {
    burger.create([
        "name"
    ], [
        req.body.name
    ], function (result) {
        // Send back the ID of the new quote??
        res.json({ id: result.insertId });
    });
});






//add module at end.
module.exports = router;