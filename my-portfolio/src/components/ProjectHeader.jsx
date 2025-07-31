import logoImg from "../assets/images/logo.png";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Menu, X } from "lucide-react"; // 햄버거, 닫기 아이콘

const ProjectHeader = ({ onMoveToSection, sections }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDropdownEnter = () => setShowDropdown(true);
  const handleDropdownLeave = () => setShowDropdown(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
        {/* 로고 */}
        <img
          src={logoImg}
          alt="로고이미지"
          className="w-24 md:w-28 lg:w-40 cursor-pointer hover:scale-105 transition"
          onClick={() => navigate("/")}
        />

        {/* PC/태블릿 메뉴 */}
        <nav className="hidden md:flex items-center text-gray-800">
          <div
            className="font-bold text-xl lg:text-2xl mr-6 lg:mr-12 cursor-pointer hover:text-[#3BA9F2] hover:scale-105 transition"
            onClick={() => onMoveToSection('header')}
          >
            HEADER
          </div>

          <div
            className="font-bold text-xl lg:text-2xl mr-6 lg:mr-12 cursor-pointer hover:text-[#3BA9F2] hover:scale-105 transition"
            onClick={() => onMoveToSection('overview')}
          >
            OVERVIEW
          </div>

          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="font-bold text-xl lg:text-2xl mr-6 lg:mr-12 cursor-pointer hover:text-[#3BA9F2] hover:scale-105 transition">
              IMPLEMENT
            </div>
            {showDropdown && (
              <div className="absolute top-full left-0 bg-white shadow-md rounded-md px-4 py-2 space-y-2 z-50">
                {sections?.map((section) => (
                  <div
                    key={section}
                    className="text-base cursor-pointer hover:text-[#3BA9F2] transition"
                    onClick={() => {
                      onMoveToSection(section);
                      setShowDropdown(false);
                    }}
                  >
                    {section.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="font-bold text-xl lg:text-2xl cursor-pointer hover:text-[#3BA9F2] hover:scale-105 transition"
            onClick={() => onMoveToSection('review')}
          >
            REVIEW
          </div>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 (슬라이드 다운) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col space-y-4 px-4 py-6">
          <button
            className="text-lg font-bold text-gray-800 hover:text-[#3BA9F2]"
            onClick={() => {
              onMoveToSection('header');
              setMobileMenuOpen(false);
            }}
          >
            HEADER
          </button>
          <button
            className="text-lg font-bold text-gray-800 hover:text-[#3BA9F2]"
            onClick={() => {
              onMoveToSection('overview');
              setMobileMenuOpen(false);
            }}
          >
            OVERVIEW
          </button>
          {/* Implement 섹션 드롭다운 없이 한 번에 표시 */}
          {sections?.map((section) => (
            <button
              key={section}
              className="text-lg font-bold text-gray-800 hover:text-[#3BA9F2]"
              onClick={() => {
                onMoveToSection(section);
                setMobileMenuOpen(false);
              }}
            >
              {section.toUpperCase()}
            </button>
          ))}
          <button
            className="text-lg font-bold text-gray-800 hover:text-[#3BA9F2]"
            onClick={() => {
              onMoveToSection('review');
              setMobileMenuOpen(false);
            }}
          >
            REVIEW
          </button>
        </div>
      )}
    </header>
  );
};

export default ProjectHeader;
