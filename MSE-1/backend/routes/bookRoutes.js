

const express = require('express')
const router = express.Router()

const {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
    searchBooks
} = require('../controllers/bookController')

// Add a new book
router.post('/books', createBook)

// Get all books
router.get('/books', getAllBooks)

// Search book by title
router.get('/books/search', searchBooks)

// Get book by ID
router.get('/books/:id', getBookById)

// Update book details
router.put('/books/:id', updateBook)

// Delete book record
router.delete('/books/:id', deleteBook)

module.exports = router