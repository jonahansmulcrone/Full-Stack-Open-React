const Total = ({ parts }) => {
    console.log(parts, );

    const total = parts.reduce((total, part) => {
        return total + part.exercises
    }, 0)

    return (
        <div>
            <p style={{fontWeight: 'bold'}}>Total of {total} exercises</p>
        </div>
    )
}

export default Total