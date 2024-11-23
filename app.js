const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hi");
})

app.use(express.json());

app.post('/test', (req, res) => {
    //body에서 온 데이터를 어떻게 전달받지?
    console.log(req.body);
    res.send("HELO POST");
});

app.listen(port);