import Project from "./Project";

const PorjectList = () => {

    const pjts = [

        { 
            title:"친환경 크라우드 펀딩 플랫폼 개발", 
            tools:["Spring", "JAVA"], 
            myFunc: ["BE 개발,", "화면 랜더링 및 결제 API,", "채팅"],
            date: "2025.02.24 ~ 2025.04.11",
            info: "친환경 상품 펀딩 사업을 전개 및 소비자는 관심있는 친황경 펀딩 상품을 구매할 수 있는 양방향 플랫폼 기획"
        },
        { 
            title:"클라이밍을 취미로 즐길 수 있는 앱 [끌락끌락]", 
            tools:["Spring", "JAVA"], 
            myFunc: ["BE 개발,", "카드 추천기능,", "데이터 크롤링"],
            date: "2025.02.24 ~ 2025.04.11",
            info: ""
        },
        { 
            title:"코딩 실력을 키우는 실전 타자 플랫폼 [코드노바]", 
            tools:["React", "JS", "tailwind"], 
            myFunc: ["FE 개발,", "싱글모드", "" ,"메크로 구현 기능"],
            date: "2025.02.24 ~ 2025.04.11",
            info: ""
        },
        { 
            title:"영수증 한장으로 끝내는 금융 생활 [가계북]", 
            tools:["Django", "Python"], 
            myFunc: ["BE 개발,", "화면 랜더링 및 결제 API,", "데이터 크롤링"],
            date: "2025.02.24 ~ 2025.04.11",
            info: ""
        },
    ]
    return (
        <div className="w-[90%] h-[55%] flex flex-wrap items-center justify-center gap-4 overflow-hidden">
            {pjts.map((item, idx) => (
                <Project
                    key = {idx}
                    title = {item.title}
                    tools = {item.tools}
                    myFunc = {item.myFunc}
                    date = {item.date}
                    info = {item.info}
                />
            ))}
        </div>
    );

}

export default PorjectList;