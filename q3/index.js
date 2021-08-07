const express = require("express");
const path = require("path");
const app = express();

app.use("/css", express.static(path.join(__dirname, "css")));

app.get("/", (req, res) => {
  const date = new Date();
  const hour = date.getHours();

  let response =
    "<!DOCTYPE html>" +
    "<html>" +
    "<head>" +
    "<title>My App</title>" +
    `<link href="${
      hour >= 6 && hour <= 18 ? "/css/day.css" : "/css/night.css"
    }" rel="stylesheet">` +
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

app.listen(3000, () => console.log('Listining on port 3000...'));
