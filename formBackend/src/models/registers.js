const mongoose = require("mongoose");
const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
});

const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;
