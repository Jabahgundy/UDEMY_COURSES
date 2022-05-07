"use strick";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//Get request to root URL // (/)
app.get("/", (request, response) => {
  response.json({ Welcome: "How to create API with Node.js, Express and " });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
