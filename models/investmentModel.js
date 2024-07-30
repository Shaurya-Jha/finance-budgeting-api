const {Schema, default: mongoose} = require('mongoose')

const investmentSchema = new Schema({
    type: String,
    amount: Number,
    date: Date,
})

module.exports = mongoose.model('Investment', investmentSchema)