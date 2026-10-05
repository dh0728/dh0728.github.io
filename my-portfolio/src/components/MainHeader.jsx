import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/images/logo.png";

const menuItems = [
  { name: "ABOUT ME", target: "about" },
  { name: "CAREER", target: "career" },
  { name: "SKILL", target: "skill" },
  { name: "PROJECT", target: "pjt" },
];

const MainHeader = ({ onMoveToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);

  const moveTo = (target) => {
    onMoveToSection(target);
    if (isOpen) toggleRef.current?.focus();
    setIsOpen(false);
  };

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full bg-white/90 shadow-md backdrop-blur-md"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <button type="button" aria-label="소개 섹션으로 이동" onClick={() => moveTo("about")} className="shrink-0 rounded-md p-1">
          <img src={logoImg} alt="" className="h-10 w-24 object-contain md:w-28 lg:w-40" />
        </button>
        <nav aria-label="주 메뉴" className="hidden items-center gap-5 text-base font-bold md:flex lg:gap-10 lg:text-xl">
          {menuItems.map((item) => (
            <button key={item.target} type="button" className="min-h-[2.75rem] rounded-md hover:text-blue-500" onClick={() => moveTo(item.target)}>
              {item.name}
            </button>
          ))}
        </nav>
        <button
          ref={toggleRef}
          type="button"
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={isOpen}
          aria-controls="main-mobile-menu"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-md md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <nav id="main-mobile-menu" aria-label="모바일 주 메뉴" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t bg-white px-4 py-3 md:hidden">
          {menuItems.map((item) => (
            <button key={item.target} type="button" className="block min-h-[2.75rem] w-full rounded-md text-lg font-semibold hover:bg-blue-50 hover:text-blue-500" onClick={() => moveTo(item.target)}>
              {item.name}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
