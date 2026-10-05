import ProjectHeader from "../../components/ProjectHeader";
import SectionPage from "../../components/SectionPage";
import KeullagHeader from "../../components/keullag/KeullagHeader";
import KeullagOverView from "../../components/keullag/KeullagOverView";
import Api from "../../components/keullag/Api";
import KeullagReview from "../../components/keullag/KeullagReview";

const sections = [
  { id: "header", label: "HEADER", title: "끌락끌락", subtitle: "클라이밍 기록 관리 앱", content: <KeullagHeader /> },
  { id: "overview", label: "OVERVIEW", title: "OVERVIEW", content: <KeullagOverView /> },
  { id: "api", label: "API Development", title: "API Development", content: <Api /> },
  { id: "review", label: "REVIEW", title: "REVIEW", content: <KeullagReview /> },
];
const implementSections = ["api"];

const KeullagPage = () => <SectionPage sections={sections} Header={ProjectHeader} implementSections={implementSections} />;

export default KeullagPage;
