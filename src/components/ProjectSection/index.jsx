import { Link } from "react-router-dom"
import ProjectBox from "./ProjectBox"
import { BiSolidChevronRight } from "react-icons/bi"
import movieAppImg from "../../assets/images/movieApp.png"
import foodAppImg from "../../assets/images/foodApp.png"
import videoAppImg from "../../assets/images/videoApp.png"

const ViewProjectsBtn = () => {
  return (
    <div className="-my-0.5 flex justify-center">
      <Link to="/projects" className="contents">
        <button className="hover:bg-primaryHover flex items-center gap-x-2 rounded bg-ltPrimary px-4 py-2 font-sansMed text-base uppercase leading-3 text-white transition-colors duration-200">
          View all projects <BiSolidChevronRight className="h-6 w-6" />
        </button>
      </Link>
    </div>
  )
}

const ProjectSection = ({ data }) => {
  const { movieApp, foodApp, videoApp } = data
  return (
    <section className="mt-16 scroll-mt-14 md:scroll-mt-16" id="projectSection">
      <div className="mb-8 text-center font-sansMed text-4xl md:text-6xl">Featured Projects</div>
      <ProjectBox data={movieApp} reversed="false" imageURL={movieAppImg}/>
      <ProjectBox data={foodApp} reversed="true" imageURL={foodAppImg}/>
      <ProjectBox data={videoApp} reversed="false" imageURL={videoAppImg}/>
      <ViewProjectsBtn />
    </section>
  )
}
export default ProjectSection
