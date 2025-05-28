import Project from "./Project";
import {useRef} from "react";
import codeNovaImg from "../assets/images/codeNova.png";
import keullagImg from "../assets/images/keullag.png";
import storeBookImg from "../assets/images/storeBook.png";
import ecoFundiaImg from "../assets/images/ecoFundia.png";

const ProjectList = () => {

    const pjts = [

        { 
            title:"친환경 크라우드 펀딩 플랫폼 개발 [에코펀디아]", 
            img : ecoFundiaImg,
            tools:["Spring", "STOMP", "Kafka", "MySQL", "MongoDB"], 
            myFunc: ["BE 개발,", "화면 랜더링 API,", "채팅,", "MSA 아키텍처 설계"],
            date: "2025.02.24 ~ 2025.04.11",
            info: "친환경 상품 펀딩 사업을 전개 및 소비자는 관심있는 친황경 펀딩 상품을 구매할 수 있는 양방향 플랫폼 기획"
        },
        { 
            title:"클라이밍을 취미로 즐길 수 있는 앱 [끌락끌락]", 
            img : keullagImg,
            tools:["Spring", "JAVA", "MySQL", "Redis"], 
            myFunc: ["BE 개발,", "화면 랜더링 API," ,"DB 설계"],
            date: "2025.01.24 ~ 2025.02.11",
            info: "자신의 클라이밍 영상을 모션 인식을 통한 기록 손을 쓰지 않고 촬영하고 기록을 자동 저장하는 플랫폼 기획"
        },
        { 
            title:"코딩 실력을 키우는 실전 타자 플랫폼 [코드노바]", 
            img : codeNovaImg,
            tools:["React", "JS", "tailwind"], 
            myFunc: ["FE 개발,", "싱글모드," ,"메크로 감지"],
            date: "2025.04.14 ~ 2025.05.22",
            info: "개발자를 꿈꾸는 사람들이 자연스럽게 몰입하고 성장할 수 있는 실전형 코딩 감각 훈련 플랫폼"
        },
        { 
            title:"영수증 한 장으로 끝내는 금융 생활 [가계북]", 
            img : storeBookImg,
            tools:["Django", "Python", "LangChain", "SQLite"], 
            myFunc: ["BE 개발,", "카드추천기능,", "DB 설계,", "데이터 크롤링"],
            date: "2025.11.18 ~ 2025.04.11.27",
            info: "소비 내역을 쉽게 입력하고 소비내역에 따른 카드를 추천받을 수 있는 플랫폼"
        },
    ]

    const scrollRef = useRef(null);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -420, behavior: "smooth"})
        }
    }

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 420, behavior: "smooth"})
        }
    }


    return (
        <div
            className="w-[1250px] relative p-2"
        >
            <button
                className="absolute -left-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-1 rounded-full"
                onClick={scrollLeft}
            >
                ◀
            </button>
            <div 
                ref= {scrollRef}
                className="w-full overflow-x-auto scroll-smooth hide-scrollbar "
            >
                <div className="inline-flex gap-4 justify-center">
                {pjts.map((item, idx) => (
                    <Project
                        key = {idx}
                        img = {item.img}
                        title = {item.title}
                        tools = {item.tools}
                        myFunc = {item.myFunc}
                        date = {item.date}
                        info = {item.info}
                    />
                ))}
                </div>
            </div>
            

            <button
                className="absolute -right-12 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-2 py-1 rounded-full"
                onClick={scrollRight}
            >
                ▶
            </button>
        </div>
        
    );

}

export default ProjectList;