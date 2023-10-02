import foodApp from "../../assets/images/foodApp.png"
import { BsGithub } from "react-icons/bs"
import { MdOpenInNew } from "react-icons/md"
import { Html5, Css3, Javascript, Reactjs, Tailwind } from "../../assets/StackIcons"

const ItemBoxII = () => {
  return (
    <div className="h-full w-full dark:text-white py-16 -my-0.5">
      <div className="text-center text-4xl md:text-6xl">FoodChimp</div>
      <div className="relative flex max-w-[1280px] flex-col gap-4 p-4 md:flex-row md:px-10 md:py-10 lg:mx-auto lg:gap-8">
        <div className="flex-1 text-left order-2 md:order-1">
          <div className="text-base">
            <p>Experience the world of entertainment with my Netflix Clone, a web application meticulously crafted using React, HTML, CSS, Tailwind CSS, JavaScript, and Firebase.</p>
            <p>With a sleek Netflix-style UI, a vast catalog of movies, smooth streaming, and powerful search functionality, it offers users an immersive streaming experience on any device. </p>
            <p>Explore and enjoy the future of online streaming with my Netflix Clone.</p>
          </div>
          <div className="mt-2 flex gap-4 text-center font-sansBold text-sm text-white">
            <a href="https://github.com/harshits19/food-app-two" className="contents" target="_blank">
              <div className="flex max-w-fit flex-1 cursor-pointer items-center gap-x-2 rounded-3xl bg-ltPrimary px-2 py-1">
                Source Code
                <BsGithub />
              </div>
            </a>
            <a href="https://foodchimp.netlify.app/" className="contents" target="_blank">
              <div className="flex max-w-fit flex-1 cursor-pointer items-center gap-x-2 rounded-3xl bg-ltPrimary px-2 py-1">
                Live Project
                <MdOpenInNew />
              </div>
            </a>
          </div>
          <div className="my-4 flex flex-wrap justify-start gap-2">
            <div className="max-w-24 group relative flex max-h-20 flex-1 justify-center">
              <Html5 classList="cursor-pointer hover:animate-[popin_400ms_ease-in-out_0s_1_normal_both]" />
              <span className="invisible absolute -bottom-6 font-sansMed text-xs group-hover:visible">Html</span>
            </div>
            <div className="max-w-24 group relative flex max-h-20 flex-1 justify-center">
              <Css3 classList="cursor-pointer hover:animate-[popin_400ms_ease-in-out_0s_1_normal_both]" />
              <span className="invisible absolute -bottom-6 font-sansMed text-xs group-hover:visible">Css</span>
            </div>
            <div className="max-w-24 group relative flex max-h-20 flex-1 justify-center">
              <Javascript classList="cursor-pointer hover:animate-[popin_400ms_ease-in-out_0s_1_normal_both]" />
              <span className="invisible absolute -bottom-6 font-sansMed text-xs group-hover:visible">Javascript</span>
            </div>
            <div className="max-w-24 group relative flex max-h-20 flex-1 justify-center">
              <Reactjs classList="cursor-pointer hover:animate-[popin_400ms_ease-in-out_0s_1_normal_both]" />
              <span className="invisible absolute -bottom-6 font-sansMed text-xs group-hover:visible">React</span>
            </div>
            <div className="max-w-24 group relative flex max-h-20 flex-1 justify-center">
              <Tailwind classList="cursor-pointer hover:animate-[popin_400ms_ease-in-out_0s_1_normal_both]" />
              <span className="invisible absolute -bottom-6 font-sansMed text-xs group-hover:visible">Tailwind</span>
            </div>
          </div>
        </div>
        <div className="flex-1 order-1 md:order-2">
          <img src={foodApp} className="aspect-video w-full rounded" />
        </div>
      </div>
    </div>
  )
}
export default ItemBoxII
