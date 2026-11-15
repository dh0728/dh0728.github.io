import { MapPin, Ruler, ScanLine, CalendarDays } from "lucide-react";
import archImg from "../../assets/images/keullag_aki.png";
import ProjectOverview from "../ProjectOverview";
import ProjectFigure from "../ProjectFigure";

const KeullagOverView = () => (
  <ProjectOverview
    title="운동에 집중하고, 기록은 편리하게"
    description="클라이밍 영상을 촬영해 SNS에 공유하는 사용자들이 운동 흐름을 방해받지 않고 기록을 남기고 공유할 수 있도록 기획했습니다."
    features={[
      { title: "주변 클라이밍장 탐색", icon: MapPin, items: ["현재 위치에서 가까운 순으로 정렬", "5개씩 페이지네이션해 화면 렌더링 최적화"] },
      { title: "이미지로 윙스팬 측정", icon: Ruler, items: ["OpenCV + MediaPipe를 활용한 윙스팬 측정"] },
      { title: "모션 인식과 기록 자동화", icon: ScanLine, items: ["Google ML Kit 포즈 감지·음성 안내로 터치 없이 영상 촬영", "오른손 들기·두 손 들기: 촬영 시작 / 박수: 색상 선택", "O·X 동작으로 성공 여부 입력"] },
      { title: "캘린더·통계로 기록 관리", icon: CalendarDays, items: ["클라이밍장 반경 500m 이내 접근 시 해당 장소 해금", "클라이밍장별 클리어 횟수에 따른 메달 획득으로 성취감 제공"] },
    ]}
  >
    <ProjectFigure src={archImg} alt="끌락끌락 앱과 백엔드, 모션 인식 시스템의 아키텍처" caption="시스템 구조 · 앱, 백엔드, 모션 인식 기능 연결" />
  </ProjectOverview>
);

export default KeullagOverView;
