import MsaArchImg from "../../assets/images/msa_arch2.png";
import ProjectFeature from "../ProjectFeature";
import ProjectFigure from "../ProjectFigure";

const MsaArch = () => (
  <ProjectFeature
    title="도메인별로 나눈 서비스 구조"
    description="Spring Cloud 기반 MSA를 구성하고 서비스 간 호출 경로를 설계했습니다."
    items={[
      { title: "요청 진입점 구성", description: "Gateway로 요청을 라우팅하고 Eureka로 서비스를 탐색합니다." },
      { title: "서비스 간 통신", description: "Feign Client로 도메인별 서비스를 연결했습니다." },
      { title: "접근 범위 분리", description: "Funding·Coupon·Payment·Chat은 Public 서비스를 통해 호출합니다." },
    ]}
    tags={["Spring Cloud", "Gateway", "Eureka", "Feign"]}
  >
    <ProjectFigure src={MsaArchImg} alt="Ecofundia Client, Application, Data 계층과 서비스 호출 구조도" caption="전체 아키텍처 · 외부 요청과 내부 서비스 호출 경로" />
  </ProjectFeature>
);

export default MsaArch;
