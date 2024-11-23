//express module setting

const express = require("express")
const app = express();

app.listen(3000);

app.get('/', function (req, res){
    res.send('Hello World');
});

//data setting
let db = new Map();
let id = 1;

db.set(id++, {
    name: "Sumin", 
    sub: 100,
    videoNum: 5
});

db.set(id++, {
    name: "Babett", 
    sub: 420,
    videoNum: 23
});

db.set(id++, {
    name: "Louis", 
    sub: 1,
    videoNum: 1
});

// REST API
app.get('/youtubers/', (req, res) =>{
    res.json(db);
    console.log(db);
});

app.get('/youtubers/:n', function (req, res){
    const {n} = req.params;

    if (db.has(parseInt(n))) {
        res.json(db.get(parseInt(n)));
    }
    else {
        res.send("404");
    }

});

app.use(express.json());
app.post('/youtubers/', function (req, res) {
    console.log(req.body);
    db.set(id++, req.body);

    res.json({
        message: `${req.body.name}, welcome to youtube!`
    });
});