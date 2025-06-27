var fs = require("fs");

// var myReadStream = fs.createReadStream(__dirname + "/readMe.md"); // can set encoding to utf8 here
// myReadStream.setEncoding("utf8");

// var data = "";

// myReadStream.on("data", function(chunk) {
//     data += chunk;
// });

// myReadStream.on("end", function() {
//     console.log(data);
// });

// var myReadStream = fs.createReadStream(__dirname + "/readMe.md", { encoding: "utf8" });
// var myWriteSream = fs.createWriteStream(__dirname + "/writeMe.md");

// var data = "";
// myReadStream.on("data", function(chunk) {
//     myWriteSream.write(chunk);
// });

// myReadStream.on("end", function() {
//     console.log("written to writeMe.md");
// });

// var myWriteSream = fs.createWriteStream(__dirname + "/writeMe.md");

// var myData = "Hello, Node.js";
// myWriteSream.write(myData);
// myWriteSream.end();
// myWriteSream.on("finish", function() {
//     console.log("written to writeMe.md");
// });

// var myReadStream = fs.createReadStream(__dirname + "/readMe.md", { encoding: "utf8" });
// var myWriteSream = fs.createWriteStream(__dirname + "/writeMe.md");

// myReadStream.pipe(myWriteSream);
// myReadStream.on("end", function() {
//     console.log("written to writeMe.md");
// });

var fs = require("fs");
var zlib = require("zlib");

// // 创建读取流来读取待压缩的文件
// var readStream = fs.createReadStream(__dirname + "/readMe.md");

// // 创建写入流来写入压缩后的文件
// var writeStream = fs.createWriteStream(__dirname + "/readMe.gz");

// // 创建 gzip 压缩流
// var gzip = zlib.createGzip();

// // 设置管道，从读取流读取数据，通过 gzip 压缩流，然后写入写入流
// readStream
//     .pipe(gzip)
//     .pipe(writeStream)
//     .on("finish", function() {
//         console.log("Compression complete.");
//     })
//     .on("error", function(err) {
//         console.error("Error during compression:", err);
//     });


// 解压缩示例
// 创建读取流来读取压缩后的文件
var readCompressedStream = fs.createReadStream(__dirname + "/readMe.gz");

// 创建写入流来写入解压缩后的文件
var writeDecompressedStream = fs.createWriteStream(__dirname + "/decompressedReadMe.md");

// 创建 gunzip 解压缩流
var gunzip = zlib.createGunzip();

// 设置管道，从读取流读取数据，通过 gunzip 解压缩流，然后写入写入流
readCompressedStream
    .pipe(gunzip)
    .pipe(writeDecompressedStream)
    .on("finish", function() {
        console.log("Decompression complete.");
    })
    .on("error", function(err) {
        console.error("Error during decompression:", err);
    });