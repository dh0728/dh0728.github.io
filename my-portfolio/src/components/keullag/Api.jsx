import KeullagRecordImg from "../../assets/images/keullagRecord.jpg";
import KeullagPlaceImg from "../../assets/images/keullagPlace.jpg";
import ProjectFeature from "../ProjectFeature";
import ProjectFigure from "../ProjectFigure";

const Api = () => (
  <ProjectFeature
    title="장소 탐색부터 기록 관리까지"
    description="클라이밍장 조회와 개인 기록을 연결하는 백엔드 API를 개발했습니다."
    items={[
      { title: "가까운 클라이밍장 찾기", description: "현재 위치 기준으로 정렬하고 목록 조회에 Redis 캐시를 적용했습니다." },
      { title: "나의 기록과 통계", description: "기록 저장·조회와 주간·월간·연간 통계 API를 구현했습니다." },
      { title: "영상과 기록 연결", description: "스냅샷 이미지와 S3 영상 URL을 기록에 연결했습니다." },
    ]}
    tags={["Spring", "JPA", "Redis", "S3"]}
  >
    <div className="project-phone-gallery">
      <ProjectFigure src={KeullagPlaceImg} alt="끌락끌락 클라이밍장 상세 정보 화면" caption="클라이밍장 상세 정보" portrait />
      <ProjectFigure src={KeullagRecordImg} alt="끌락끌락 개인 기록 화면" caption="개인 기록·통계" portrait />
    </div>
  </ProjectFeature>
);

export default Api;
