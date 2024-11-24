const Note = ({ note, toggleImportance }) => {
    const label = note.important ? 'Make not Important' : 'Make Important'

    return (
        <li>
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>
    )
}

export default Note