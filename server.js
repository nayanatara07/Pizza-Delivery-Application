const express = require("express");
const Pizza = require('./models/pizzaModel');
const db = require("./db")
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server working on port " + port);
});

app.get("/getpizzas", async (req, res) => {
    try {
        const docs = await Pizza.find({});
        console.log(docs);
        res.send(docs);
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server running on port', port));
