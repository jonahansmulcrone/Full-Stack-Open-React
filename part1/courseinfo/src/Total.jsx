const Total = (props) => {

    console.log(props.parts)
    const totalExercises = (parts) => {
        let sum = 0
        for (let k = 0; k < parts.length; k++) {
            sum += parts[k].exercises
        }
        return sum
    }

    const total = totalExercises(props.parts)

    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    )
}

export default Total