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
        <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
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
                className="relative overflow-hidden w-full h-screen snap-start flex flex-col justify-center items-center " id="header">

                <h1 className={`absolute top-16 left-4 text-[8rem] font-extrabold text-black opacity-5 z-0 select-none pointer-events-none leading-none
                    ${activeSection === "header" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    CodeNova
                </h1>

                {/* 타이틀 박스 */}
                
                <div className="w-[90%] text-4xl font-bold  mt-20 ml-30">
                    <span className="text-2xl">
                        코딩 실력을 키우는 실전 타자 플랫폼
                    </span>
                    <span> CodeNova </span>

                </div>
                    
                <CodeNovaHeader/>

            </div>

            {/* 주요 이력 */}
            <div ref={sectionRefs.overview} className="relative overflow-hidden w-full h-screen snap-start flex flex-col justify-center items-center " id="overview">
                <h1 className={`absolute top-16 left-4 text-[8rem] font-extrabold text-black opacity-5 z-0 select-none pointer-events-none leading-none
                    ${activeSection === "overview" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    OVERVIEW
                </h1>
                <div className="w-[90%] text-4xl font-bold  mt-20 ml-48">
                    OVERVIEW
                </div>

                <CodeNovaOverView/>
                
            </div>
        
            {/* 싱글모드드 */}
            <div ref={sectionRefs.singleMode} className="relative overflow-hidden w-full h-screen snap-start flex flex-col justify-center items-center" id="singleMode">
                <h1 className={`absolute top-16 left-4 text-[8rem] font-extrabold text-black opacity-5 z-0 select-none pointer-events-none leading-none
                    ${activeSection === "singleMode" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    SINGLEMODE
                </h1>
                <div className="w-[90%] text-4xl font-bold mt-20  ml-48 ">
                    SINGLEMODE
                </div>
                
                <SingleMode/>

            </div>

            {/* 코드리뷰 */}
            <div ref={sectionRefs.codeReview} className="relative overflow-hidden w-full h-screen snap-start flex flex-col justify-center items-center" id="codeReview">
                <h1 className={`absolute top-16 left-4 text-[8rem] font-extrabold text-black opacity-5 z-0 select-none pointer-events-none leading-none
                    ${activeSection === "codeReview" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    CODEREVIEW
                </h1>
                <div className="w-[90%] text-4xl font-bold  mt-20 ml-48">
                    CODEREVIEW
                </div>
                
                <CodeReview/>

            </div>

            {/* pjt */}
            <div ref={sectionRefs.review} className="relative overflow-hidden w-full h-screen snap-start flex flex-col justify-center items-center " id="review">
                <h1 className={`absolute top-16 left-4 text-[8rem] font-extrabold text-black opacity-5 z-0 select-none pointer-events-none leading-none
                    ${activeSection === "review" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    REVIEW
                </h1>
                <div className="w-[90%] text-4xl font-bold  mt-20 ml-48 ">
                    REVIEW
                </div>

                <CodeNovaReview/>
    
            </div>

        </div>
    )
}

export default CodeNovaPage;