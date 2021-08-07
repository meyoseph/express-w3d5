const express = require("express");
const app = express();
app.use("/result", express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  let response =
    "<!DOCTYPE html>" +
    "<html>" +
    "<head>" +
    "<title>My App</title>" +
    "</head>" +
    "<body>" +
    "<form action='/result' method='POST'>" +
    "<label>Name <input type='text' name='name'></label>" +
    "<label>Age <input type='text' name='age'></label>" +
    "<input type='submit' value='submit query'></label>" +
    "</form>" +
    "</body>" +
    "</html>";
  res.send(response);
});
app.post("/result", (req, res) => {
  let name = req.body.name;
  let age = req.body.age;
  if (!name) {
    name = "person";
  }
  if (!age) {
    age = "unknown";
  }
  res.send(`Welcome ${name} with age ${age}`);
});
app.listen(3000, () => console.log('Listining on port 3000...'));
