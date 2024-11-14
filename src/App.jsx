import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'
import Main from "./components/Main/Main";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState('light')

  const handleTheme = (e) => {
    setTheme(e.target.value)
  }

  return (
    <div className={`${theme} font-poppins main`}>
      <Sidebar handleTheme={handleTheme} />
      <Main />
      <hr />
    </div>
  )
}
