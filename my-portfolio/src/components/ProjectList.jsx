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
            title:"끌락끌락", 
            tools:["Spring", "JAVA"], 
            myFunc: ["BE 개발,", "화면 랜더링 및 결제 API,", "채팅"],
            date: "2025.02.24 ~ 2025.04.11",
            info: ""
        },
        { 
            title:"코드노바", 
            tools:["React", "JS", "tailwind"], 
            myFunc: ["FE 개발,", "메크로 감지"],
            date: "2025.02.24 ~ 2025.04.11",
            info: ""
        },
        { 
            title:"친환경 크라우드 펀딩 플랫폼 개발", 
            tools:["Django", "Python"], 
            myFunc: ["BE 개발,", "화면 랜더링 및 결제 API,", "채팅"],
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