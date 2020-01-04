const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [];

let waitlist = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get('/tables/', (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get('/reserve/', (req, res) => {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get('/api/tables/', (req, res) => {
    res.json(tables);
});

app.get('/api/waitlist/', (req, res) => {
    res.json(waitlist);
});

app.get('/api/tables/:table', (req, res) => {

})

app.post('/api/', (req, res) => {
    if(tables.length < 5){
        tables.push(req.body);
        res.send('Successfully added to a table');
    }else{
        waitlist.push(req.body);
        res.send('Successfully added to waitlist');
    }
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});