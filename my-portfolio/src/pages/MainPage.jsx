import MainHeader from "../components/MainHeader";
import Skill from "../components/Skill";
import AboutMe from "../components/AboutMe";
import Career from "../components/Career";
import ProjectList from "../components/ProjectList";
import SectionPage from "../components/SectionPage";

const sections = [
  { id: "about", label: "ABOUT ME", content: <AboutMe />, background: "bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200" },
  { id: "career", label: "CAREER", title: "CAREER", content: <Career /> },
  { id: "skill", label: "SKILL", title: "SKILL", content: <Skill /> },
  { id: "pjt", label: "PROJECT", title: "PROJECT", content: <ProjectList /> },
];

const MainPage = () => <SectionPage sections={sections} Header={MainHeader} />;

export default MainPage;
