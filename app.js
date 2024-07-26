const express = require('express')
const path = require('path')
const { StatusCodes } = require('http-status-codes')
const { getProduct } = require('./app/services/mongoose/product')
const app = express()
const v1 = '/api/v1'

const productRouter = require('./app/api/v1/product/router')

app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Welcome to api volkpedia',
	})
})

app.get('/product', async (req, res) => {
	const result = await getProduct(req)
	res.status(StatusCodes.OK).json(result)
})

// router.get('/product', index)

// app.use(`${v1}`, productRouter)

module.exports = app
