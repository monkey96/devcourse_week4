const express = require('express');
const app = express();

// GET + "/"
app.get('/', function(req, res){
    res.send('Hello world');
});

// app.get('/hello', function(req, res){
//     res.json({
//         say: "HELLO INDEED"
//     });
// });

// app.get('/bye', function(req, res){
//     res.json({
//         say: "GOOD BYE THEN!"
//     });
// })

// app.get('/nicetomeetyou', function(req, res){
//     res.json({
//         say: "WELL FEELINGS MUTUAL"
//     });
// });

app.get('/products/:n', function(req, res){
    // : => URL로 매개변수가 전달해주는건가?
    // req.params 에 넣어버려야지
    //products /__ 빈칸에 오는 값을 n이라는 변수에 담아줘
    
    let number = parseInt(req.params.n);
    res.json({
        num: number
    }); 
});

// app.get('/:nickname', function(req, res){

//     const param = req.params;

//     res.json({
//         channel : param.nickname
//     })
// });

app.get('/watch', function(req, res){
    const {v, t} = req.query;
    console.log(v);
    console.log(t);

    res.json({
        video : v,
        timeline : t,
    });
});



app.listen(3000);