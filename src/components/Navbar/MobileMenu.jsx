import { useNavigate} from "react-router-dom"
import { MdLightMode as LightBtn, MdNightlight as DarkBtn, MdHome, MdPerson } from "react-icons/md"
import { HiMiniPresentationChartLine as ProjectBtn } from "react-icons/hi2"
import { IoMdChatboxes as ContactBtn } from "react-icons/io"
import { IoChevronForwardOutline as BackBtn } from "react-icons/io5"

const MobileMenu = ({ menuState, setMenuState, themeState, toggleThemeState,scrollToSection }) => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className={`fixed right-0 z-50 bg-ltPrimary dark:bg-dkPrimary ${
          menuState ? "translate-x-0" : "translate-x-56"
        } top-0 block h-full w-56 overflow-y-auto transition-transform duration-[0.25s] ease-in-out md:hidden`}>
        <div className="relative m-4 text-white" onClick={() => setMenuState(false)}>
          <BackBtn className="h-9 w-9 cursor-pointer rounded-full p-1.5 hover:bg-[#525f812b] dark:hover:bg-[#9797972b]" />
        </div>
        <div className="flex flex-col text-white">
          <div onClick={toggleThemeState} className="duration-00 flex cursor-pointer items-center rounded-md p-4 ease-in hover:bg-[#525f812b] dark:hover:bg-[#9797972b]">
            {themeState === "light" ? <DarkBtn className="h-6 w-6" /> : <LightBtn className="h-6 w-6" />}
            <span className="pl-3 leading-3">{themeState === "light" ? "Dark" : "Light"}</span>
          </div>
          <div
            className="duration-00 flex cursor-pointer items-center p-4 ease-in hover:bg-[#525f812b] dark:hover:bg-[#9797972b]"
            onClick={() => {
              setMenuState(false)
              scrollToSection("introSection")
            }}>
            <MdHome className="h-6 w-6" />
            <span className="pl-3 leading-3">Home</span>
          </div>
          <div
            className="duration-00 flex cursor-pointer items-center p-4 ease-in hover:bg-[#525f812b] dark:hover:bg-[#9797972b]"
            onClick={() => {
              setMenuState(false)
              scrollToSection("techstackSection")
            }}>
            <ProjectBtn className="h-6 w-6" />
            <span className="pl-3 leading-3">Skills</span>
          </div>
          <div
            className="duration-00 flex cursor-pointer items-center p-4 ease-in hover:bg-[#525f812b] dark:hover:bg-[#9797972b]"
            onClick={() => {
              setMenuState(false)
              scrollToSection("projectSection")
            }}>
            <MdPerson className="h-6 w-6" />
            <span className="pl-3 leading-3">Projects</span>
          </div>
          <div
            className="duration-00 flex cursor-pointer items-center p-4 ease-in hover:bg-[#525f812b] dark:hover:bg-[#9797972b]"
            onClick={() => {
              setMenuState(false)
              navigate("/projects")
            }}>
            <MdPerson className="h-6 w-6" />
            <span className="pl-3 leading-3">Repositories</span>
          </div>
          <div
            className="duration-00 flex cursor-pointer items-center p-4 ease-in hover:bg-[#525f812b] dark:hover:bg-[#9797972b]"
            onClick={() => {
              setMenuState(false)
              document.getElementById("footerSection")?.scrollIntoView({ behavior: "smooth" })
            }}>
            <ContactBtn className="h-6 w-6" />
            <span className="pl-3 leading-3">Contact</span>
          </div>
        </div>
      </div>
      {menuState && <div className="fixed inset-0 z-40 h-full w-full bg-[#00000080]" onClick={() => setMenuState(false)}></div>}
    </>
  )
}

export default MobileMenu
