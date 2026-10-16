import { Eye, Palette, MessageSquare } from "lucide-react";
import ProjectReview, { FlowArrow } from "../ProjectReview";

const CodeNovaReview = () => (
  <ProjectReview
    title="사용자 피드백을 화면의 변화로"
    summary="색약 사용자의 의견을 반영해, 입력 상태의 글자 색상을 직접 선택할 수 있도록 개선했습니다."
    visualTitle="피드백에서 기능으로"
    contributions={[
      { title: "글자 색상 설정 구현", description: "사용자가 구분하기 쉬운 색으로 입력 상태를 표시하도록 변경했습니다." },
      { title: "MVP 이후 반복 개선", description: "팀과 배포 범위를 조율하고 사용자 피드백을 UI에 반영했습니다." },
    ]}
    lesson="기능의 우선순위는 요청 수뿐 아니라, 실제 사용을 막는 불편인지로 판단해야 합니다."
    next="화면 컴포넌트를 세분화해 재사용성과 유지보수성을 높이고 싶습니다."
  >
    <div className="review-feedback">
      <div className="review-feedback__quote"><MessageSquare size={19} aria-hidden="true" /><span>입력 상태의 색을 구분하기 어려움</span></div>
      <div className="review-feedback__comparison">
        <div className="review-feedback__panel">
          <span className="review-step-label">BEFORE</span>
          <Eye size={28} strokeWidth={1.5} aria-hidden="true" />
          <strong>정해진 글자 색상</strong>
          <div className="review-swatches" aria-hidden="true"><i /><i /><i /></div>
          <p>모두에게 같은 설정</p>
        </div>
        <FlowArrow />
        <div className="review-feedback__panel review-feedback__panel--after">
          <span className="review-step-label">AFTER</span>
          <Palette size={28} strokeWidth={1.5} aria-hidden="true" />
          <strong>직접 고르는 색상</strong>
          <div className="review-swatches review-swatches--custom" aria-hidden="true"><i /><i /><i /></div>
          <p>내가 구분하기 쉬운 설정</p>
        </div>
      </div>
    </div>
  </ProjectReview>
);

export default CodeNovaReview;
