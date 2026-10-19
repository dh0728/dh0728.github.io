import codeNovaMainImg from "../../assets/images/codeNovaMainImg.png";
import ProjectIntro from "../ProjectIntro";
import ProjectFigure from "../ProjectFigure";

const CodeNovaHeader = () => (
  <ProjectIntro
    title="타이핑과 학습을 잇는 프론트엔드"
    period="2025.04.14 ~ 2025.05.22"
    role="Frontend"
    contribution="20%"
    tech={["React", "JavaScript", "Tailwind CSS", "Spring"]}
    awards={["SSAFY 프로젝트 전시발표회 전시부문 1등", "SSAFY 2학기 자율 프로젝트 최우수상"]}
    github="https://github.com/dh0728/codeNova?tab=readme-ov-file"
    video="https://www.youtube.com/watch?v=H6nqYdognwc"
    responsibilities={[
      { title: "싱글 게임 화면", items: ["실시간 코드 타이핑 게임 화면 구성", "KeyLogs AES 기반 암호화"] },
      { title: "코드 리뷰", items: ["Highlight.js 기반 코드 하이라이팅", "AI 챗봇을 통한 코드 질의응답"] },
      { title: "마이페이지", items: ["사용자 닉네임·전화번호 수정"] },
      { title: "사용자 설정", items: ["색약 사용자를 위한 텍스트 색상 커스터마이징", "게임 사운드 볼륨 조절"] },
      { title: "랭킹 페이지", items: ["실시간 타속 랭킹 표시"] },
      { title: "매크로 감지", items: ["입력 로그 기반 이상 행위 탐지·판단"] },
    ]}
  >
    <ProjectFigure src={codeNovaMainImg} alt="CodeNova 메인 화면" caption="CodeNova · 코드 타이핑과 학습을 연결하는 플랫폼" />
  </ProjectIntro>
);

export default CodeNovaHeader;
