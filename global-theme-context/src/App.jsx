import React from 'react'
import { useState } from 'react'
import ThemeContext from './utils/ThemeContext'
import Parent from './components/Parent'
function App() {
  const [theme,setTheme]=useState("light");

  const toggleTheme=()=>{
    setTheme(prev=>prev==="light"?"dark":"light")
  }
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div>
        <h2>Global Theme Using Context</h2>
        <Parent/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
