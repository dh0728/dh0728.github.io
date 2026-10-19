import { TrendingUp, MessagesSquare, Ticket } from "lucide-react";
import msaArchImg from "../../assets/images/msa_arch.png";
import ProjectOverview from "../ProjectOverview";
import ProjectFigure from "../ProjectFigure";

const EcofundiaOverView = () => (
  <ProjectOverview
    title="작은 실천을 모으는 친환경 펀딩"
    description="친환경 제품에 대한 관심과 재난 상황에서의 자발적인 펀딩 참여에서 출발해, 작은 실천이 모여 변화를 만드는 플랫폼을 기획했습니다."
    features={[
      { title: "실시간 모금액", icon: TrendingUp, items: ["Redis + STOMP로 모금액을 실시간 조회", "모금액 페이지의 사용자만 구독하고 Redis 캐시로 조회 성능 개선"] },
      { title: "펀딩 상품 단체 채팅방", icon: MessagesSquare, items: ["Kafka + STOMP 기반 상품별 오픈채팅", "채팅 기록을 DB에 저장해 대화 내역 유지"] },
      { title: "쿠폰 발급", icon: Ticket, items: ["Redis + Lua 스크립트로 쿠폰 발급 시 동시성 제어", "Kafka로 쿠폰 발급 이력을 비동기 저장"] },
    ]}
  >
    <ProjectFigure src={msaArchImg} alt="Ecofundia의 Gateway, Eureka, 도메인 서비스 및 데이터 저장소 구조도" caption="시스템 구조 · 도메인별 서비스와 메시지·데이터 흐름" />
  </ProjectOverview>
);

export default EcofundiaOverView;
