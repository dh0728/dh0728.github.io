import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/images/logo.png";

const sectionLabels = { singleMode: "SINGLE MODE", codeReview: "CODE REVIEW", msa: "MSA", chating: "OPEN CHATTING", api: "API" };

const ProjectHeader = ({ onMoveToSection, sections = [] }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const implementButtonRef = useRef(null);
  const mobileButtonRef = useRef(null);
  const mobileItems = ["header", "overview", ...sections, "review"];
  const labelFor = (section) => sectionLabels[section] || section.toUpperCase();

  useEffect(() => {
    if (!showDropdown) return;
    const closeOutside = (event) => {
      if (!dropdownRef.current?.contains(event.target)) setShowDropdown(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [showDropdown]);

  const moveTo = (section) => {
    onMoveToSection(section);
    if (showDropdown) implementButtonRef.current?.focus();
    if (mobileMenuOpen) mobileButtonRef.current?.focus();
    setShowDropdown(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full bg-white/90 shadow-md backdrop-blur-md"
      onKeyDown={(event) => {
        if (event.key !== "Escape") return;
        if (showDropdown) implementButtonRef.current?.focus();
        if (mobileMenuOpen) mobileButtonRef.current?.focus();
        setShowDropdown(false);
        setMobileMenuOpen(false);
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <Link to="/" aria-label="포트폴리오 홈으로 이동" className="shrink-0 rounded-md p-1">
          <img src={logoImg} alt="" className="h-10 w-24 object-contain md:w-28 lg:w-40" />
        </Link>
        <nav aria-label="프로젝트 메뉴" className="hidden items-center gap-5 text-base font-bold text-gray-800 md:flex lg:gap-10 lg:text-xl">
          {["header", "overview"].map((section) => (
            <button key={section} type="button" onClick={() => moveTo(section)} className="min-h-[2.75rem] rounded-md hover:text-blue-500">
              {labelFor(section)}
            </button>
          ))}
          <div
            ref={dropdownRef}
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setShowDropdown(false);
            }}
          >
            <button
              ref={implementButtonRef}
              type="button"
              aria-expanded={showDropdown}
              aria-controls="implement-menu"
              onClick={() => setShowDropdown(!showDropdown)}
              className="min-h-[2.75rem] rounded-md hover:text-blue-500"
            >
              IMPLEMENT
            </button>
            {showDropdown && (
              <div id="implement-menu" className="absolute right-0 top-full min-w-[11rem] rounded-lg bg-white p-2 text-sm shadow-lg">
                {sections.map((section) => (
                  <button key={section} type="button" onClick={() => moveTo(section)} className="block min-h-[2.75rem] w-full whitespace-nowrap rounded-md px-3 text-left hover:bg-blue-50 hover:text-blue-500">
                    {labelFor(section)}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button type="button" onClick={() => moveTo("review")} className="min-h-[2.75rem] rounded-md hover:text-blue-500">REVIEW</button>
        </nav>
        <button
          ref={mobileButtonRef}
          type="button"
          aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileMenuOpen}
          aria-controls="project-mobile-menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-md md:hidden"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <nav id="project-mobile-menu" aria-label="모바일 프로젝트 메뉴" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t bg-white px-4 py-3 md:hidden">
          {mobileItems.map((section) => (
            <button key={section} type="button" onClick={() => moveTo(section)} className="block min-h-[2.75rem] w-full rounded-md text-lg font-semibold hover:bg-blue-50 hover:text-blue-500">
              {labelFor(section)}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default ProjectHeader;
