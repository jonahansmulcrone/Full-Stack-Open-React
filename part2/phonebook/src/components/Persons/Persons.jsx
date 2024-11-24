const Persons = ({ persons, handleDelete }) => {

    return (
        <div>
            {persons.map(person =>
                <div key={person.name}>
                    {person.name} | {person.number}
                    <button onClick={() => handleDelete(person.id, person.name)}>Delete</button>
                </div>)}
        </div>
    )
}

export default Persons