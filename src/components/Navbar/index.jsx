import { useState, memo } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import MobileMenu from "./MobileMenu"
import { MdLightMode as LightBtn, MdNightlight as DarkBtn, MdMenu } from "react-icons/md"

const Navbar = ({ themeState, setThemeState }) => {
  const [menuState, setMenuState] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toggleThemeState = () => {
    if (themeState === "dark") {
      localStorage.theme = "light"
      setThemeState("light")
    } else {
      localStorage.theme = "dark"
      setThemeState("dark")
    }
  }
  const scrollToSection = (sectionName) => {
    if (location.pathname === "/") document.getElementById(sectionName)?.scrollIntoView({ behavior: "smooth" })
    else {
      navigate("/")
      let checkExist = setInterval(() => {
        document.getElementById(sectionName)?.scrollIntoView({ behavior: "smooth" })
        clearInterval(checkExist)
      }, 500)
    }
  }
  const handleProjectNav = () => {
    if (location.pathname === "/") navigate("/projects")
    else document.getElementById("projectsPageSection")?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <>
      <div
        className={`sticky top-0 z-30 flex h-14 w-full items-center justify-between bg-ltPrimary px-4 text-white drop-shadow-md transition-colors duration-200 dark:bg-dkPrimary dark:drop-shadow-none md:h-16 md:px-8`}>
        <div className="text-xl font-medium tracking-wide cursor-pointer md:text-3xl" onClick={() => navigate("/")}>
          harshit's
        </div>
        <div className="flex-row items-center hidden text-sm font-medium uppercase gap-x-6 md:flex">
          <span className="cursor-pointer rounded-sm px-3 py-2 duration-200 ease-in hover:bg-[#09090929] dark:hover:bg-[#9797972b]" onClick={() => scrollToSection("introSection")}>
            Home
          </span>
          <span className="cursor-pointer rounded-sm px-3 py-2 duration-200 ease-in hover:bg-[#09090929] dark:hover:bg-[#9797972b]" onClick={() => scrollToSection("techstackSection")}>
            Skills
          </span>
          <span className="cursor-pointer rounded-sm px-3 py-2 duration-200 ease-in hover:bg-[#09090929] dark:hover:bg-[#9797972b]" onClick={() => scrollToSection("projectSection")}>
            Projects
          </span>
          <span className="cursor-pointer rounded-sm px-3 py-2 duration-200 ease-in hover:bg-[#09090929] dark:hover:bg-[#9797972b]" onClick={handleProjectNav}>
            All Projects
          </span>
          <span
            className="cursor-pointer rounded-sm px-3 py-2 duration-200 ease-in hover:bg-[#09090929] dark:hover:bg-[#9797972b]"
            onClick={() => document.getElementById("footerSection")?.scrollIntoView({ behavior: "smooth" })}>
            Contact
          </span>
          <span className="cursor-pointer rounded-full p-2 duration-200 ease-in hover:bg-[#09090929] dark:hover:bg-[#9797972b]" onClick={() => toggleThemeState()}>
            {themeState === "light" ? <DarkBtn className="h-7 w-7" /> : <LightBtn className="h-7 w-7" />}
          </span>
        </div>
        <div className="block md:hidden" onClick={() => setMenuState(true)}>
          <MdMenu className="h-10 w-10 cursor-pointer rounded-full p-1.5 text-white duration-200 ease-in hover:bg-[#09090929] dark:hover:bg-[#9797972b]" />
        </div>
      </div>
      <MobileMenu menuState={menuState} setMenuState={setMenuState} themeState={themeState} toggleThemeState={toggleThemeState} scrollToSection={scrollToSection} handleProjectNav={handleProjectNav} />
    </>
  )
}
export default memo(Navbar)
