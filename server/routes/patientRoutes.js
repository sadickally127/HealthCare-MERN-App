// routes/patientRoutes.js
const express = require('express');
const router = express.Router();
const {
  createPatient,
  getPatients,
  getPatientById,
  updatePatient,
  deletePatient
} = require('../controllers/patientController');

router.post('/', createPatient);       // Create
router.get('/', getPatients);          // Read all
router.get('/:id', getPatientById);    // Read one
router.put('/:id', updatePatient);     // Update
router.delete('/:id', deletePatient);  // Delete

module.exports = router;
