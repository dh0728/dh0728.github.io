import ProjectHeader from "../../components/ProjectHeader";
import SectionPage from "../../components/SectionPage";
import EcofundiaHeader from "../../components/ecofundia/EcofundiaHeader";
import EcofundiaOverView from "../../components/ecofundia/EcofundiaOverView";
import MsaArch from "../../components/ecofundia/MsaArch";
import Chating from "../../components/ecofundia/Chating";
import EcofundiaReview from "../../components/ecofundia/EcofundiaReview";

const sections = [
  { id: "header", label: "HEADER", title: "Ecofundia", subtitle: "친환경 크라우드 펀딩 플랫폼", content: <EcofundiaHeader /> },
  { id: "overview", label: "OVERVIEW", title: "OVERVIEW", content: <EcofundiaOverView /> },
  { id: "msa", label: "MSA", title: "MSA", content: <MsaArch /> },
  { id: "chating", label: "OPEN CHATTING", title: "OPEN CHATTING", content: <Chating /> },
  { id: "review", label: "REVIEW", title: "REVIEW", content: <EcofundiaReview /> },
];
const implementSections = ["msa","chating"];

const EcofundiaPage = () => <SectionPage sections={sections} Header={ProjectHeader} implementSections={implementSections} />;

export default EcofundiaPage;
