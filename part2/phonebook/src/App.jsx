import { useState } from 'react'
import PersonsForm from './components/PersonForm/PersonsForm'
import Persons from './components/Persons/Persons'
import { useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then((res) => {
        setPersons(res.data)
      })
  }, [])

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
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App