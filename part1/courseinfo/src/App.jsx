import Header from "./Header"
import Content from "./Content"
import Total from "./Total"
import { useState } from "react"

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const [seconds, setSeconds] = useState(0)

  setTimeout(() => setSeconds(seconds + 1), 1000)

  return (
    <div>
      {seconds}
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App