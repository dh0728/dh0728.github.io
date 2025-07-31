import { useState, useRef, useEffect } from "react";
import ProjectHeader from "../../components/ProjectHeader";
import KeullagHeader from "../../components/keullag/KeullagHeader";
import KeullagOverView from "../../components/keullag/KeullagOverView";
import Api from "../../components/keullag/api";
import KeullagReview from "../../components/keullag/KeullagReview";

const KeullagPage = () => {
    const sections = ["header", "overview", "api", "review"]
    const sectionRefs = {
        header: useRef(null),
        overview: useRef(null),
        api: useRef(null),
        // chating : useRef(null),
        review: useRef(null),
    };

    const implementSections = ["api"];

    // 현재 색션
    const [activeSection, setActiveSection] = useState("header");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries.find(entry => entry.isIntersecting);
                if (visibleEntry) {
                    setActiveSection(visibleEntry.target.id);
                }
            },
            {
                threshold: 0.5, // 50% 보이면 활성화하기
                rootMargin: "0px 0px -30% 0px", // 아래 여유 공간 확보
            } 
        );

        sections.forEach((id) => {
            const el = sectionRefs[id].current;
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [])

    
    return(
        <div className="
            w-full
            h-auto md:h-screen
            overflow-y-auto md:overflow-y-scroll
            scroll-smooth
            md:snap-y md:snap-mandatory
        ">
            <ProjectHeader
                onMoveToSection={(section) => {
                    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
                }}
                sections={implementSections}
            />

            {/* 현재 페이지 표시해주는 점 */}
            <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
                {sections.map((sec) => (
                    <button
                        key={sec}
                        onClick={() => sectionRefs[sec].current?.scrollIntoView({ behavior: "smooth" })}
                        className={`w-2 h-2 rounded-full transition-all duration-300
                            ${activeSection === sec ? "bg-black scale-150" : "bg-black opacity-50"}
                        `}
                    />
              ))}
            </div>

            {/* 내소개 */}
            <div ref={sectionRefs.header} 
                id="header"
                className="relative w-full
                        h-auto md:h-screen
                        flex flex-col justify-center items-center
                        snap-none md:snap-start
                        py-12 md:py-0" 
            >

                <h1 className={`absolute top-16 md:top-20 left-4
                    text-[2.5rem] md:text-[5rem] lg:text-[7rem]
                    font-extrabold text-black opacity-5 z-0 select-none
                    ${activeSection === "header" ? "animate-slide-in-left" : "opacity-0"}`
                }>
                    끌락끌락
                </h1>

                {/* 타이틀 박스 */}
                
                <div className="absolute top-24 md:top-36 left-6 md:left-40 md:w-[90%] lg:top-44 font-bold">
                    <span className="text-sm md:text-base lg:text-xl text-gray-600">
                        클라이밍 기록 관리 앱
                    </span>
                    <span className="text-blue-500 text-xl md:text-2xl lg:text-4xl"> 
                        끌락끌락 
                    </span>

                </div>
                    
                <KeullagHeader/>

            </div>

            {/* Overview Section */}
            <div
              ref={sectionRefs.overview}
              id="overview"
              className="
                relative w-full
                h-auto md:h-screen
                flex flex-col justify-center items-center
                snap-none md:snap-start
                py-12 md:py-0
              "
            >
                
                <h1 className={`absolute top-16 md:top-20 left-4
                    text-[2.5rem] md:text-[5rem] lg:text-[7rem]
                    font-extrabold text-black opacity-5 z-0 select-none
                    ${activeSection === "overview" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    OVERVIEW
                </h1>
                <div className="absolute top-24 md:top-36 left-6 md:left-40 md:w-[90%] lg:top-44 font-bold">
                    <span className="text-blue-500 text-xl md:text-2xl lg:text-4xl">
                        OVERVIEW
                    </span>
                </div>
                <KeullagOverView/>
                
            </div>
        
            {/* API Developmet */}
            <div ref={sectionRefs.api} className="relative w-full
                h-auto md:h-screen
                flex flex-col justify-center items-center
                snap-none md:snap-start
                py-12 md:py-0" id="api"
            >
                <h1 className={`
                    absolute top-16 md:top-20 left-4
                    text-[2.5rem] md:text-[5rem] lg:text-[7rem]
                    font-extrabold text-black opacity-5 z-0 select-none
                    ${activeSection === "api" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    API Development
                </h1>
                <div className="absolute top-24 md:top-36 left-6 md:left-40 md:w-[90%] lg:top-44 font-bold">
                    <span className="text-blue-500 text-xl md:text-2xl lg:text-4xl">
                        API Development
                    </span>
                </div>
                
                <Api/>

            </div>

            {/* 코드리뷰 */}
            {/* <div ref={sectionRefs.chating} className="relative overflow-hidden w-full h-screen snap-start flex flex-col justify-center items-center" id="chating">
                <h1 className={`absolute top-16 left-4 text-[8rem] font-extrabold text-black opacity-5 z-0 select-none pointer-events-none leading-none
                    ${activeSection === "chating" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    OPEN CHATING
                </h1>
                <div className="w-[90%] text-4xl font-bold  mt-20 ml-48">
                    OPEN CHATING
                </div>
                
                <Chating/>

            </div> */}

            {/* REVIEW */}
            <div
                ref={sectionRefs.review}
                id="review"
                className="
                  relative w-full
                  h-auto md:h-screen
                  flex flex-col justify-center items-center
                  snap-none md:snap-start
                  py-12 md:py-0
                "
            >
                <h1
                  className={`
                    absolute top-16 md:top-20 left-4
                    text-[2.5rem] md:text-[5rem] lg:text-[7rem]
                    font-extrabold text-black opacity-5 z-0 select-none
                    ${activeSection === "review" ? "animate-slide-in-left" : "opacity-0"}
                  `}
                >
                    REVIEW
                </h1>
                <div className="absolute top-24 md:top-36 left-6 md:left-40 md:w-[90%] lg:top-44 font-bold">
                    <span className="text-blue-500 text-xl md:text-2xl lg:text-4xl">
                        REVIEW
                    </span>
                </div>

                <KeullagReview/>
    
            </div>

        </div>
    )
}

export default KeullagPage;