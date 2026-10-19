import EcofundiaMainImg from "../../assets/images/EcofundiaMain.png";
import ChatingImg from "../../assets/images/chating.jpg";
import ProjectIntro from "../ProjectIntro";
import ProjectFigure from "../ProjectFigure";

const EcofundiaHeader = () => (
  <ProjectIntro
    title="서비스 구조와 실시간 소통을 설계"
    period="2025.02.24 ~ 2025.04.11"
    role="Backend"
    contribution="20%"
    tech={["Spring", "Java", "Kafka", "MySQL", "Redis", "MongoDB"]}
    github="https://github.com/dh0728/EcoFundia"
    video="https://youtu.be/caPTGYGb8qg"
    responsibilities={[
      { title: "MSA 아키텍처 설계", items: ["도메인 단위로 서비스 분리", "Client·Application·Data 계층 구성"] },
      { title: "화면 렌더링 API", items: ["펀딩 상품 목록 조회·5개씩 페이지네이션", "펀딩 상품 상세·판매자 상세정보 API"] },
      { title: "펀딩 상품 오픈채팅", items: ["관심 있는 사용자 간 소통을 위한 채팅방", "참여한 채팅방 목록 조회·재입장", "STOMP + Kafka 기반 오픈채팅 시스템"] },
    ]}
  >
    <div className="project-phone-gallery">
      <ProjectFigure src={EcofundiaMainImg} alt="Ecofundia 펀딩 메인 화면" caption="펀딩 메인" portrait />
      <ProjectFigure src={ChatingImg} alt="Ecofundia 오픈채팅 화면" caption="상품별 오픈채팅" portrait />
    </div>
  </ProjectIntro>
);

export default EcofundiaHeader;
