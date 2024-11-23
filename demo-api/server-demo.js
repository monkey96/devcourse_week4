const express = require('express');
const app = express();

// GET + "/"
app.get('/', function(req, res){
    res.send('Hello world');
});

app.get('/hello', function(req, res){
    res.json({
        say: "HELLO INDEED"
    });
});

app.get('/bye', function(req, res){
    res.json({
        say: "GOOD BYE THEN!"
    });
})

app.get('/nicetomeetyou', function(req, res){
    res.json({
        say: "WELL FEELINGS MUTUAL"
    });
});

app.get('/products/1', function(req, res){
    res.json({
        title: 'Node.js를 배워보자 (책)',
        price: 20000,
        description: 'its decent'
    });
});



app.listen(3000);