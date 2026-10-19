import { Code2, Layers, Network } from "lucide-react";
import ProjectReview from "../ProjectReview";

const EcofundiaReview = () => (
  <ProjectReview
    title="서비스 설계 경험과 남은 과제"
    steps={[
      { icon: Code2, title: "기능 구현", detail: "개별 서비스" },
      { icon: Network, title: "서비스 연결", detail: "상호작용 이해" },
      { icon: Layers, title: "전체 구조", detail: "시스템 관점" },
    ]}
    nextStep={{ title: "설계 초기부터 테스트 계획 함께 세우기", tags: ["단위 테스트", "통합 테스트"] }}
    reflection={{
      title: "개별 기능에서 전체 구조로",
      description: "Spring 기반 MSA를 처음 설계하며, 개별 기능뿐 아니라 서비스 간 연결과 시스템 전체를 고려하는 시야를 넓혔습니다.",
    }}
    regret={{
      title: "기능 개발과 테스트의 균형",
      description: "기능 개발과 통합에 집중하면서 단위·통합 테스트가 부족했습니다. 다음에는 개발 초기부터 테스트 계획을 세우고 예외 상황도 함께 검증하고 싶습니다.",
    }}
  />
);

export default EcofundiaReview;
