import ProjectHeader from "../../components/ProjectHeader";
import SectionPage from "../../components/SectionPage";
import CodeNovaHeader from "../../components/codeNova/CodeNovaHeader";
import CodeNovaOverView from "../../components/codeNova/CodeNovaOverView";
import SingleMode from "../../components/codeNova/SingleMode";
import CodeReview from "../../components/codeNova/CodeReview";
import CodeNovaReview from "../../components/codeNova/CodeNovaReview";

const sections = [
  { id: "header", label: "HEADER", title: "CodeNova", subtitle: "코딩 실력을 키우는 실전 타자 플랫폼", content: <CodeNovaHeader /> },
  { id: "overview", label: "OVERVIEW", title: "OVERVIEW", content: <CodeNovaOverView /> },
  { id: "singleMode", label: "SINGLE MODE", title: "SINGLE MODE", content: <SingleMode /> },
  { id: "codeReview", label: "CODE REVIEW", title: "CODE REVIEW", content: <CodeReview /> },
  { id: "review", label: "REVIEW", title: "REVIEW", content: <CodeNovaReview /> },
];
const implementSections = ["singleMode","codeReview"];

const CodeNovaPage = () => <SectionPage sections={sections} Header={ProjectHeader} implementSections={implementSections} />;

export default CodeNovaPage;
