const express = require("express");
const router = express.Router();

router.get("/list", (req, res) => {
    res.send({
        status: 200,
        info: "TEST"
    });
});

router.post("/login", (req, res) => {
    res.send({
        status: 200,
        msg: "Login Successful"
    });
});

module.exports = router;
