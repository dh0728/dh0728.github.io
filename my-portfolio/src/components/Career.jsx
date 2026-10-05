import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const CareerCard = ({ section }) => (
  <article className="h-full min-w-0 rounded-xl bg-white p-5 shadow-md sm:p-6">
    <h3 className="mb-5 text-xl font-bold text-[#3BA9F2] sm:text-2xl">{section.title}</h3>
    <ul className="flex flex-col gap-4">
      {section.items.map((item) => (
        <li key={item.date + item.content} className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-start gap-3">
          <span className="rounded-md bg-[#E6F4FE] px-2 py-1 text-center text-xs font-semibold text-[#005BAC] shadow-sm">{item.date}</span>
          <span className="min-w-0 break-words text-sm leading-relaxed text-gray-800">
            {item.title ? item.title + " " + item.content : item.content}
          </span>
        </li>
      ))}
    </ul>
  </article>
);

const Career = () => {
  const education = [
        { date: "2026.05 ~ 현재" , content: "인공지능사관학교 7기 AI금융 부트캠프 참여 중"},
        { date: "2024.07 ~ 2025.06" , content: "삼성 청년 SW 아카데미 12기 수료"},
        // { date: "2024.02 ~ 2024.06" , content: "디지털스마트부산아카데미 SW전문인재양성 웹 개발 과정 수료"},
        // { date: "2018.03 ~ 2024.02" , content: "부경대학교 스마트헬스케어학부/의공학전공 졸업"},
        // { date: "2015.03 ~ 2018.02" , content: "울산 학성고등학교 졸업"},
        { date: "2018.03 ~ 2024.02" , content: "OO대학교 스마트헬스케어학부/의공학전공 졸업"},
        { date: "2015.03 ~ 2018.02" , content: "OO OO고등학교 졸업"},
    ];

    const awards = [
        { date: "2025.06" , content: "교육노동부 청장상 - 교육노동부 (삼성 청년 SW 아카데미)"},
        { date: "2025.06" , content: "SSAFY 프로젝트 전시발표회 전시부문 1등 - 삼성 청년 SW 아카데미"},
        { date: "2025.06" , content: "2학기 자율 프로젝트 최우수상 - 삼성 청년 SW 아카데미"},
        { date: "2024.11" , content: "1학기 프로젝트 최우수상 - 삼성 청년 SW 아카데미"},
        { date: "2024.11" , content: "1학기 성적우수상 - 삼성 청년 SW 아카데미"},
        // { date: "2023.03" , content: "프로젝트 우수상 - 디지털스마트부산아카데미"},
        // { date: "2023.06" , content: "표창장 - 정보통신기획평가원"},
    ]

    const qualifications = [
        { date: "2026.09" , content: "AWS Certified Solutions Architect - Associate"},
        { date: "2026.07" , content: "NAVER Cloud Platform Certified Professional"},
        { date: "2026.06" , content: "NAVER Cloud Platform Certified Associate"},
        { date: "2025.12" , content: "정보처리기사"},
        { date: "2025.10" , content: "AWS Certified Cloud Practitioner"},
        { date: "2024.12" , content: "SQLD"}
    ]

    const language = [
         { date: "2026.03" , title: "TOEIC Speaking" , content: "- Intermediate High"},
    ]

  const sections = [
    { title: "🎓 교육 수료", items: education },
    { title: "🏆 수상", items: awards },
    { title: "🪪 자격증", items: qualifications },
    { title: "🌐 어학", items: language },
  ];

  return (
    <div className="w-full min-w-0">
      <div className="md:hidden">
        <Swiper
          modules={[A11y, Pagination]}
          pagination={{ clickable: true }}
          a11y={{ containerMessage: "교육 및 경력", paginationBulletMessage: "경력 목록 {{index}}번 슬라이드로 이동" }}
          spaceBetween={20}
          slidesPerView={1}
          autoHeight
          className="portfolio-carousel w-full"
        >
          {sections.map((section) => (
            <SwiperSlide key={section.title}>
              <CareerCard section={section} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden grid-cols-2 gap-6 md:grid">
        {sections.map((section) => <CareerCard key={section.title} section={section} />)}
      </div>
    </div>
  );
};

export default Career;
