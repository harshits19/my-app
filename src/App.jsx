import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"
import ProjectsPage from "./pages/ProjectsPage"

const App = () => {
  const [themeState, setThemeState] = useState(localStorage.theme || "dark")
  useEffect(() => {
    if (themeState === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [themeState])

  return (
    <Router>
      <div className="app">
        <Navbar themeState={themeState} setThemeState={setThemeState} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </div>
    </Router>
  )
}
export default App
