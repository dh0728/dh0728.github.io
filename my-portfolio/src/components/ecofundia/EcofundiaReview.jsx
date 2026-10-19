import { ClipboardCheck, Code2, Layers, Lightbulb, Network } from "lucide-react";
import { FlowArrow, FlowNode } from "../ProjectReview";

const EcofundiaReview = () => (
  <div className="project-review">
    <div className="project-review__intro">
      <p className="project-eyebrow">PROJECT TAKEAWAY</p>
      <h3>서비스 설계 경험과 남은 과제</h3>
    </div>
    <div className="project-review__body">
      <figure className="project-review__visual">
        <figcaption>경험에서 다음 개선으로<span>회고를 요약한 도식</span></figcaption>
        <div className="review-growth">
          <p className="review-step-label">이번 프로젝트에서 넓힌 시야</p>
          <div className="review-growth__path">
            <FlowNode icon={Code2} title="기능 구현" detail="개별 서비스" />
            <FlowArrow />
            <FlowNode icon={Network} title="서비스 연결" detail="상호작용 이해" />
            <FlowArrow />
            <FlowNode icon={Layers} title="전체 구조" detail="시스템 관점" />
          </div>
          <div className="review-growth__next">
            <ClipboardCheck size={24} aria-hidden="true" />
            <div>
              <p className="review-step-label">다음 프로젝트에서 보완할 점</p>
              <strong>설계 초기부터 테스트 계획 함께 세우기</strong>
              <ul aria-label="보완할 테스트"><li>단위 테스트</li><li>통합 테스트</li></ul>
            </div>
          </div>
        </div>
      </figure>
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
  </div>
);

export default EcofundiaReview;
