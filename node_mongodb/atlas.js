const conn_str = "mongodb+srv://mern:mern@cluster0.dslyw.mongodb.net/zcompany?retryWrites=true&w=majority";
//please replace username password and database name
const express = require("express");
const app = express();
const mongoose = require("mongoose");

var cors = require('cors')
app.use(cors())

mongoose.connect(conn_str)
.then(() => console.log("Connected successfully..."))
.catch( (error) => console.log(error) );
app.use(express.json());


const empSchema = new mongoose.Schema({});
const emp = new mongoose.model("emps", empSchema);


app.get("/employee", async (req,res) => {
    // var data = [{name:"Anuj",salary: 25000},{ name: "samir", salary: 28000}]
    let data = await emp.find();
    res.send(data);
})

app.listen(3000, () => {
console.log("listening 3000...");
});