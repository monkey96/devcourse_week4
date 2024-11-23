const express = require('express');
const app = express();
app.listen(3000);

app.get('/:n', function(req, res) {
    const {n} = req.params;
    let number = parseInt(n);

    if (db.has(number)) {
        res.json({
            id : number,
            item: db.get(number),
        });
    }
    else {
        res.json({
            message: "CANNOT FIND THE PRODUCT"
        });
    }
});


let db = new Map();

let notebook = {
    productName : "Notebook",
    price : 2000000
}

let cup = {
    productName : "Cup",
    price : 3000
}

let chair = {
    productName : "Chair",
    price : 1000000
}

let poster = {
    productName : "Poster",
    price : 20000
}

db.set(1, notebook);
db.set(2, cup);
db.set(3, chair);
db.set(4, poster)

//console.log(db.get(1));