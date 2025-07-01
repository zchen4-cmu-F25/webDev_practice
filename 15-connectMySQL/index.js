const mysql = require("mysql");

// connect localhost mysql database
const db = mysql.createPool({
  host: "localhost", // 127.0.0.1
  user: "root", // your mysql username
  password: "Dg1280naux", // your mysql password
  database: "test_db" // your mysql database name
});

// // test connection
// db.query("SELECT 1", (err, results, fields) => {
//   if (err) return console.log(err.message);
//   console.log(results);
// });

// // SELECT will return a list[]
// db.query("SELECT * FROM users", (err, results, fields) => {
//   if (err) return console.log(err.message);
//   console.log(results);
// });

// // INSERT INTO Spider-Man with password pcc321
// // if run INSERT INTO query, results will be an object
// // can use results.affectedRows === 1 to check whether query is successful
// const spiderMan = {username: "Spider-Man", password: "pcc321"};
// const sqlStr = "INSERT INTO users (username, password) VALUES (?, ?)";
// db.query(sqlStr, [spiderMan.username, spiderMan.password], (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log("Inserted Spider-Man");
//   }
// );

// // simpler INSERT INTO for complex objects
// const batMan = {username: "Bat-Man", password: "pcc4321"};
// const sqlStr = "INSERT INTO users SET ?";
// db.query(sqlStr, batMan, (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log("Inserted Bat-Man");
// });

// // UPDATE a data object
// // if run UPDATE query, results will be an object
// // can use results.affectedRows === 1 to check whether update is successful
// const update = {id: 6, username: "Iron-Man", password: "000"};
// const sqlStr = "UPDATE users SET username=?, password=? WHERE id=?";
// db.query(sqlStr, [update.username, update.password, update.id], (err, results) => {
//   if (err) return console.log(err.message);
//   if (results.affectedRows === 1) console.log("Updated Iron-Man");
// });

// // simpler UPDATE
// const update = {id: 6, username: "Tony Stark", password: "0000"};
// const sqlStr = "UPDATE users SET ? WHERE id=?";
// db.query(sqlStr, [update, update.id], (err, results) => {
//   if (err) return console.log(err.message);
//   if (results.affectedRows === 1) console.log("Updated Tony Stark");
// });

// // DELETE a data object
// const sqlStr = "DELETE FROM users WHERE id=?";
// db.query(sqlStr, 6, (err, results) => {
//   if (err) return console.log(err.message);
//   if (results.affectedRows === 1) console.log("Deleted Tony Stark");
// });

// // tag delete / safe delete
// const sqlStr = "UPDATE users SET status=? WHERE id=?";
// db.query(sqlStr, [1, 5], (err, results) => {
//   if (err) return console.log(err.message);
//   if (results.affectedRows === 1) console.log("Spider-Man is tag-deleted");
// });
