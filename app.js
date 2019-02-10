const express = require('express')
const fs = require('fs')
const path = require('path')
const morgan = require('morgan')

const app = express()

const accessLogStream = fs.createWriteStream(
    path.join(`${__dirname}/logs`, 'access.log'), { flags: 'a' }
)

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))

app.listen(3000, () => console.log(`Server is running`))

module.exports = app