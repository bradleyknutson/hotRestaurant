const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let tables = [
    {
        name: 'Nicholas',
        phoneNumber: '8675309',
        email: 'example@example.com',
        uniqueId: 'beigerage'
    }
];

let waitlist = [
    {
        name: 'Lucas',
        phoneNumber: '6666666',
        email: 'hitler@satan.com',
        uniqueId: 'wtfdude'
    }
];

app.get('/', (req, res) => {
    res.send('This is working');
});

app.get('/api/tables/', (req, res) => {
    res.send(tables);
});

app.get('/api/waitlist', (req, res) => {
    res.send(waitlist);
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});