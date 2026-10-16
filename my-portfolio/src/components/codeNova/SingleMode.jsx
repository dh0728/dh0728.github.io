import SingleModeImg from "../../assets/images/singleMode.png";
import ProjectFeature from "../ProjectFeature";
import ProjectFigure from "../ProjectFigure";

const SingleMode = () => (
  <ProjectFeature
    title="입력에 몰입하는 타자 화면"
    description="줄 단위 코드 입력부터 결과 검증을 위한 기록 수집까지 구현했습니다."
    items={[
      { title: "입력 상태를 한눈에", description: "현재 줄·완료·오타를 구분하고 글자 색상 설정을 제공합니다." },
      { title: "끊기지 않는 타자 흐름", description: "커서 자동 스크롤과 입력창 포커스 유지로 흐름을 이어갑니다." },
      { title: "입력 기록 수집", description: "KeyLogs를 수집·암호화해 전달하고 서버에서 타수와 매크로 여부를 검증합니다." },
    ]}
    tags={["React", "Tailwind CSS", "KeyLogs"]}
  >
    <ProjectFigure src={SingleModeImg} alt="CodeNova 싱글 모드의 코드 입력 화면" caption="싱글 모드 · 코드 입력 상태와 타수, 진행률을 함께 표시" />
  </ProjectFeature>
);

export default SingleMode;
