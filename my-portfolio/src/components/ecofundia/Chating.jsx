import ChatingDescImg from "../../assets/images/chating_desc.png";
import ProjectFeature from "../ProjectFeature";
import ProjectFigure from "../ProjectFigure";

const Chating = () => (
  <ProjectFeature
    title="펀딩 상품별 실시간 대화"
    description="Kafka와 STOMP로 오픈채팅을 구현하고 메시지 수신과 저장을 분리했습니다."
    items={[
      { title: "상품별 채팅방", description: "펀딩 상품 단위로 Kafka 토픽을 나누어 메시지를 처리합니다." },
      { title: "버퍼에 모아 일괄 저장", description: "수신 메시지를 메모리에 모은 뒤 MongoDB에 저장합니다." },
      { title: "저장 시점 관리", description: "버퍼 50개 누적 또는 최초 적재 후 50분 경과 시 저장합니다." },
    ]}
    tags={["Kafka", "STOMP", "MongoDB"]}
  >
    <ProjectFigure src={ChatingDescImg} alt="Ecofundia Kafka와 STOMP 기반 채팅 메시지 흐름도" caption="오픈채팅 · 메시지 전송, 수신, 저장 흐름" />
  </ProjectFeature>
);

export default Chating;
