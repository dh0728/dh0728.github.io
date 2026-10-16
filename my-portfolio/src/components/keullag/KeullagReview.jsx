import { Database, Layers, Send } from "lucide-react";
import ProjectReview, { FlowArrow, FlowNode } from "../ProjectReview";

const KeullagReview = () => (
  <ProjectReview
    title="반복 조회는 캐시로, 필요한 데이터는 함께"
    summary="클라이밍장 목록에 Redis 캐시를 적용하고, 연관 데이터는 Fetch Join으로 함께 조회했습니다."
    visualTitle="클라이밍장 목록 조회 흐름"
    contributions={[
      { title: "Redis 캐시 적용", description: "캐시가 있는 목록 요청은 DB 조회 없이 응답하도록 구성했습니다." },
      { title: "연관 데이터 조회 개선", description: "N+1 문제에 Fetch Join을 적용해 반복 쿼리를 줄였습니다." },
    ]}
    lesson="쿼리 수를 줄이는 것과 함께, 여러 관계를 조인할 때 늘어나는 데이터 양도 살펴야 합니다."
    next="조회 목적별 쿼리 분리와 DTO projection을 검토하고 싶습니다."
  >
    <div className="review-cache">
      <div className="review-cache__before">
        <span className="review-step-label">BEFORE</span>
        <div><span>목록 요청</span><FlowArrow /><span>매번 DB 조회</span></div>
      </div>
      <span className="review-step-label">AFTER</span>
      <div className="review-cache__entry">
        <FlowNode icon={Send} title="목록 요청" />
        <FlowArrow />
        <FlowNode icon={Layers} title="Redis" detail="캐시 확인" />
      </div>
      <div className="review-cache__branches">
        <div><span className="review-branch-label">캐시 있음</span><FlowArrow down /><FlowNode title="바로 응답" detail="DB 조회 생략" /></div>
        <div><span className="review-branch-label">캐시 없음</span><FlowArrow down /><FlowNode icon={Database} title="DB 조회" muted /></div>
      </div>
    </div>
  </ProjectReview>
);

export default KeullagReview;
