import { useState } from "react";

const Statisctics = (props) => {
  const positive = (props.good / props.total) * 100;
  const average = (props.good - props.bad) / props.total;
  if (props.total === 0)
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );

  return (
    <div>
      <StatisticLine text={"good"} value={props.good} />
      <StatisticLine text={"neutral"} value={props.neutral} />
      <StatisticLine text={"bad"} value={props.bad} />
      <StatisticLine text={"total"} value={props.total} />
      <StatisticLine text={"average"} value={average} />
      <StatisticLine text={"positive"} value={positive + "%"} />
    </div>
  );
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setTotal(total + 1);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setTotal(total + 1);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setTotal(total + 1);
  };

  return (
    <div>
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleGoodClick} text="good" />
        <Button handleClick={handleNeutralClick} text="neutral" />
        <Button handleClick={handleBadClick} text="bad" />
        <h1>Statisctics</h1>
        <Statisctics total={total} good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

export default App;
