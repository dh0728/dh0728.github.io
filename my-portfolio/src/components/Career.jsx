import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Career = () => {
  const education = [
        { date: "2024.07 ~ 2025.06" , content: "삼성 청년 SW 아카데미 12기 수료"},
        { date: "2024.02 ~ 2024.06" , content: "디지털스마트부산아카데미 SW전문인재양성 웹 개발 과정 수료"},
        { date: "2018.03 ~ 2024.02" , content: "부경대학교 스마트헬스케어학부/의공학전공 졸업"},
        { date: "2015.03 ~ 2018.02" , content: "울산 학성고등학교 졸업"},
    ];

    const awards = [
        { date: "2025.06" , content: "교육노동부 청장상 - 교육노동부 (삼성 청년 SW 아카데미)"},
        { date: "2025.06" , content: "SSAFY 프로젝트 전시발표회 전시부문 1등 - 삼성 청년 SW 아카데미"},
        { date: "2025.06" , content: "2학기 자율 프로젝트 최우수상 - 삼성 청년 SW 아카데미"},
        { date: "2024.11" , content: "1학기 프로젝트 최우수상 - 삼성 청년 SW 아카데미"},
        { date: "2024.11" , content: "1학기 성적우수상 - 삼성 청년 SW 아카데미"},
        { date: "2023.03" , content: "프로젝트 우수상 - 디지털스마트부산아카데미"},
        { date: "2023.06" , content: "표창장 - 정보통신기획평가원"},
    ]

    const qualifications = [
        { date: "2024.12" , content: "SQLD"},
        { date: "2025.10" , content: "AWS Certified Cloud Practitioner"},
        { date: "2025.12" , content: "정보처리기사"}
    ]

    const language = [
         { date: "2023.12" , title: "TOEIC Speaking" , content: "- Intermediate High"},
    ]

  const sections = [
    { title: "🎓 교육 수료", items: education },
    { title: "🏆 수상", items: awards },
    { title: "🪪 자격증", items: qualifications },
    // { title: "🌐 어학", items: language },
    { title: "", items: language },
  ];

  return (
    <div className="w-[90%] h-[70%]">
      {/* 모바일: 캐러셀 */}
      <div className="md:hidden w-full h-full mt-16">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="h-full"
        >
          {sections.map((section, idx) => (
            <SwiperSlide key={idx}>
              <div className="p-6 rounded-xl bg-white shadow-md h-full flex flex-col">
                <div className="text-2xl font-bold mb-4 text-[#3BA9F2]">{section.title}</div>
                <div className="flex flex-col gap-4 overflow-y-auto">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-[35%] min-w-[100px] bg-[#E6F4FE] text-[#005BAC] px-3 py-1 rounded-md font-semibold text-sm text-center shadow-sm">
                        {item.date}
                      </div>
                      <div className="w-[65%] text-gray-800 text-sm leading-snug">
                        {item.title ? `${item.title} ${item.content}` : item.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 태블릿/PC: 기존 2열 레이아웃 유지 */}
      <div className="hidden md:flex flex-wrap justify-center gap-6 h-full mt-14">
        {sections.map((section, idx) => (
          <div key={idx} className="w-[45%] p-6 rounded-xl bg-white shadow-md h-auto">
            <div className="text-2xl font-bold mb-4 text-[#3BA9F2]">{section.title}</div>
            <div className="flex flex-col gap-4">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-[35%] min-w-[100px] bg-[#E6F4FE] text-[#005BAC] px-3 py-1 rounded-md font-semibold text-xs text-center shadow-sm">
                    {item.date}
                  </div>
                  <div className="w-[65%] text-gray-800 text-xs leading-snug">
                    {item.title ? `${item.title} ${item.content}` : item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
