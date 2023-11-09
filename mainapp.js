const express = require("express");
const path = require("path");

const app = express();

app.get("/homepage", (req, res) => {
    res.send("Home Page");
});

app.listen(process.env.PORT || 3000, () => console.log("App is listening on port " + process.env.PORT));