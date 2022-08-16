import { useState, useEffect } from "react";
import "./App.scss";
import Header from "../src/components/header/Header"
import Hero from "../src/components/hero/Hero"
import Footer from "../src/components/footer/Footer"
import useLocalStorage from "use-local-storage";


function App() {
  const [switchBtn, setSwitchBtn] = useState(false)
  const [theme, setTheme] = useLocalStorage("theme", "light")

const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light"
  setTheme(newTheme)
  setSwitchBtn(!switchBtn)
}

useEffect(() => {
  if (theme === "dark") {
    setSwitchBtn(true)
  } 
}, [theme])

  return (
    <div className="main">
      <Header myTheme={theme} onToggleTheme={toggleTheme} onSwitch={switchBtn}/>
      <Hero myTheme={theme}/>
      <Footer myTheme={theme}/>
    </div>
  );
}

export default App;
