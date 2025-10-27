const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter the patient name']
  },
  age: {
    type: Number,
    required: [true, 'Please enter the patient age']
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  phone: {
    type: String,
    required: [true, 'Please enter the patient phone number']
  },
  address: {
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
