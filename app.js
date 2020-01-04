const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

let tables = [
    {
        name: "Steven",
        phoneNumber: "800123987",
        email: "example@coolstuff.com",
        uniqueId: 'MrSteven'
    },
    {
        name: "Jim",
        phoneNumber: "987654321",
        email: "coolness@wtf.gov",
        uniqueId: "jimbobwhatever"
    },
    {
        name: "Marvin",
        phoneNumber: "456789321",
        email: "whatever@anything.org",
        uniqueId: "letsmarvingayandgetiton"
    }
];

let waitlist = [
    {
        name: "Bill",
        phoneNumber: "98435168",
        email: "bill@microsoft.com",
        uniqueId: "imrich"
    },
    {
        name: "Teddy",
        phoneNumber: "984681681",
        email: "dev@thisjobsux.com",
        uniqueId: "doitforthemoney"
    }
];

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

app.put('/api/tables/:uniqueId', (req, res) => {
    for(let i = 0; i<tables.length; i++){
        if(tables[i].uniqueId === req.params.uniqueId){
            tables.splice(i, 1);
        }
    }
    tables.push(waitlist[0]);
    waitlist.shift();
    res.json([tables, waitlist]);
});

app.post('/api/', (req, res) => {
    if(tables.length < 5){
        tables.push(req.body);
        console.log('Successfully added to a table');
    }else{
        waitlist.push(req.body);
        console.log('Successfully added to waitlist');
    }
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});