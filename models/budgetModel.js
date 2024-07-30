const mongoose = require('mongoose')

const budgetSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    category: String,
    startDate: Date,
    endDate: Date,
})

module.exports = mongoose.model('Budget', budgetSchema)