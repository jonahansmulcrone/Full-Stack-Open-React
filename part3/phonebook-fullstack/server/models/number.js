const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI_PHONEBOOOK

console.log('connecting to MongoDB')

mongoose.connect(url)
    .then(res => {
        console.log('connected to MongoDB')
    })
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })

const numberSchema = new mongoose.Schema({
    name: String,
    number: String
})

numberSchema.set('toJson', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Number', numberSchema)