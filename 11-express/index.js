const express = require("express");
const app = express();


// set up server access address
app.get("/list", (req, res) => {
    res.send({
        status: 200,
        results: [
            {
                id: 1,
                name: "Chen Zixuan",
                age: 20
            },
            {
                id: 2,
                name: "Zhang San",
                age: 30
            }
        ]
    });
}); 

// res.end("str") // exchange data

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
