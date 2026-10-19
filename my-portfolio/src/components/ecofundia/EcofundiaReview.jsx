import { ClipboardCheck, Lightbulb } from "lucide-react";

const EcofundiaReview = () => (
  <div className="project-review">
    <div className="project-review__intro">
      <p className="project-eyebrow">PROJECT TAKEAWAY</p>
      <h3>서비스 설계 경험과 남은 과제</h3>
    </div>
    <div className="project-review__reflections">
      <div className="project-review__reflection">
        <h4><Lightbulb size={20} aria-hidden="true" />회고</h4>
        <h5>개별 기능에서 전체 구조로</h5>
        <p>Spring 기반 MSA를 처음 설계하며, 개별 기능뿐 아니라 서비스 간 연결과 시스템 전체를 고려하는 시야를 넓혔습니다.</p>
      </div>
      <div className="project-review__reflection">
        <h4><ClipboardCheck size={20} aria-hidden="true" />아쉬운 점</h4>
        <h5>기능 개발과 테스트의 균형</h5>
        <p>기능 개발과 통합에 집중하면서 단위·통합 테스트가 부족했습니다. 다음에는 개발 초기부터 테스트 계획을 세우고 예외 상황도 함께 검증하고 싶습니다.</p>
      </div>
    </div>
  </div>
);

export default EcofundiaReview;
