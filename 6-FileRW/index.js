var fs = require("fs");

// var readMe = fs.readFileSync("./readme.md", "utf8");

// console.log(readMe);

// // fs. writeFileSync("./writeMe.txt", readMe);

// console.log("done");

var readMe = fs.readFile("./readme.md", "utf8", function(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  fs.writeFile("./writeMe.txt", data, function(err) {
    if (err) {
      console.log(err);
      return;
    }
    console.log("done");
  });
});

// var waitTill = new Date(new Date().getTime() + 4 * 1000);
// while (waitTill > new Date()) {}

// console.log("done");

