import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer"
import ScrollTop from "./components/ScrollTop"
import ProjectsPage from "./pages/ProjectsPage"
import { AnimatePresence } from "framer-motion"

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
    <Router>
      <div className="app">
        <Navbar themeState={themeState} setThemeState={setThemeState} />
        <Routes>
          <Route path="/"
            element={
              <AnimatePresence initial={false}>
                <HomePage />
              </AnimatePresence>
            }
          />
          <Route path="/projects"
            element={
              <AnimatePresence initial={false}>
                <ProjectsPage />
              </AnimatePresence>
            }
          />
        </Routes>
        <Footer />
        <ScrollTop />
      </div>
    </Router>
  )
}
export default App
