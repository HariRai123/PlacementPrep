import React, { useMemo, useState } from "react";

function App() {

  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  const calculation = (num) => {
    console.log("Calculating...");
    let res = 0;

    for (let i = 0; i < 100000000; i++) {
      res += num;
    }

    return res;
  };

  const calculatedValue = useMemo(() => {
    return calculation(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: theme ? "#333" : "#FFF",
    color: theme ? "#FFF" : "#000",
    padding: "20px",
    marginTop: "20px"
  };

  return (
    <div>
      <h2>Expensive Calculation Optimization</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <p>Result: {calculatedValue}</p>

      <button onClick={() => setTheme(prev => !prev)}>
        Toggle Theme
      </button>

      <div style={themeStyles}>
        Theme: {theme ? "Dark Mode" : "Light Mode"}
      </div>

    </div>
  );
}

export default App;