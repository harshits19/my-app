import { useNavigate } from "react-router-dom"
import ProjectBox from "./ProjectBox"
import BottomButton from "../BottomButton"

const ProjectSection = ({ data }) => {
  const navigate = useNavigate()
  const { movieApp, foodApp, notesApp } = data
  return (
    <section className="mt-16 scroll-mt-20 md:scroll-mt-24" id="projectSection">
      <div className="mb-8 text-center text-4xl font-medium sm:text-5xl md:text-7xl">Featured Projects</div>
      <ProjectBox data={notesApp} reversed="false" />
      <ProjectBox data={movieApp} reversed="true" />
      <ProjectBox data={foodApp} reversed="false" />
      {/* <ProjectBox data={videoApp} reversed="false" /> */}
      <BottomButton navigate={navigate} variant="project" />
    </section>
  )
}
export default ProjectSection
