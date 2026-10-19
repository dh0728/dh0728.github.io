import { Gamepad2, Swords, Sparkles, ShieldCheck } from "lucide-react";
import archImg from "../../assets/images/arch.png";
import multImg from "../../assets/images/mult.png";
import meteoImg from "../../assets/images/meteo.png";
import ProjectOverview from "../ProjectOverview";
import ProjectFigure from "../ProjectFigure";

const CodeNovaOverView = () => (
  <ProjectOverview
    title="직접 타이핑하며 익히는 코딩 감각"
    description="자동완성·코드 포맷팅·AI 힌트에 익숙한 개발 환경에서, 스스로 생각하고 코드를 손으로 익힐 수 있도록 기획했습니다."
    features={[
      { title: "싱글 모드", icon: Gamepad2, items: ["실제 문법 기반 코드를 혼자 타이핑하고 결과를 랭킹에 자동 등록", "코드 복습과 AI 챗봇 해설로 학습 연결"] },
      { title: "멀티 모드", icon: Swords, items: ["2~4인이 같은 문제로 겨루는 실시간 코드 배틀", "정확도·속도 경쟁으로 타이핑 실력 향상"] },
      { title: "유성 모드", icon: Sparkles, items: ["최대 4인이 떨어지는 단어를 막는 협동 콘텐츠", "역할 분담과 협업 타이핑으로 집중력·팀워크 강화"] },
      { title: "보안과 공정성", icon: ShieldCheck, items: ["매크로 방지를 위한 키로그 분석·포커스 감지·모니터링", "비정상 입력 탐지로 공정한 랭킹 관리"] },
    ]}
  >
    <ProjectFigure src={archImg} alt="CodeNova 전체 시스템 아키텍처" caption="시스템 구조 · 클라이언트, 서버, 데이터 저장소 연결" />
    <div className="project-overview__screens">
      <ProjectFigure src={multImg} alt="CodeNova 멀티 모드 화면" caption="멀티 모드 · 실시간 코드 배틀" />
      <ProjectFigure src={meteoImg} alt="CodeNova 유성 모드 화면" caption="유성 모드 · 함께 즐기는 협동 타이핑" />
    </div>
  </ProjectOverview>
);

export default CodeNovaOverView;
