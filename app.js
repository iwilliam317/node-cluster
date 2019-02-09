const express = require('express')

const app = express()

const cluster = require('cluster')
const cpu = require('os').cpus()

app.listen(3000, () => console.log(`Server is running`))