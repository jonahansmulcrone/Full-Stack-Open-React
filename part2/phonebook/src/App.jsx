import { useState } from 'react'
import PersonsForm from './components/PersonForm/PersonsForm'
import Persons from './components/Persons/Persons'
import { useEffect } from 'react'
import phoneService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    phoneService.getAllPersons()
      .then((allPersons) => {
        setPersons(allPersons)
      })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()

    const findDuplicateEntry = () => {
      if (persons.length > 0) {
        for (var k = 0; k < persons.length; k++) {
          if (persons[k].name === newName) {
            return [true, persons[k].id]
          } else {
            return [false, null]
          }
        }
      } 
      else {
        return [false, null]
      }
    }

    const [isDuplicate, duplicateId] = findDuplicateEntry()
    const newPerson = { name: newName, number: newNumber }

    if (isDuplicate) {
      if (window.confirm(`${newName} is already in the phonebook, replace the old number with a new one?`)) {
        phoneService.updatePerson(newPerson, duplicateId).then((updatedPerson) => {
          const updatedPersonsList = persons.filter((n) => n.name !== updatedPerson.name)

          setPersons(updatedPersonsList.concat(updatedPerson))
          setNewName('')
          setNewNumber('')
        })
      }
    } else {
      phoneService.addPerson(newPerson).then((person) => {
        setPersons([...persons, person])
      })
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

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to remove ${name} from the phonebook?`)) {
      phoneService.deletePerson(id).then(() => {
        setPersons(persons.filter((n) => n.id !== id))
      })
    }
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
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App