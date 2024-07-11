const express = require("express");
let app = express();
let http = require('http');
const cors = require("cors");
app.use(cors());
app.use(express.static('public'));

const frontend_questions = require("./questions_frontend.json");
const backend_questions = require("./questions_backend.json");

app.get("/", (req, res) => {
    res.sendFile("views/index.html", {root: __dirname });
})

app.get("/frontendquestions", (req, res) => {
    res.json(frontend_questions);
})

app.get("/frontendquestions/random", (req, res) => {
    let question = frontend_questions[Math.floor(Math.random()*frontend_questions.length)]

    res.json(question);
})

app.get("/backendquestions", (req, res) => {
    res.json(backend_questions);
})

app.get("/backendquestions/random", (req, res) => {
    let question = backend_questions[Math.floor(Math.random()*backend_questions.length)]

    res.json(question);
})


app.listen(3000, () => {
    console.log("Server running on port 3000")
})

module.exports = app;
