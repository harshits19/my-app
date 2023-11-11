import { useRef, useState } from "react"
import { BsInstagram, BsGithub } from "react-icons/bs"
import { IoSendSharp } from "react-icons/io5"
import { BiLogoLinkedin, BiLogoGmail } from "react-icons/bi"
import { db } from "../../utilities/Firebase"
import { doc, setDoc } from "firebase/firestore"
import AlertBox from "../AlertBox"

const Footer = () => {
  const formRef = useRef()
  const [alertState, setAlertState] = useState(false)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const nameVal = formRef.current[0]?.value
    const emailVal = formRef.current[1]?.value
    const msgVal = formRef.current[2]?.value
    try {
      setDoc(doc(db, "users", emailVal), {
        name: nameVal,
        email: emailVal,
        message: msgVal,
      })
        .then((e) => {
          setAlertState(true)
          let timer = setInterval(() => {
            setAlertState(false)
            clearInterval(timer)
          }, 5000)
        })
        .then(() => {
          formRef.current[0].value = ""
          formRef.current[1].value = ""
          formRef.current[2].value = ""
        })
    } catch (e) {
      alert("Caught an error while submitting, please try again later!")
    }
  }

  return (
    <section className="h-full w-full max-w-[1280px] scroll-mt-14 p-4 md:scroll-mt-16 md:p-8 lg:mx-auto" id="footerSection">
      {alertState && <AlertBox setAlertState={setAlertState} />}
      <div className="flex flex-col gap-4 md:flex-row lg:gap-x-8">
        <div className="flex-1">
          <h1 className="mb-4 text-4xl md:mb-8">Connect with me</h1>
          <div className="flex flex-col items-start gap-y-2 font-normal text-lg">
            <div className="flex justify-center gap-x-4 py-1 hover:text-ltPrimary dark:text-white dark:hover:text-ltPrimary">
              <a href="https://github.com/harshits19" target="_blank" className="contents">
                <BsGithub className="h-6 w-6" /> Github
              </a>
            </div>
            <div className="flex justify-center gap-x-4 py-1 hover:text-ltPrimary dark:text-white dark:hover:text-ltPrimary">
              <a href="https://www.linkedin.com/in/harshitgaur19/" target="_blank" className="contents">
                <BiLogoLinkedin className="h-6 w-6" /> Linkedin
              </a>
            </div>
            <div className="flex justify-center gap-x-4 py-1 hover:text-ltPrimary dark:text-white dark:hover:text-ltPrimary">
              <a href="https://www.instagram.com/_harshitz/" target="_blank" className="contents">
                <BsInstagram className="h-6 w-6" /> Instagram
              </a>
            </div>
            <div className="flex justify-center gap-x-4 py-1 hover:text-ltPrimary dark:text-white dark:hover:text-ltPrimary">
              <a href="mailto:jai191912101@gmail.com" className="contents">
                <BiLogoGmail className="h-6 w-6" /> Gmail
              </a>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="mb-4 text-4xl md:mb-8">Say Hi!</h1>
          <form className="flex flex-col gap-y-2.5" onSubmit={handleFormSubmit} ref={formRef}>
            <div className="relative">
              <input
                className="customInput w-full rounded border-2 border-solid border-myGray bg-inherit px-4 py-2 text-base outline-none hover:border-[#1c1b1b9f] focus:border-ltPrimary focus:text-ltPrimary dark:border-myBlack dark:hover:border-[#bdcdd663] dark:focus:border-ltPrimary"
                type="text"
                name="name"
                id="nameVal"
                autoComplete="off"
                required
                spellCheck="false"
              />
              <span className="placeholder pointer-events-none absolute left-3 top-2 flex origin-[0%_0%] items-center bg-none px-1 text-lg text-[#1c1b1b9f] transition-all duration-[0.2s] dark:text-[#e7e7e78a]">
                Name*
              </span>
            </div>
            <div className="relative">
              <input
                className="customInput w-full rounded border-2 border-solid border-myGray bg-inherit px-4 py-2 text-base outline-none hover:border-[#1c1b1b9f] focus:border-ltPrimary focus:text-ltPrimary dark:border-myBlack dark:hover:border-[#bdcdd663] dark:focus:border-ltPrimary"
                type="text"
                name="email"
                id="emailVal"
                autoComplete="off"
                required
                spellCheck="false"
              />
              <span className="placeholder pointer-events-none absolute left-3 top-2 flex origin-[0%_0%] items-center bg-none px-1 text-lg text-[#1c1b1b9f] transition-all duration-[0.2s] dark:text-[#e7e7e78a]">
                Email*
              </span>
            </div>
            <div className="relative">
              <textarea
                className="customInput h-24 w-full resize-none rounded border-2 border-solid border-myGray bg-inherit px-4 py-2 text-base outline-none hover:border-[#1c1b1b9f] focus:border-ltPrimary focus:text-ltPrimary dark:border-myBlack dark:hover:border-[#bdcdd663] dark:focus:border-ltPrimary"
                name="message"
                id="msgVal"
                required
              />
              <span className="placeholder pointer-events-none absolute left-3 top-2 flex origin-[0%_0%] items-center bg-none px-1 text-lg text-[#1c1b1b9f] transition-all duration-[0.2s] dark:text-[#e7e7e78a]">
                Message*
              </span>
            </div>
            <button className="flex w-min items-center rounded bg-ltPrimary px-4 py-1 font-medium text-white hover:bg-primaryHover">
              Send
              <IoSendSharp className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
export default Footer
