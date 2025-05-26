import Project from "./Project";
import {useRef, useEffect} from "react";

const ProjectList = () => {

    const pjts = [

        { 
            title:"친환경 크라우드 펀딩 플랫폼 개발 [에코펀디아]", 
            tools:["Spring", "STOMP", "Kafka", "MySQL", "MongoDB"], 
            myFunc: ["BE 개발,", "화면 랜더링 API,", "채팅,", "MSA 아키텍처 설계"],
            date: "2025.02.24 ~ 2025.04.11",
            info: "친환경 상품 펀딩 사업을 전개 및 소비자는 관심있는 친황경 펀딩 상품을 구매할 수 있는 양방향 플랫폼 기획"
        },
        { 
            title:"클라이밍을 취미로 즐길 수 있는 앱 [끌락끌락]", 
            tools:["Spring", "JAVA", "MySQL", "Redis"], 
            myFunc: ["BE 개발,", "화면 랜더링 API," ,"DB 설계"],
            date: "2025.01.24 ~ 2025.02.11",
            info: "자신의 클라이밍 영상을 모션 인식을 통한 기록 손을 쓰지 않고 촬영하고 기록을 자동 저장하는 플랫폼 기획"
        },
        { 
            title:"코딩 실력을 키우는 실전 타자 플랫폼 [코드노바]", 
            tools:["React", "JS", "tailwind"], 
            myFunc: ["FE 개발,", "메크로 감지"],
            date: "2025.04.14 ~ 2025.05.22",
            info: "개발자를 꿈꾸는 사람들이 자연스럽게 몰입하고 성장할 수 있는 실전형 코딩 감각 훈련 플랫폼"
        },
        { 
            title:"영수증 한 장으로 끝내는 금융 생활 [가계북]", 
            tools:["Django", "Python", "LangChain", "SQL Lite"], 
            myFunc: ["BE 개발,", "카드추천기능,", "DB 설계,", "데이터 크롤링"],
            date: "2025.11.18 ~ 2025.04.11.27",
            info: "소비 내역을 쉽게 입력하고 소비내역에 따른 카드를 추천받을 수 있는 플랫폼"
        },
    ]

    return (
        <div className="w-[90%] h-[55%] touch-pan-x overflow-x-auto whitespace-nowrap scroll-smooth hide-scrollbar">
            <div className="flex gap-4 px-4">
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
        </div>
        
    );

}

export default ProjectList;