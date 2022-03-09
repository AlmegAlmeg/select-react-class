const express = require('express')
const app = express()
const cors = require('cors')
const Bus = require('./model/busesModel')
require('./model/busesModel')

app.use(cors())

const PORT = 8000
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))

//? routes
app.get('/all-lines', async (req,res) => {
    try {
        const allLinesArr = await Bus.find()
        if(allLinesArr.length == 0) throw 'No lines found'
        res.json(allLinesArr)
    } catch (err) {
        res.json(err.message)        
    }
})

app.get('/category/:category', async (req,res) => {
    try {
        const { category } = req.params
        const linesByCategoryArr = await Bus.find({ category: category })
        if(linesByCategoryArr.length == 0) throw 'No lines found'
        res.json(linesByCategoryArr)
    } catch (err) {
        res.json(err.message)
    }
})

module.exports = app