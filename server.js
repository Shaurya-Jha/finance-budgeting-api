const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')

// routes imported
const budgetRoutes = require('./routes/budgetRoute')
const expenseRoutes = require('./routes/expenseRoute')

// check if dotenv is working properly or not
console.log(process.env.PORT)

const app = express()
const PORT = process.env.PORT || 5000

// cors for the cross resource origin policy
app.use(cors())
// for parsing the data in json format
// as of new update of express we dont need body-parser
app.use(express.json())

// function to connect to the database
function connectToDB() {
    try {
        mongoose.connect(process.env.MONGO_DB_URI)

        mongoose.connection.on('connected', () => {
            console.log('connected to the database')
        })
    } catch (error) {
        mongoose.connection.on('error', (err) => {
            console.log(`Error connecting to the database: \n ${err}`)
        })
        console.log(`error in try catch block: ${error}`)
    }
}

// define routes
// routes for budget
app.use('/api/budgets', budgetRoutes)
app.use('/api/expenses', expenseRoutes)

// instance of server
app.listen(PORT, () => {
    try {
        connectToDB()
        console.log("server running on port: localhost:5000")
    } catch (error) {
        console.log(`error in creating the server: \n${error}`)
    }
    
})