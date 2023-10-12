import IntroSection from "../components/IntroSection"
import TechstackSection from "../components/TechstackSection"
import ProjectSection from "../components/ProjectSection"
import { IntroSectionData, TechStackSectionData, ProjectSectionData } from "../utilities/Constants"
import UseTop from "../utilities/useTop"
import FrameContainer from "../components/FrameContainer"

const HomePage = () => {
  return (
    <FrameContainer direction="left">
      <IntroSection data={IntroSectionData} />
      <TechstackSection data={TechStackSectionData} />
      <ProjectSection data={ProjectSectionData} />
      <UseTop />
    </FrameContainer>
  )
}
export default HomePage
