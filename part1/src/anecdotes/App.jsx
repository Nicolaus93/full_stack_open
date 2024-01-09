import { useState } from 'react'

const DisplayMostVoted = ({mostVotedAnecdote, maxVotes}) => {
  console.log(maxVotes)
  if (maxVotes === 0) {
    return (
      <div>
        No votes yet!
      </div>
    )
  }

  console.log(mostVotedAnecdote)
  return (
    <div>
      <p>{mostVotedAnecdote}</p>
      <p>has {maxVotes} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [mostVoted, setMostVoted] = useState(0);

  const pickRandomElementFromArray = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  }
  
  const increaseVote = () => {
    const copy = [...votes];
    // increment the value in position "selected" by one
    copy[selected] += 1;  
    console.log(copy);
    const indexOfMaxValue = copy.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    setMostVoted(indexOfMaxValue);
    setVotes(copy);
  }
  
  return (
    <div>
      <h1>{"Anecdote of the day"}</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={pickRandomElementFromArray}>
        {"next anecdote"}
      </button>
      <button onClick={increaseVote}>
        {"vote"}
      </button>
      <h1>{"Anecdote with most votes"}</h1>
      <DisplayMostVoted mostVotedAnecdote={anecdotes[mostVoted]} maxVotes={votes[mostVoted]}/>
    </div>
  )
}

export default App
