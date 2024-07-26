const express = require('express')
const router = express()
const {
	index,
	find,
	create,
	deleteOne,
	update,
	deleteAll,
} = require('./controller')

router.get('/product', index)
router.get('/product/:id', find)
router.get('/cms/product', index)
router.get('/cms/product/:id', find)
router.post('/cms/product', create)
router.delete(
	'/cms/product',

	deleteAll
)
router.delete(
	'/cms/product/:id',

	deleteOne
)
router.put(
	'/cms/product/:id',

	update
)

module.exports = router
