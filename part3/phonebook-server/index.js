const express = require('express')
const app = express()

app.use(express.json())

let numbers = [
    {
        "id": "1",
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

// Utils

const generateId = () => {
    const maxId = numbers.length > 0
        ? Math.max(...numbers.map(n => Number(n.id)))
        : 0

    return String(maxId + 1)
}

// Routes

app.get('/', (request, response) => {
    response.send('<h1>Virtual Phonebook</h1>')
})

app.get('/api/numbers', (request, response) => {
    response.json(numbers)
})

app.get('/info', (request, response) => {
    const time = new Date()
    response.send(`<p>Phonebook has info for ${numbers.length} people</p>
                   <p>${time}</p>`)
})

app.get('/api/numbers/:id', (request, response) => {
    const id = request.params.id
    const number = numbers.find(n => n.id === id)

    if (!number) {
        return response.status(404).json({
            error: `Number with ID ${id} does not exist`
        })
    }

    response.json(number)
})

app.post('/api/numbers', (request, response) => {
    const body = request.body

    if (!body.number || !body.name) {
        return response.status(400).json({
            error: 'Phone Number or Name was not provided in the request'
        })
    } else if (numbers.find(n => n.name === body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const number = {
        name: body.name,
        number: body.number,
        id: generateId()
    }

    numbers = numbers.concat(number)

    response.json(number)
})

app.delete('/api/numbers/:id', (request, response) => {
    const id = request.params.id

    numbers = numbers.filter(n => n.id !== id)
    response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})