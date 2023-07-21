const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./userRoutes");

const app = express();
const PORT = 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

//GET
// app.get("/", (req, res) => {
//   res.send("<h1>Hello World</h1>");
// });
// app.get("/about", (req, res) => {
//   res.send("about page");
// });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//PUT

// app.post("/api/v1/register", (req, res) => {
//   res.send(
//     `<h1>DONE Mr. ${req.body.name}</h1> <h2>Your Email is ${req.body.email}</h2> <h3>Your password is ${req.body.password}</h3>`
//   );
//   console.log(req.body);
// });

////////////////////////
// app.get("/api/v1/userdata", (req, res) => {
//   res.json({
//     name: "talha",
//     email: "abc@gmail.com",
//     password: "hacked",
//   });
// });

app.listen(PORT, () => {
  console.log(`Server is Working on port: ${PORT}`);
});

//C =>Create  POST
//R =>Raed    GET
//U =>Update  PUT
//D =>Delete  DELETE
