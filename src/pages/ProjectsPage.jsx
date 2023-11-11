import { useNavigate } from "react-router-dom"
import FrameContainer from "../components/FrameContainer"
import ProjectBox from "../components/ProjectSection/ProjectBox"
import BottomButton from "../components/BottomButton"
import UseTop from "../utilities/useTop"
import { ProjectPageData } from "../utilities/Constants"

const ProjectsPage = () => {
  const navigate = useNavigate()
  const { movieApp, foodApp, videoApp, notesApp } = ProjectPageData
  return (
    <FrameContainer direction="right">
      <h1 className="flex w-full justify-center pb-4 pt-12 text-center text-5xl font-medium dark:text-white md:pb-8 md:pt-20 md:text-6xl lg:text-7xl" id="projectsPageSection">
        Projects I've worked on
      </h1>
      <ProjectBox data={notesApp} reversed="false" />
      <ProjectBox data={movieApp} reversed="true" />
      <ProjectBox data={foodApp} reversed="false" />
      <ProjectBox data={videoApp} reversed="true" />
      <BottomButton navigate={navigate} variant="home" />
      <UseTop />
    </FrameContainer>
  )
}
export default ProjectsPage
