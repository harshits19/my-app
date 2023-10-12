import { useEffect, useState } from "react"
import { BiSolidChevronUp } from "react-icons/bi"

const ScrollTop = () => {
  const [scrollBtn, setScrollBtn] = useState("scale-0")

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      show ? setScrollBtn("scale-none") : setScrollBtn("scale-0")
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={`${scrollBtn} hover:bg-primaryHover active:hover:bg-primaryHover fixed bottom-4 right-4 flex h-12 w-12 cursor-pointer items-center  justify-center rounded-full bg-ltPrimary text-white shadow-[0px_3px_5px_-1px_#00000033,0px_6px_10px_0px_#00000024,0px_1px_18px_0px_#0000001f] transition-all duration-200`}
      onClick={() => document.getElementById("introSection")?.scrollIntoView({ behavior: "smooth" })}>
      <BiSolidChevronUp className="h-6 w-6" />
    </div>
  )
}
export default ScrollTop
