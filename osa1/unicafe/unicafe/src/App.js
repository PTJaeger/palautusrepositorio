import { useState } from 'react'

const Button = ({handleClick, label}) => (
  <button onClick={handleClick}>{label}</button>
)

const Rounding = (num) => num.toFixed(5);

const Stats = ({good, neutral, bad}) => {
  const combined = good + neutral + bad;
  const avg =Rounding((good - bad) / combined);
  const pos =Rounding((good / combined) * 100);

  if (combined == 0) {
    return <p> No Feedback Given Yet </p>
  }

  return (
    <table>
      <tbody>
        <StatisticLine txval="Positive" val={good} />
        <StatisticLine txval="Neutral" val={neutral} />
        <StatisticLine txval="Negative" val={bad} />
        <StatisticLine txval="Combined" val={combined} />
        <StatisticLine txval="Average" val={avg} />
        <StatisticLine txval="Positive Percentage" val={pos + "%"} />
      </tbody>
    </table>
  );
}



const StatisticLine = ({txval, val}) => (
  <tr>
    <td>{txval}</td>
    <td>{val}</td>
  </tr>
)



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  


  return (
    <div>
      <h1>
      Give Feedback
      </h1> 
      <Button handleClick={() => setGood(good + 1)} label="Positive Feedback" />
      <Button handleClick={() => setNeutral(neutral + 1)} label="Neutral Feedback" />
      <Button handleClick={() => setBad(bad + 1)} label="Negative Feedback" />
      <h1>Statistical Info </h1>
      <Stats good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App