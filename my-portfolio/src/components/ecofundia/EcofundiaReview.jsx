import { Database, MessagesSquare, Layers, Radio } from "lucide-react";
import ProjectReview, { FlowArrow, FlowNode } from "../ProjectReview";

const EcofundiaReview = () => (
  <ProjectReview
    title="메시지 전달과 저장의 역할을 나누다"
    summary="Kafka 기반 채팅에서 실시간 전달과 버퍼를 이용한 일괄 저장을 분리했습니다."
    visualTitle="채팅 메시지 처리 구조"
    contributions={[
      { title: "서비스 간 연결 구성", description: "Gateway·Eureka·Feign Client로 MSA 호출 흐름을 연결했습니다." },
      { title: "채팅 저장 방식 설계", description: "메시지를 버퍼에 모아 스케줄러로 MongoDB에 일괄 저장했습니다." },
    ]}
    lesson="서비스가 나뉠수록 개별 기능뿐 아니라 호출 경로와 메시지 형식을 함께 확인해야 합니다."
    next="메시지 소비 실패와 외부 API 오류에 대한 테스트·복구 시나리오를 보완하고 싶습니다."
  >
    <div className="review-chat">
      <div className="review-chat__entry">
        <FlowNode icon={MessagesSquare} title="메시지 전송" />
        <FlowArrow />
        <FlowNode icon={Radio} title="Kafka" detail="비동기 처리" />
      </div>
      <FlowArrow down />
      <div className="review-chat__branches">
        <div><span className="review-branch-label">실시간 전달</span><FlowNode icon={MessagesSquare} title="STOMP" detail="채팅방에 전달" /></div>
        <div><span className="review-branch-label">일괄 저장</span><FlowNode icon={Layers} title="메모리 버퍼" /><FlowArrow down /><FlowNode icon={Database} title="MongoDB" detail="스케줄러로 저장" /></div>
      </div>
    </div>
  </ProjectReview>
);

export default EcofundiaReview;
