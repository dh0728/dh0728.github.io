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
        <div className="w-full h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
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
                className="relative overflow-hidden w-full h-screen snap-start flex items-center" id="about">
                <AboutMe/>
            </div>

            {/* 주요 이력력 */}
            <div ref={sectionRefs.career} className="relative overflow-hidden w-full h-screen snap-start flex flex-col justify-center items-center " id="career">
                <h1 className={`absolute top-16 left-4 text-[8rem] font-extrabold text-black opacity-5 z-0 select-none pointer-events-none leading-none
                    ${activeSection === "career" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    CAREER
                </h1>
                <div className="w-[90%] text-4xl font-bold  mt-20 ml-48">
                    CAREER
                </div>
                <Career/>
            </div>
        
            {/* 스킬 */}
            <div ref={sectionRefs.skill} className="relative overflow-hidden w-full h-screen snap-start flex flex-col justify-center items-center" id="skill">
                <h1 className={`absolute top-16 left-4 text-[8rem] font-extrabold text-black opacity-5 z-0 select-none pointer-events-none leading-none
                    ${activeSection === "skill" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    SKILL
                </h1>
                <div className="w-[90%] text-4xl font-bold mt-4 mb-12 ml-48 ">
                    SKILL
                </div>
                <Skill/>
            </div>

            {/* pjt */}
            <div ref={sectionRefs.pjt} className="relative overflow-hidden w-full h-screen snap-start flex flex-col justify-center items-center" id="pjt">
                <h1 className={`absolute top-16 left-4 text-[8rem] font-extrabold text-black opacity-5 z-0 select-none pointer-events-none leading-none
                    ${activeSection === "pjt" ? "animate-slide-in-left" : "opacity-0"}
                `}>
                    PROJECT
                </h1>
                <div className="w-[90%] text-4xl font-bold mt-4 mb-12 ml-48 ">
                    PROJECT
                </div>
                <ProjectList/>
            </div>

        </div>

        
    );
}

export default MainPage;