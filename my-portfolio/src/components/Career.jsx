
const Career = () => {

    const education = [
        { date: "2025.01 ~ 현 재" , content: "삼성 청년 SW 아카데미 12기 2학기 수료"},
        { date: "2024.07 ~ 2024.11" , content: "삼성 청년 SW 아카데미 12기 1학기 수료"},
        { date: "2024.02 ~ 2024.06" , content: "디지털스마트부산아카데미 SW전문인재양성 웹 개발 과정 수료"},
        { date: "2018.03 ~ 2024.02" , content: "부경대학교 스마트헬스케어학부/의공학전공 졸업"},
        { date: "2015.03 ~ 2018.02" , content: "울산 학성고등학교 졸업"},
    ];

    const awards = [
        { date: "2024.11" , content: "삼성 청년 SW 아카데미 12기 1학기 - 1학기 프로젝트 최우수상 (SSAFY)"},
        { date: "2024.11" , content: "삼성 청년 SW 아카데미 12기 1학기 - 1학기 성적우수상 (SSAFY)"},
        { date: "2023.03" , content: "SW전문인재양성 웹개발 과정 - 프로젝트 우수상 (디지털스마트부산아카데미)"},
        { date: "2023.06" , content: "SW전문인재양성 웹개발 과정 - 표창장 (정보통신기획평가원)"},
    ]

    const qualifications = [
        { date: "2024.12" , content: "SQLD"},
        { date: "2025.06" , content: "정보처리기사(예정)"}
    ]

    const language = [
        { date: "2023.12" , title: "OPIC" , content: "Intermediate Mid"},
    ]

    // const pjt = [
    //     { content : "코딩 기반 실전 타자 게임 플랫폼 [코드노바]", date : "2025.04 ~ 2025.05", role : "FE"},
    //     { content : "친환경 크라우드 펀딩 플랫픔 [에코펀디아]", date : "2025.02 ~ 2025.04", role : "BE"},
    //     { content : "클라이밍을 취미로 즐길 수 있는 앱 [끌락끌락]", date : "2025.02 ~ 2025.04", role : "BE"},
    //     { content : "영수증 한 장으로 끝내는 금융 생활 플랫폼 [가계북]", date : "2025.02 ~ 2025.04", role : "BE"},
    // ]



    // border-2 rounded-3xl p-4 gap-4 shadow-xl
    return (
        <div className="w-[90%] h-[70%] flex flex-wrap justify-center">
            
            {/* 교육 수료 섹션 */}
            <div className="w-[45%] h-[50%]  p-6 rounded-xl bg-white">
              <div className="text-3xl font-bold mb-4 text-[#3BA9F2]">🎓 교육 수료</div>

              <div className="flex flex-col gap-4">
                {education.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    {/* 날짜 박스 */}
                    <div className="w-[35%] min-w-[120px] bg-[#E6F4FE] text-[#005BAC] px-3 py-1 rounded-md font-semibold text-sm text-center shadow-sm">
                      {item.date}
                    </div>
                
                    {/* 내용 */}
                    <div className="w-[70%] text-gray-800 text-base leading-snug">
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            
            </div>

            {/* 수상 */}
            <div className="w-[45%] h-[50%]  p-6 rounded-xl bg-white">
              <div className="text-3xl font-bold mb-4 text-[#3BA9F2]"> 🏆 수상 </div>

              <div className="flex flex-col gap-4">
                {awards.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    {/* 날짜 박스 */}
                    <div className="w-[35%] min-w-[120px] bg-[#E6F4FE] text-[#005BAC] px-3 py-1 rounded-md font-semibold text-sm text-center shadow-sm">
                      {item.date}
                    </div>
                
                    {/* 내용 */}
                    <div className="w-[70%] text-gray-800 text-base leading-snug">
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* pjt */}
            {/* <div className="w-[45%] h-auto  p-6 rounded-xl bg-white">
              <div className="text-3xl font-bold mb-4 text-[#3BA9F2]">📁 프로젝트 </div>

              <div className="flex flex-col gap-4">
                {pjt.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-[35%] min-w-[120px] bg-[#E6F4FE] text-[#005BAC] px-3 py-1 rounded-md font-semibold text-sm text-center shadow-sm">
                      {item.date}
                    </div>
    
                    <div className="w-[70%] text-gray-800 text-base leading-snug">
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* 자격증 */}
            <div className="w-[45%] h-[20%]  p-6 rounded-xl bg-white">
              <div className="text-3xl font-bold mb-4 text-[#3BA9F2]"> 🪪 자격증 </div>

              <div className="flex flex-col gap-4">
                {qualifications.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    {/* 날짜 박스 */}
                    <div className="w-[35%] min-w-[120px] bg-[#E6F4FE] text-[#005BAC] px-3 py-1 rounded-md font-semibold text-sm text-center shadow-sm">
                      {item.date}
                    </div>
                
                    {/* 내용 */}
                    <div className="w-[70%] text-gray-800 text-base leading-snug">
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 어학 */}
            <div className="w-[45%] h-[20%]  p-6 rounded-xl bg-white">
              <div className="text-3xl font-bold mb-4 text-[#3BA9F2]"> 🌐 어학 </div>

              <div className="flex flex-col gap-4">
                {language.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    {/* 날짜 박스 */}
                    <div className="w-[35%] min-w-[120px] bg-[#E6F4FE] text-[#005BAC] px-3 py-1 rounded-md font-semibold text-sm text-center shadow-sm">
                      {item.date}
                    </div>
                
                    {/* 내용 */}
                    <div className="w-[70%] text-gray-800 text-base leading-snug">
                      {item.title} {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
    );
}

export default Career;