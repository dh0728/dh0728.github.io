import logoImg from "../assets/images/logo.png"
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

const ProjectHeader = ({ onMoveToSection, sections }) => {

    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const handleDropdownEnter = () => setShowDropdown(true);
    const handleDropdownLeave = () => setShowDropdown(false);


    return(
        <div className="fixed top-0 left-0 w-full h-[12%] flex items-center px-2 bg-white/50 z-10">

            {/*  logo */}
            <img 
                src={logoImg} 
                alt="로고이미지" 
                className="w-[12%] cursor-pointer transition-all duration-200 hover:text-[#3BA9F2] hover:scale-105"
                onClick={() => navigate("/")}
            />

            <div className="w-[40%]">

            </div>
            {/* PROFILE */}
            <div className=" font-bold text-2xl mr-12 cursor-pointer transition-all duration-200 hover:text-[#3BA9F2] hover:scale-105"
                onClick={() => onMoveToSection('header')}
            >
                HEADER
            </div>

            <div className=" font-bold text-2xl mr-12 cursor-pointer transition-all duration-200 hover:text-[#3BA9F2] hover:scale-105"
                onClick={() => onMoveToSection('overview')}
            >
                OVERVIEW
            </div>

            <div
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
            >
                <div className=" font-bold text-2xl mr-12 cursor-pointer transition-all duration-200 hover:text-[#3BA9F2] hover:scale-105">
                    IMPLEMENT
                </div>

                {showDropdown && (
                    <div className="absolute top-full left-0 bg-white shadow-md rounded-md px-4 py-2 space-y-2 z-50">
                        {sections?.map((section) => (
                            <div
                                key={section}
                                className="text-base cursor-pointer hover:text-[#3BA9F2] transition"
                                onClick={() => {
                                    onMoveToSection(section)
                                    setShowDropdown(false)
                                }}
                            >
                                {section.toUpperCase()}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* 리뷰뷰 */}
            <div className=" font-bold text-2xl cursor-pointer transition-all duration-200 hover:text-[#3BA9F2] hover:scale-105"
                onClick={() => onMoveToSection('review')}
            >
                REVIEW
            </div>
            {/*  */}


        </div>
    );
}

export default ProjectHeader;