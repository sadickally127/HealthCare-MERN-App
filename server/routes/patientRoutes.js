const express = require('express');
const router = express.Router();
const {
  getPatients,
  addPatient,
  getPatientById,
  updatePatient,
  deletePatient
} = require('../controllers/patientController');

// Routes
router.get('/', getPatients);
router.post('/', addPatient);
router.get('/:id', getPatientById);
router.put('/:id', updatePatient);
router.delete('/:id', deletePatient);

module.exports = router;
