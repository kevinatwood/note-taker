const express = require('express');
const notesRouter = require("./api/notes.js")
const app = express()
app.use('/notes', notesRouter);

module.exports = app;