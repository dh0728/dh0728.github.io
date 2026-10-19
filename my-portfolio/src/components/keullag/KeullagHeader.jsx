import KeullagMainImg from "../../assets/images/keullagMain.jpg";
import KeullagPlaceDetailImg from "../../assets/images/keullagPlaceDetail.jpg";
import ProjectIntro from "../ProjectIntro";
import ProjectFigure from "../ProjectFigure";

const KeullagHeader = () => (
  <ProjectIntro
    title="클라이밍 장소와 기록을 연결한 백엔드"
    period="2025.01.13 ~ 2025.02.21"
    role="Backend"
    contribution="25%"
    tech={["Spring", "Java", "MySQL", "Redis"]}
    github="https://github.com/dh0728/ssafy_common_2"
    video="https://www.youtube.com/watch?v=1qiozCS53VE"
    responsibilities={[
      { title: "DB 설계", items: ["도메인 기반 테이블 설계", "정규화와 확장성을 고려한 구조"] },
      { title: "화면 렌더링 API", items: ["클라이밍장 목록·상세 조회 API", "클라이밍 기록 통계 API"] },
      { title: "클라이밍 기록 저장 API", items: ["AWS S3를 통한 클라이밍 영상 저장"] },
      { title: "데이터 수집", items: ["Selenium을 활용한 국내 클라이밍장 데이터 크롤링"] },
    ]}
  >
    <div className="project-phone-gallery">
      <ProjectFigure src={KeullagMainImg} alt="끌락끌락 메인 화면" caption="앱 메인" portrait />
      <ProjectFigure src={KeullagPlaceDetailImg} alt="끌락끌락 클라이밍장 목록 화면" caption="클라이밍장 탐색" portrait />
    </div>
  </ProjectIntro>
);

export default KeullagHeader;
