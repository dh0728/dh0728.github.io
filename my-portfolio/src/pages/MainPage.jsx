import MainHeader from "../components/MainHeader";
import Skill from "../components/Skill";
import AboutMe from "../components/AboutMe";
import Career from "../components/career";
import { useRef } from 'react';

const MainPage = () => {

    const aboutRef = useRef(null);
    const careerRef = useRef(null);
    const skillRef = useRef(null);
    
    return(
        <div className="w-full h-screen">
            <MainHeader
                onMoveToSection={(section) => {
                    if (section === 'about') aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
                    if (section === 'career') careerRef.current?.scrollIntoView({ behavior: 'smooth' });
                    if (section === 'skill') skillRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}
            />
            
            {/* 내소개 */}
            <div ref={aboutRef} className="w-full h-[70%]" id="aboutMe">
                <AboutMe/>
            </div>

            
            <div ref={careerRef} className="w-full h-auto flex flex-col justify-center items-center mt-32" id="career">
                <div className="w-[90%] text-4xl font-bold mb-4 ml-10">
                    주요이력
                </div>
                <Career/>
            </div>
        
            {/* 스킬 */}
            <div ref={skillRef} className="w-full h-auto flex flex-col justify-center items-center mt-32" id="skiil">
                <div className="w-[90%] text-4xl font-bold mb-4 ml-10">
                    스킬
                </div>
                <Skill/>
            </div>

        </div>

        
    );
}

export default MainPage;