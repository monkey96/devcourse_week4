const express = require('express');
const app = express();

let youtuber1 = {
    title : "Sumin",
    sub : 15,
    videoNum : 4
}

let youtuber2 = {
    title : "Babett",
    sub: 6984,
    videoNum : 500
}

let youtuber3 = {
    title : "Cherry",
    sub: 45,
    videoNum: 123
}

app.get('/:nickname', function(req, res){

    const {nickname} = req.params;

    if (nickname == "Sumin") {
        res.json(youtuber1);
    }
    else if (nickname == "Babett") {
        res.json(youtuber2);
    }
    else if (nickname == "Cherry") {
        res.json(youtuber3);
    }
    else{
        res.json({
             message: "Who is this?"
        });
    }
});


app.listen(3000);