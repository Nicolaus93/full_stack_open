import { useState } from 'react'


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
  )

const TableRow = ({ text, value }) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
  };

const StatTable = ({good, neutral, bad}) => {
    const all = good + neutral + bad;
    const avg = (good - bad) / all;
    const positive = good / all * 100;
    if (all > 0) {
        return (
          <div>
            <table>
                <tbody>
                    <TableRow text="good" value={good} />
                    <TableRow text="neutral" value={neutral} />
                    <TableRow text="bad" value={bad} />
                    <TableRow text="all" value={all} />
                    <TableRow text="average" value={avg} />
                    <TableRow text="positive" value={positive} />
                </tbody>
            </table>
          </div>
        )
      }
    
      return (
        <div>
          No feedback given
        </div>
      )
} 

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
        <h1>statistics</h1>
        {/* <Statistics good={good} neutral={neutral} bad={bad} /> */}
        <StatTable good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
