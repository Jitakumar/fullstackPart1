import { useState } from 'react'

const DisplayStatistics = (props) => {
  const all = props.good+props.bad +props.neutral
  const avg = (props.good - props.bad) / all
  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <table><tbody>
        <StatisticLine text="good" value ={props.good} />
        <StatisticLine text="neutral" value ={props.neutral} />
        <StatisticLine text="bad" value ={props.bad} />
        <StatisticLine text="all" value ={all} />
        <StatisticLine text="average" value ={avg} />
        <StatisticLine text="positive" value ={((props.good*100)/all)+"%"} />
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <tr><td> {props.text}</td><td> {props.value}</td></tr>
  )
  
}

const Heading = (props) => {
  return(
    <h1>{props.heading}</h1>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    setGood(good+1)
  }

  const incrementNeutral = () => {
    setNeutral(neutral+1)
  }
  const incrementBad = () => {
    setBad(bad+1)
  }

  const heading = "give feedback"
  return (
    <div>
      <Heading heading = {heading} />
      <Button handleClick={incrementGood} text='good' />
      <Button handleClick={incrementNeutral} text='neutral' />
      <Button handleClick={incrementBad} text='bad' />
      <Heading heading = "statistics" />
      
      <DisplayStatistics good={good} neutral ={neutral} bad = {bad} />
    </div>
  )
}



export default App