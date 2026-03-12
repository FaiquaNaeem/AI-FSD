
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    publicationYear: {
        type: Number,
        required: true
    },
    totalCopies: {
        type: Number,
        required: true,
        min: 0
    },
    availableCopies: {
        type: Number,
        required: true,
        min: 0
    },
    shelfLocation: {
        type: String,
        required: true
    },
    bookType: {
        type: String,
        enum: ["Reference", "Circulating"],
        required: true
    },
    status: {
        type: String,
        enum: ["Available", "Checked Out"],
        default: "Available"
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book