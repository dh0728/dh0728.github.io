import { Code2, Layers, LayoutDashboard } from "lucide-react";
import ProjectReview from "../ProjectReview";

const KeullagReview = () => (
  <ProjectReview
    title="백엔드 구현에서 설계의 기본기로"
    steps={[
      { icon: Code2, title: "백엔드 구현", detail: "Spring·JPA" },
      { icon: Layers, title: "역할 분리", detail: "계층별 책임" },
      { icon: LayoutDashboard, title: "설계 관점", detail: "구조·성능 고려" },
    ]}
    nextStep={{ title: "조회 목적과 재사용성을 고려해 구조 다듬기", tags: ["조회 구조", "코드 가독성"] }}
    reflection={{
      title: "백엔드의 기본기를 실제 서비스로",
      description: "Spring과 JPA로 API를 구현하고 계층별 책임을 나누며, 기능 구현뿐 아니라 데이터 구조와 조회 성능도 함께 고려하는 법을 배웠습니다.",
    }}
    regret={{
      title: "조회와 코드 구조를 더 단순하게",
      description: "조회 구조와 코드 재사용성을 더 세심하게 설계하지 못한 점이 아쉽습니다. 다음에는 조회 목적별로 쿼리를 나누고 공통 로직을 정리해 성능과 가독성을 함께 개선하고 싶습니다.",
    }}
  />
);

export default KeullagReview;
