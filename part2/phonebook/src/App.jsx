import { useState } from 'react'
import PersonsForm from './components/PersonForm/PersonsForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const findDuplicateEntry = () => {
      for (var k = 0; k < persons.length; k++) {
        if (persons[k].name === newName) {
          return true
        }
      }
    }

    const duplicate = findDuplicateEntry()
    console.log(duplicate);

    if (duplicate) {
      alert(`${newName} is already in the phonebook.`)
    } else {
      setPersons([...persons, { name: newName, number: newNumber, id: persons.length + 1 }])
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNewNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  const personsToShow = persons.filter((person) => person.name.toLowerCase().includes(filterName.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter by Name: <input onChange={handleFilterChange} value={filterName} />
      </div>
      <h2>Add New Person</h2>
      <PersonsForm
        newName={newName}
        newNumber={newNumber}
        handleSubmit={handleSubmit}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
      />
      <h2>Numbers</h2>
      {personsToShow.map(person => <div key={person.name}> {person.name} | {person.number}</div>)}
    </div>
  )
}

export default App