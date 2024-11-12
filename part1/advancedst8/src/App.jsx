import { useState } from 'react'
import './App.css'

function App() {
  const [allClicks, setAllClicks] = useState([])
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setClicks({...clicks, left: clicks.left + 1})
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setClicks({...clicks, right: clicks.right + 1})
  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      {clicks.right}
      <button onClick={handleRightClick}>right</button>
      <p>{allClicks.join(', ')}</p>
    </div>
  )
}

export default App

// Important note: do not mutate state directly. In this case we use concat to copy the previous state content into a new array and merging it with a new element.