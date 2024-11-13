import { useState } from 'react'
import './App.css'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
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
      <History allClicks={allClicks} />
    </div>
  )
}

export default App

// Important note: do not mutate state directly. In this case we use concat to copy the previous state content into a new array and merging it with a new element.