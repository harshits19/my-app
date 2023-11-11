import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi"

const BottomButton = ({ navigate, variant }) => {
  return (
    <div className="my-8 flex justify-center">
      <button
        onClick={() => navigate(variant === "home" ? "/" : "/projects")}
        className={`${variant==="home" ?"pl-2 pr-4":"pl-4 pr-2"} flex items-center gap-x-1 rounded bg-ltPrimary py-2 font-medium text-sm uppercase leading-4 text-white transition-colors duration-200 hover:bg-primaryHover`}>
        {variant === "home" && <BiSolidChevronLeft className="h-5 w-5" />}
        {variant === "home" ? "go back home" : "view all projects"}
        {variant === "project" && <BiSolidChevronRight className="h-5 w-5" />}
      </button>
    </div>
  )
}
export default BottomButton
