const express = require("express");
const createDB = require("./db/db-factory");
const config = require("./config");
const validator = require("./utils/validator");
const path = require("path");

const app = express();
const db = createDB(config.db_type);

app.get("/", (req, res) => {
    res.json({ "hello": 10 });
});

app.get("/api/tefila/:key", (req, res) => {
    const key = req.params.key;
    const isValid = validator.isHyphenatedText(key);
    if (isValid) {
        const tefila = db.getTefila(key);
        if (tefila) res.json(tefila);
        else res.sendStatus(404);
    } else {
        res.status(400).send("parameter is not valid");
    }
});

app.get("/api/section/:subsectionId", (req, res) => {
    const id = req.params.subsectionId;
    const isValid = validator.isInt(id);
    if (isValid) {
        const sub = db.getSection(Number(id));
        if (sub) res.json(sub);
        else res.sendStatus(404);
    } else {
        res.status(400).send("parameter is not valid");
    }
});

app.get("/api/tune/:id", (req, res) => {
    const id = req.params.id;
    const isValid = validator.isInt(id);
    if (isValid) {
        const sub = db.getTune(Number(id));
        if (sub) res.json(sub);
        else res.sendStatus(404);
    } else {
        res.status(400).send("parameter is not valid");
    }
});

app.get("/api/tunes/:subsectionId", (req, res) => {
    const id = req.params.subsectionId;
    const isValid = validator.isInt(id);
    if (isValid) {
        const sub = db.getTunes(Number(id));
        if (sub) res.json(sub);
        else res.sendStatus(404);
    } else {
        res.status(400).send("parameter is not valid");
    }
});

module.exports = app;
