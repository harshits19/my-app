import { BsX } from "react-icons/bs"

const AlertBox = ({ setAlertState }) => {
  return (
    <div className="fixed inset-0 flex h-full w-full justify-center md:justify-end">
      <div className="relative z-10 ml-4 mr-4 mt-20 flex h-min gap-2 overflow-hidden rounded bg-[#caffd4] px-3 py-2.5 text-[#008000] drop-shadow md:mr-10">
        <p className="font-sansMed">Form submitted successfully</p>
        <span className="cursor-pointer" onClick={() => setAlertState(false)}>
          <BsX className="h-6 w-6" />
        </span>
        <div className="absolute bottom-0 left-0 h-[3px] w-full before:absolute before:bottom-0 before:right-0 before:h-full before:w-full before:animate-[progress_5s_linear_forwards] before:bg-green-700 before:content-['']"></div>
      </div>
    </div>
  )
}
export default AlertBox
