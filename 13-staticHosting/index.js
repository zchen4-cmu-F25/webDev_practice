const express = require("express");
const app = express();


app.use(express.static("./public"));

app.get("/banner", (req, res) => {
    res.send({
        status: 200,
        data: [
            {
                id: 1001,
                title: "Old Man",
                image: "http://localhost:3000/images/oldMan.jpeg",
            }, 
            {
                id: 1002,
                title: "Young Kid",
                image: "http://localhost:3000/images/youngKid.jpg",
            }
        ]
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
