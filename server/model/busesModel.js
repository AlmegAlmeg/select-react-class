const mongoose = require('mongoose')

const URL = "mongodb://localhost/transportation"
mongoose.connect(URL)
    .then(()=> console.log("Connected to db"))
    .catch(err => console.error(err))

const busSchema = {
    line: Number,
    company: String,
    category: String
}

const Bus = mongoose.model('buses', busSchema)

module.exports = Bus