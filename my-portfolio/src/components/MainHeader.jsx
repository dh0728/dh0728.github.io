import { useState } from "react";
import { Menu, X } from "lucide-react"; // 햄버거 아이콘 (lucide-react 설치 필요)
import logoImg from "../assets/images/logo.png";

const MainHeader = ({ onMoveToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "ABOUT ME", target: "about" },
    { name: "CAREER", target: "career" },
    { name: "SKILL", target: "skill" },
    { name: "PROJECT", target: "pjt" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md z-50 shadow-md">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-6">
        {/* 로고 */}
        <img
          src={logoImg}
          alt="로고"
          className="w-24 md:w-28 lg:w-40 cursor-pointer hover:scale-105 transition"
          onClick={() => onMoveToSection("about")}
        />

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex space-x-10 text-xl font-bold">
          {menuItems.map((item) => (
            <button
              key={item.target}
              className="hover:text-[#3BA9F2] transition hover:scale-105"
              onClick={() => onMoveToSection(item.target)}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* 모바일 메뉴 (드롭다운) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-lg flex flex-col items-center py-4 space-y-4">
          {menuItems.map((item) => (
            <button
              key={item.target}
              className="text-lg font-semibold hover:text-[#3BA9F2] transition"
              onClick={() => {
                onMoveToSection(item.target);
                setIsOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default MainHeader;
