import IntroSection from "../components/IntroSection"
import TechstackSection from "../components/TechstackSection"
import ProjectSection from "../components/ProjectSection"
import { IntroSectionData, TechStackSectionData, ProjectSectionData } from "../utilities/Constants"

const HomePage = () => {
  return (
    <>
      <IntroSection data={IntroSectionData} />
      <TechstackSection data={TechStackSectionData} />
      <ProjectSection data={ProjectSectionData} />
    </>
  )
}
export default HomePage
