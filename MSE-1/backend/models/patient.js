const mongoose = require('mongoose')
const patientSchema =new mongoose.Schema({
    fullName:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        min:1
    },
    gender:{
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    disease:{
        type: String,
        required:true
    },
    doctorAssigned:{
        type: String,
        required:true
    },
    admissionDate:{
        type: Date,
        default: Date.now
    },
    roomNumber:{
        type: String,
    },
    patientType:{
        type: String,
        enum:["Inpatient","Outpatient"]
    },
    status:{
        type: String,
        enum: ['Admitted', 'Discharged'],
        default: 'Admitted'
    }
})
const Patient = mongoose.model('Patient',patientSchema)
module.exports = Patient