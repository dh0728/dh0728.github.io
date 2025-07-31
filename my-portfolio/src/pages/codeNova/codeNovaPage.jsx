import { useState, useRef, useEffect } from "react";
import ProjectHeader from "../../components/ProjectHeader";
import CodeNovaHeader from "../../components/codeNova/CodeNovaHeader";
import CodeNovaOverView from "../../components/codeNova/CodeNovaOverView";
import SingleMode from "../../components/codeNova/SingleMode";
import CodeReview from "../../components/codeNova/CodeReview";
import CodeNovaReview from "../../components/codeNova/CodeNovaReview";

const CodeNovaPage = () => {

   
    const sections = ["header", "overview", "singleMode", "codeReview", "review"]
    const sectionRefs = {
        header: useRef(null),
        overview: useRef(null),
        singleMode: useRef(null),
        codeReview : useRef(null),
        review: useRef(null),
    };

    const implementSections = ["singleMode", "codeReview"];

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
        <div
            className="
              w-full
              h-auto md:h-screen
              overflow-y-auto md:overflow-y-scroll
              scroll-smooth
              md:snap-y md:snap-mandatory
            "
        >
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
            <div
                ref={sectionRefs.header}
                id="header"
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
                        ${activeSection === "header" ? "animate-slide-in-left" : "opacity-0"}
                      `}
                >
                  CODENOVA
                </h1>

                {/* 타이틀 박스 */}
                
                <div className="absolute top-24 md:top-36 left-6 md:left-40 md:w-[90%] lg:top-44 font-bold">
                    <span className="text-sm md:text-base lg:text-xl text-gray-600">
                        코딩 실력을 키우는 실전 타자 플랫폼
                    </span>
                    <span className="text-blue-500 text-xl md:text-2xl lg:text-4xl">
                        CodeNova
                    </span>

                </div>
                    
                <CodeNovaHeader/>

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
                    py-12 md:py-0"
            >
                <h1
                    className={`
                        absolute top-16 md:top-20 left-4
                        text-[2.5rem] md:text-[5rem] lg:text-[7rem]
                        font-extrabold text-black opacity-5 z-0 select-none
                        ${activeSection === "overview" ? "animate-slide-in-left" : "opacity-0"}
                        `}
                >
                    OVERVIEW
                </h1>
                <div className="absolute top-24 md:top-36 left-6 md:left-40 md:w-[90%] lg:top-44 font-bold">
                    <span className="text-blue-500 text-xl md:text-2xl lg:text-4xl">
                        OVERVIEW
                    </span>
                </div>

                <CodeNovaOverView/>
                
            </div>
        
            {/* 싱글모드드 */}
            <div ref={sectionRefs.singleMode} 
                className="
                    relative w-full
                    h-auto md:h-screen
                    flex flex-col justify-center items-center
                    snap-none md:snap-start
                    py-12 md:py-0" 
                id="singleMode"
            >
                
                <h1 className={`
                    absolute top-16 md:top-20 left-4
                    text-[2.5rem] md:text-[5rem] lg:text-[7rem]
                    font-extrabold text-black opacity-5 z-0 select-none
                    ${activeSection === "singleMode" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    SINGLEMODE
                </h1>
                <div className="absolute top-24 md:top-36 left-6 md:left-40 md:w-[90%] lg:top-44 font-bold">
                    <span className="text-blue-500 text-xl md:text-2xl lg:text-4xl">
                        SINGLEMODE
                    </span>
                </div>
                
                <SingleMode/>

            </div>

            {/* 코드리뷰 */}
            <div ref={sectionRefs.codeReview} 
                className="
                    relative w-full
                    h-auto md:h-screen
                    flex flex-col justify-center items-center
                    snap-none md:snap-start
                    py-12 md:py-0" 
                id="codeReview"
            >
                <h1 className={`absolute top-16 md:top-20 left-4
                                text-[2.5rem] md:text-[5rem] lg:text-[7rem]
                                font-extrabold text-black opacity-5 z-0 select-none
                    ${activeSection === "codeReview" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    CODEREVIEW
                </h1>
                <div className="absolute top-24 md:top-36 left-6 md:left-40 md:w-[90%] lg:top-44 font-bold">
                    <span className="text-blue-500 text-xl md:text-2xl lg:text-4xl">
                        CODEREVIEW
                    </span>
                </div>
                
                <CodeReview/>

            </div>

            {/* Review Section */}
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

                <CodeNovaReview/>
    
            </div>

        </div>
    )
}

export default CodeNovaPage;