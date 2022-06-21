const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const studentModel = require('./model/studentModel');
require('dotenv').config();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.DB_CONNECTION)



app.post("/init", ((req, res) => {
   const id = req.body.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const nationality = req.body.nationality;
    const newStudent = new studentModel({
        id,
        firstName,
        lastName,
        age,
        nationality
    });
    newStudent.save();
}))

app.get("/init", (req, res) => {
    studentModel.find({ })
    .then((data) =>{
        res.json(data)
    }).catch((err) => {
        console.log(err);
    })
})

app.listen(3001, () =>{
    console.log('Server is running on port 3001');
})