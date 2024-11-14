import { useState } from 'react'
import './App.css'

const StatisticsLine = (props) => {
  return (
    <>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Statistics = ({ good, bad, neutral }) => {

  const total = bad + good + neutral
  const positivePercentage = total > 0 ? (good * 1 + neutral + bad * -1) / total: 0
  const average = total > 0 ? (good / total) * 100 : 0

  if (total === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <tr>
              <StatisticsLine text='Good' value={good} />
            </tr>
            <tr>
              <StatisticsLine text='Neutral' value={neutral} />
            </tr>
            <tr>
              <StatisticsLine text='Bad' value={bad} />
            </tr>
            <tr>
              <StatisticsLine text='Total feedback' value={total} />
            </tr>
            <tr>
              <StatisticsLine text='Average' value={average.toFixed(2)} />
            </tr>
            <tr>
              <StatisticsLine text='Positive Percentage' value={positivePercentage.toFixed(2)} />
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={() => setGood(good + 1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </div>
  )
}

export default App
