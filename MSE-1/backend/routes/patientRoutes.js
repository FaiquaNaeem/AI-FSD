const express = require('express')
const router = express.Router()
const {
createPatient,
getAllPatients,
getPatientById,
updatePatient,
deletePatient,
searchPatient
} = require('../controllers/patientController')
router.post('/',createPatient)

router.get('/',getAllPatients)

router.get('/search',searchPatient)

router.get('/:id',getPatientById)

router.put('/:id',updatePatient)

router.delete('/:id',deletePatient)
module.exports = router