const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('enter password as an argument')
}

const password = process.argv[2]

const url = `mongodb+srv://jonahmulcrone:${password}@fscluster.l6x8m.mongodb.net/phoneApp
retryWrites=true&w=majority&appName=FSCluster`

mongoose.connect(url)

const numberSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Number = mongoose.model('Number', numberSchema)

if (process.argv.length == 5) {

    const name = process.argv[3]
    const number = process.argv[4]

    const newNumber = new Number({
        name: name,
        number: number
    })

    newNumber.save().then(res => {
        console.log(`${newNumber.name} has been added to the phonebook!`)
        mongoose.connection.close()
    })
}

else if (process.argv.length == 3) {
    Number.find({ }).then(res => {
        res.forEach(number => {
            console.log(number)
        })
        mongoose.connection.close()
    })
}
