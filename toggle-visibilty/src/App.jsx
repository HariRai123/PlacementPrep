import React, { useState } from "react";

const App = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={handleToggle}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <p>
          This paragraph appears when the button is clicked and disappears when clicked again.
        </p>
      )}
    </div>
  );
};

export default App;