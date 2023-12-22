var express = require("express");
var app = express();
var cors = require('cors')
app.use(cors())


//  addition of two number calc?num1=10&num2=6
app.get('/calc', (req,res) => {
    x = Number(req.query['num1'])
    y = Number(req.query['num2'])
    res.send(`${x} + ${y} = ${x + y}`)
})

// substraction of two numbers calc?num1=10&num2=6
app.post('/calc', (req,res) => {
    x = Number(req.query['num1'])
    y = Number(req.query['num2'])
    res.send(`${x} - ${y} = ${x - y}`)
})


app.use(express.json())
app.put('/calc', (req,res) => {
    x = Number(req.body['num1'])
    y = Number(req.body['num2'])
    res.send(`${x} * ${y} = ${x * y}`)
})


app.delete('/calc', (req,res) => {
    x = Number(req.body['num1'])
    y = Number(req.body['num2'])
    res.send(`${x} / ${y} = ${x / y}`)
})


app.get('/sqr/:num', (req,res) => {
    console.log(req.params)
    x = req.params['num']
    res.send({"result": x*x})
    // res.send(`Square of ${x} is ${x*x}`)
})

app.get('/cub/:num', (req,res) => {
    console.log(req.params)
    x = req.params['num']
    res.send(`Square of ${x} is ${x*x*x}`)
})

app.listen(8989, () => {
    console.log("Listening at port 8989");
  });