import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([0]);

  const increment = () => {
    setCount((prevCount) => {
      const newValue = prevCount + 1;
      setHistory((prevHistory) => [...prevHistory, newValue]);

      return newValue;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      const newValue = prevCount - 1;
      if(newValue<0) return prevCount;
      setHistory((prevHistory) => [...prevHistory, newValue]);

      return newValue;
    });
  };

  return (
    <div>
      <h2>Smart Counter</h2>

      <h1>{count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h3>History</h3>
      <ul>
        {history.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;



