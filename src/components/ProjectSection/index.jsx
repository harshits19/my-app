import { useNavigate } from "react-router-dom"
import ProjectBox from "./ProjectBox"
import BottomButton from "../BottomButton"

const ProjectSection = ({ data }) => {
  const navigate = useNavigate()
  const { marketplace, notesApp, stickyApp } = data
  return (
    <section className="mt-16 scroll-mt-20 md:scroll-mt-24" id="projectSection">
      <div className="mb-8 text-4xl font-medium text-center sm:text-5xl md:text-7xl">Featured Projects</div>
      <ProjectBox data={marketplace} reversed="false" />
      <ProjectBox data={notesApp} reversed="true" />
      <ProjectBox data={stickyApp} reversed="false" />
      <BottomButton navigate={navigate} variant="project" />
    </section>
  )
}
export default ProjectSection
