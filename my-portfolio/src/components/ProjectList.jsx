import Project from "./Project";
import { useNavigate } from "react-router-dom";

import codeNovaImg from "../assets/images/codenova_img.png";
import keullagImg from "../assets/images/climb_img.png";
import storeBookImg from "../assets/images/storeBook.png";
import ecoFundiaImg from "../assets/images/ecofundia_img.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProjectList = () => {
  const navigate = useNavigate();

  const pjts = [
    {
      title: "에코펀디아",
      content: "친환경 크라우드 펀딩 플랫폼",
      img: ecoFundiaImg,
      team : 6,
      tools: ["Spring", "STOMP", "Kafka", "MySQL", "MongoDB"],
      myFunc: ["BE 개발", "화면 랜더링 API", "채팅", "MSA 아키텍처 설계"],
      date: "2025.02.24 ~ 2025.04.11 (6주)",
      info: "친환경 상품 펀딩 사업을 전개 및 소비자는 관심있는 친황경 펀딩 상품을 구매할 수 있는 양방향 플랫폼",
      path: "/ecofundia",
    },
    {
      title: "끌락끌락",
      content: "클라이밍을 취미로 즐길 수 있는 앱",
      img: keullagImg,
      team : 6,
      tools: ["Spring", "JAVA", "MySQL", "Redis"],
      myFunc: ["BE 개발", "화면 랜더링 API", "DB 설계"],
      date: "2025.01.13 ~ 2025.02.21 (6주)",
      info: "자신의 클라이밍 영상을 모션 인식을 통한 기록 손을 쓰지 않고 촬영하고 기록을 자동 저장하는 플랫폼 기획",
      path: "/keullag",
    },
    {
      title: "코드노바",
      content: "코딩 실력을 키우는 실전 타자 플랫폼",
      img: codeNovaImg,
      team : 6,
      tools: ["React", "JS", "tailwind"],
      myFunc: ["FE 개발", "싱글모드", "메크로 감지"],
      date: "2025.04.14 ~ 2025.05.22 (6주)",
      info: "개발자를 꿈꾸는 사람들이 자연스럽게 몰입하고 성장할 수 있는 실전형 코딩 감각 훈련 플랫폼",
      path: "/codenova",
    },
    {
      title: "가계북",
      content: "영수증 한 장으로 끝내는 금융 생활",
      img: storeBookImg,
      tools: ["Django", "Python", "LangChain", "SQLite"],
      myFunc: ["BE 개발", "카드추천기능", "DB 설계", "데이터 크롤링"],
      date: "2025.11.18 ~ 2025.04.11.27",
      info: "소비 내역을 쉽게 입력하고 소비내역에 따른 카드를 추천받을 수 있는 플랫폼",
      path: "/storebook",
    },
  ];

  return (
    <div className="w-full h-full px-4m mt-60">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },       // 모바일
          768: { slidesPerView: 2 },     // 태블릿
          1024: { slidesPerView: 3 },    // 데스크탑
        }}
        className="w-[80%] h-[90%]"
      >
        {pjts.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Project
              img={item.img}
              title={item.title}
              content={item.content}
              team={item.team}
              tools={item.tools}
              myFunc={item.myFunc}
              date={item.date}
              info={item.info}
              onClick={() => navigate(item.path)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectList;
