const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as an argument')
}

const password = process.argv[2]

const url = 
`mongodb+srv://jonahmulcrone:${password}@fscluster.l6x8m.mongodb.net/noteApp
retryWrites=true&w=majority&appName=FSCluster`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
})

// Model is a constructor compiled from Schema definitions. An instance of a model is called
// a document. 
const Note = mongoose.model('Note', noteSchema)

// Objects or "documents" are created with the model's contructor
const note = new Note({
    content: 'I Love ReactJS',
    important: true,
})

// The model gives the object methods for saving the document to a collection.
note.save().then(res => {
    console.log('Note saved!')
    // Closing the connection is very important! Otherwise, the program will never stop executing.
    mongoose.connection.close()
})

Note.find({ }).then(res => {
    res.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})