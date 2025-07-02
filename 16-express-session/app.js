// setting up express
const express = require("express");
const app = express();

// setting up express-session
const session = require("express-session");
app.use(session({ 
    secret: "Spider Wick", 
    resave: false,
    saveUninitialized: false,
}));

// setting up static files and urlencoded for POST request
app.use(express.static("./pages"));
app.use(express.urlencoded({extended: false}));

// dealing with login POST request
app.post("/api/login", (req, res) => {
    // if username and password are not correct, return error message
    if (req.body.username !== "admin" || req.body.password !== "000000") {
        return res.send({status: 1, msg: "Login failed"});
    }

    // only after adding express-session, we can use req.session
    req.session.userInfo = req.body; // record user login information
    req.session.isLogin = true; // record user login status

    // if username and password are correct, return success message
    res.send({status: 0, msg: "Login success"});
});

// dealing with username GET request
app.get("/api/username", (req, res) => {
    // if user is not login, return error message
    if (!req.session.isLogin) {
        return res.send({
            status: 1, 
            msg: "Failed"
        });
    }

    // if user is login, return success message and username
    res.send({
        status: 0, 
        msg: "Success", 
        username: req.session.userInfo.username
    });
});

// dealing with Logout POST request
app.post("/api/logout", (req, res) => {
    req.session.destroy(); // only clear current user session
    res.send({
        status: 0, 
        msg: "Logout success"
    });
});

// start server
const port = 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
