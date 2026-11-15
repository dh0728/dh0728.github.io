import { MessageSquare, RefreshCw, Rocket } from "lucide-react";
import ProjectReview from "../ProjectReview";

const CodeNovaReview = () => (
  <ProjectReview
    title="협업과 피드백으로 다듬은 서비스"
    steps={[
      { icon: Rocket, title: "MVP 배포", detail: "팀과 범위 조율" },
      { icon: MessageSquare, title: "사용자 피드백", detail: "실제 불편 확인" },
      { icon: RefreshCw, title: "반복 개선", detail: "UI·UX에 반영" },
    ]}
    nextStep={{ title: "화면을 역할별 컴포넌트로 나누기", tags: ["재사용성", "유지보수"] }}
    reflection={{
      title: "함께 조율하며 반복 개선",
      description: "MVP 배포 범위를 팀과 조율하고 색약 사용자의 피드백을 화면에 반영하며, 협업과 반복 개선의 중요성을 배웠습니다.",
    }}
    regret={{
      title: "재사용을 고려한 화면 설계",
      description: "초기 화면 설계에서 컴포넌트를 충분히 세분화하지 못했습니다. 다음에는 역할별로 분리하고 공통 UI를 재사용해 유지보수성을 높이고 싶습니다.",
    }}
  />
);

export default CodeNovaReview;
