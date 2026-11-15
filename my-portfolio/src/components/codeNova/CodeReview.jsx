import CodeReviewImg from "../../assets/images/codeReview.png";
import ProjectFeature from "../ProjectFeature";
import ProjectFigure from "../ProjectFigure";

const CodeReview = () => (
  <ProjectFeature
    title="타이핑에서 코드 이해까지"
    description="입력한 코드를 복습하고, 궁금한 내용을 이어서 질문하는 화면을 구현했습니다."
    items={[
      { title: "코드 다시 보기", description: "줄 단위 복습과 언어별 문법 하이라이팅을 제공합니다." },
      { title: "맥락을 잇는 AI 질문", description: "Redis에 저장한 질문 이력을 프롬프트에 포함합니다." },
      { title: "학습 흐름 유지", description: "대화를 로컬에 보관하고 챗봇 창을 자유롭게 이동할 수 있게 했습니다." },
    ]}
    tags={["Highlight.js", "GPT", "Redis"]}
  >
    <ProjectFigure src={CodeReviewImg} alt="CodeNova 코드 복습과 AI 챗봇 화면" caption="코드 리뷰 · 입력한 코드 확인과 AI 질의응답" />
  </ProjectFeature>
);

export default CodeReview;
