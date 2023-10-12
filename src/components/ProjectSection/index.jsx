import { useNavigate } from "react-router-dom"
import ProjectBox from "./ProjectBox"
import BottomButton from "../BottomButton"
import movieAppImg from "../../assets/images/movieApp.png"
import foodAppImg from "../../assets/images/foodApp.png"
import videoAppImg from "../../assets/images/videoApp.png"

const ProjectSection = ({ data }) => {
  const navigate = useNavigate()
  const { movieApp, foodApp, videoApp } = data
  return (
    <section className="mt-16 scroll-mt-20 md:scroll-mt-24" id="projectSection">
      <div className="mb-8 text-center font-sansMed text-4xl md:text-6xl">Featured Projects</div>
      <ProjectBox data={movieApp} reversed="false" imageURL={movieAppImg} />
      <ProjectBox data={foodApp} reversed="true" imageURL={foodAppImg} />
      <ProjectBox data={videoApp} reversed="false" imageURL={videoAppImg} />
      <BottomButton navigate={navigate} variant="project" />
    </section>
  )
}
export default ProjectSection
