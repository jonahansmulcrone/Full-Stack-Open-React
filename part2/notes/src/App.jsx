import { useState } from 'react'
import Note from "./Note"
import axios from 'axios'

const App = (props) => {

  const promise = axios.get('http://localhost:3001/notes')
  console.log(promise)

  const promise2 = axios.get('http://localhost:3001/foobar')
  console.log(promise2)

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note..')
  const [showAll, setShowAll] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      id: String(notes.length + 1),
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important': 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          value={newNote}
          onChange={handleNoteChange}
        />
        <button type='submit'>save</button>
      </form>
    </div>
  )
}

export default App