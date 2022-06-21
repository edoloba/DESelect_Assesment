const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema(
    {
      id: {
        type: Number,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
        minLength: [2, "Name is too short"],
        maxLength: [50, "Name is too long"],
      },
      lastName: {
        type: String,
        required: true,
        minLength: [2, "Surname is too short"],
        maxLength: [50, "Surname is too long"],
      },
      age: {
        type: Number,
        required: true,
      },
      nationality: {
        type: String,
        required: true,
      },
    },
    { collection: "students" }
  );
  
  const studentModel = mongoose.model('students', studentSchema);

  module.exports = studentModel;