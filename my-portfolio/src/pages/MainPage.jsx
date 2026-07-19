import MainHeader from "../components/MainHeader";
import Skill from "../components/Skill";
import AboutMe from "../components/AboutMe";
import Career from "../components/career";
import { useRef, useState, useEffect } from 'react';
import Footer from "../components/Footer";
import ProjectList from "../components/ProjectList";

const MainPage = () => {


    const sections = ["about", "career", "skill", "pjt"]
    const sectionRefs = {
        about: useRef(null),
        career: useRef(null),
        skill: useRef(null),
        pjt: useRef(null),
    };

    // 현재 색션
    const [activeSection, setActiveSection] = useState("about");

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
        <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth
        ">
            <MainHeader
                onMoveToSection={(section) => {
                    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
                }}
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
            <div ref={sectionRefs.about} 
                className="relative overflow-hidden w-full h-screen snap-start flex items-center
                           bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 
                " id="about">
                <AboutMe/>
            </div>

            {/* 주요 이력 */}
            <div ref={sectionRefs.career} className="relative overflow-hidden w-full h-screen snap-start flex flex-col items-center pt-28 md:pt-32" id="career">
                <h1 className={`absolute top-20 left-4 text-[5rem] md:text-[7rem] font-extrabold text-black opacity-5 z-0 select-none pointer-events-none leading-none
                    ${activeSection === "career" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    CAREER
                </h1>
                <div className="relative z-10 self-start ml-6 md:ml-24 text-3xl md:text-4xl font-bold text-blue-500 shrink-0">
                    CAREER
                </div>
                <div className="w-full flex-1 min-h-0 flex items-center justify-center">
                    <Career/>
                </div>
            </div>

            {/* 스킬 */}
            <div ref={sectionRefs.skill} className="relative overflow-hidden w-full h-screen snap-start flex flex-col items-center pt-28 md:pt-32" id="skill">
                <h1 className={`absolute top-20 left-4 text-[5rem] md:text-[7rem] font-extrabold text-black opacity-5 z-0 select-none pointer-events-none leading-none
                    ${activeSection === "skill" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    SKILL
                </h1>
                <div className="relative z-10 self-start ml-6 md:ml-24 text-3xl md:text-4xl font-bold text-blue-500 shrink-0">
                    SKILL
                </div>
                <div className="w-full flex-1 min-h-0 flex items-center justify-center">
                    <Skill/>
                </div>
            </div>

            {/* pjt */}
            <div ref={sectionRefs.pjt} className="relative overflow-hidden w-full h-screen snap-start flex flex-col items-center pt-28 md:pt-32" id="pjt">
                <h1 className={`absolute top-20 left-4 text-[5rem] md:text-[7rem] font-extrabold text-black opacity-5 z-0 select-none pointer-events-none leading-none
                    ${activeSection === "pjt" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    PROJECT
                </h1>
                <div className="relative z-10 self-start ml-6 md:ml-24 text-3xl md:text-4xl font-bold text-blue-500 shrink-0">
                    PROJECT
                </div>
                <div className="w-full flex-1 min-h-0 flex items-center justify-center">
                    <ProjectList/>
                </div>
            </div>

        </div>

        
    );
}

export default MainPage;