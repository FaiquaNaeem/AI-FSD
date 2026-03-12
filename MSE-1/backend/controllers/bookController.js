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



const Book = require('../models/book.js')

// Add new book
const createBook = async (req, res) => {
    try {

        const book = await Book.create(req.body)

        res.status(201).json(book)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }
}

// View all books
const getAllBooks = async (req, res) => {
    try {

        const books = await Book.find()

        res.status(200).json(books)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }
}

// Get book by ID
const getBookById = async (req, res) => {
    try {

        const book = await Book.findById(req.params.id)

        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }

        res.status(200).json(book)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }
}

// Update book details
const updateBook = async (req, res) => {
    try {

        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }

        res.status(200).json(book)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }
}

// Delete book record
const deleteBook = async (req, res) => {
    try {

        const book = await Book.findByIdAndDelete(req.params.id)

        if (!book) {
            return res.status(404).json({ message: "Book not found" })
        }

        res.status(200).json({ message: "Book deleted successfully" })

    } catch (error) {

        res.status(500).json({ message: error.message })

    }
}

// Search books by title or author
const searchBooks = async (req, res) => {
    try {

        const query = req.query.q

        const books = await Book.find({
            $or: [
                { title: { $regex: query, $options: 'i' } },
                { author: { $regex: query, $options: 'i' } }
            ]
        })

        res.status(200).json(books)

    } catch (error) {

        res.status(500).json({ message: error.message })

    }
}

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
    searchBooks
}