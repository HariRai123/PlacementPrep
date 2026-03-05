import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../utils/ThemeContext'
function DeepChild() {
  const {theme,toggleTheme}=useContext(ThemeContext);
  const styles={
    backgroundColor:theme==="dark"?"#333":"fff",
    color:theme==="dark"?"#fff":"#000",
    padding:"20px",
    marginTop:"10px"
  }
  return (
    <div style={styles}>
      <h4>Deep Child</h4>
      <p>Current Theme:{theme}</p>
      <button onClick={toggleTheme} style={styles}>
        Toggle Theme
      </button>
    </div>
  )
}

export default DeepChild
