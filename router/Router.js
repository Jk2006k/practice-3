const router = require('express').Router()
const {createbooks,getBooks,getBooksById,updateBooks,DeleteBooks} = require('../controllers/bookController')

router.post('/', createbooks)
router.get('/', getBooks)
router.get('/:id', getBooksById)
router.put('/:id', updateBooks)
router.delete('/:id', DeleteBooks)

module.exports = router
