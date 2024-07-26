const express = require('express')
const path = require('path')
const connectDB = require('./app/db/index')

const app = express()
const v1 = '/api/v1'

connectDB()

const productRouter = require('./app/api/v1/product/router')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Welcome to api volkpedia',
	})
})

app.use(`${v1}`, productRouter)

module.exports = app
