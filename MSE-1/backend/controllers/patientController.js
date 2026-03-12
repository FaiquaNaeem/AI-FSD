const Patient = require('../models/patient.js')
const createPatient = async (req, res) => {
    try {

        const patient = await Patient.create(req.body)

        res.status(201).json(patient)

    } catch (error) {

        res.status(500).json({message: error.message})

    }
}
const getAllPatients = async (req, res) => {
    try {

        const patients = await Patient.find()

        res.status(200).json(patients)

    } catch (error) {

        res.status(500).json({message: error.message})

    }
}
const getPatientById = async (req, res) => {
    try {

        const patient = await Patient.findById(req.params.id)

        if(!patient){
            return res.status(404).json({message:"Patient not found"})
        }

        res.status(200).json(patient)

    } catch (error) {

        res.status(500).json({message:error.message})

    }
}
const updatePatient = async (req, res) => {
    try {

        const patient = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )

        if(!patient){
            return res.status(404).json({message:"Patient not found"})
        }

        res.status(200).json(patient)

    } catch (error) {

        res.status(500).json({message:error.message})

    }
}
const deletePatient = async (req, res) => {
    try {

        const patient = await Patient.findByIdAndDelete(req.params.id)

        if(!patient){
            return res.status(404).json({message:"Patient not found"})
        }

        res.status(200).json({message:"Patient deleted successfully"})

    } catch (error) {

        res.status(500).json({message:error.message})

    }
}
const searchPatient = async (req,res)=>{
    try{

        const name = req.query.name

        const patients = await Patient.find({
            fullName: {$regex:name,$options:'i'}
        })

        res.status(200).json(patients)

    }catch(error){

        res.status(500).json({message:error.message})

    }
}
module.exports = {
    createPatient,
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient,
    searchPatient
}