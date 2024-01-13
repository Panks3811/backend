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


const empSchema = new mongoose.Schema( {
    name: String,
    contact_number: Number,
    address: String,
    salary:Number,
    employee_id:Number,
    role: String
});
const emp = new mongoose.model("emps", empSchema);



app.get("/employee", async (req,res) => {
    // var data = [{name:"Anuj",salary: 25000},{ name: "samir", salary: 28000}]
    let data = await emp.find();
    res.send(data);
})

// fetch single document by id
// https://localhost:3000/employee/6587d784915fa799c44f25bf
app.get("/employee/:id", async (req,res) => {
    console.log(req.params)
    let data = await emp.find({_id: req.params['id']});
    res.send(data[0]);
})


// update the document by id
app.put("/employee", async ( req, res) => {

	let u_data = await emp.updateOne({"_id": req.body.id}, {
		"$set": {
			"name" : req.body.name,
			"salary" : req.body.salary
		}
	})
	res.send(u_data);
});



// to delete data from record
app.delete("/employee", async ( req, res) => {
   // http://localhost:3000/employee?id=6587c84459d87998369f190a
    let d_data = await emp.deleteOne({"_id": req.query['id']});
	res.send(d_data);
})


// to post data from record // to insert data
app.post("/employee", async ( req, res) => {

    // doc = {
    // "name": "pankaj new",
    // "contact_number": "7262933811",
    // "address": "mumbai",
    // "salary": 50000,
    // "employee_id": 98829,
    // "role": "operations"  };

    doc = req.body;
    let u = await emp(doc);
	let result = u.save();
	res.send(doc);
});





app.listen(3000, () => {
console.log("listening 3000...");
});