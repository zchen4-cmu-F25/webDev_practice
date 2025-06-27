const express = require("express");
const app = express();
const url = require("url");
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true })); // accpet POST params
app.use(express.urlencoded({ extended: true })); // express new version, no body-parser needed


// accpet GET param user
app.get("/list", (req, res) => {
    const user = url.parse(req.url, true).query.user;
    // console.log(user);
    if (user === "john") {
        res.send({
            msg: "Hello, " + user
        });
    } else {
        res.send({
            msg: "TEST"
        });
    }
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // console.log(username, password);
    if (username === "John Wick" && password === "123456") {
        res.send({
            msg: "Login Success!"
        });
    } else {
        res.send({
            msg: "Login Failed!"
        });
    }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
