import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import IntroSection from "./components/IntroSection"
import TechstackSection from "./components/TechstackSection"
const App = () => {
  const [themeState, setThemeState] = useState(localStorage.theme || "light")
  useEffect(() => {
    if (themeState === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [themeState])

  return (
    <div className="app">
      <Navbar themeState={themeState} setThemeState={setThemeState} />
      <IntroSection />
      <TechstackSection />
    </div>
  )
}
export default App
