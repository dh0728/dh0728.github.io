import { useState, useRef, useEffect } from "react";
import ProjectHeader from "../../components/ProjectHeader";
import EcofundiaHeader from "../../components/ecofundia/EcofundiaHeader";
import EcofundiaOverView from "../../components/ecofundia/EcofundiaOverView";
import MsaArch from "../../components/ecofundia/MsaArch";
import Chating from "../../components/ecofundia/Chating";
import EcofundiaReview from "../../components/ecofundia/EcofundiaReview";

const EcofundiaPage = () => {
  const sections = ["header", "overview", "msa", "chating", "review"];
  const sectionRefs = {
    header: useRef(null),
    overview: useRef(null),
    msa: useRef(null),
    chating: useRef(null),
    review: useRef(null),
  };

  const implementSections = ["msa", "chating"];
  const [activeSection, setActiveSection] = useState("header");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -30% 0px",
      }
    );

    sections.forEach((id) => {
      const el = sectionRefs[id].current;
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
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
          sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
        }}
        sections={implementSections}
      />

      {/* 페이지 위치 표시 (오른쪽 점) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {sections.map((sec) => (
          <button
            key={sec}
            onClick={() =>
              sectionRefs[sec].current?.scrollIntoView({ behavior: "smooth" })
            }
            className={`w-2 h-2 rounded-full transition-all duration-300
              ${activeSection === sec ? "bg-black scale-150" : "bg-black opacity-50"}
            `}
          />
        ))}
      </div>

      {/* Header Section */}
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
          Ecofundia
        </h1>

        <div className="absolute top-24 md:top-36 left-6 md:left-40 md:w-[90%] lg:top-44 font-bold">
          <span className="text-sm md:text-base lg:text-xl text-gray-600">
            친환경 클라우드 펀딩 플랫폼
          </span>
          <span className="text-blue-500 text-xl md:text-2xl lg:text-4xl">
            Ecofundia
          </span>
        </div>

        <EcofundiaHeader />
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
          py-12 md:py-0
        "
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
        <EcofundiaOverView />
      </div>

      {/* MSA Section */}
      <div
        ref={sectionRefs.msa}
        id="msa"
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
            ${activeSection === "msa" ? "animate-slide-in-left" : "opacity-0"}
          `}
        >
          MSA
        </h1>
        <div className="absolute top-24 md:top-36 left-6 md:left-40 md:w-[90%] lg:top-44 font-bold">
            <span className="text-blue-500 text-xl md:text-2xl lg:text-4xl">
                MSA
            </span>
        </div>
        <MsaArch />
      </div>

      {/* Open Chat Section */}
      <div
        ref={sectionRefs.chating}
        id="chating"
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
            ${activeSection === "chating" ? "animate-slide-in-left" : "opacity-0"}
          `}
        >
          OPEN CHATING
        </h1>
        <div className="absolute top-24 md:top-36 left-6 md:left-40 md:w-[90%] lg:top-44 font-bold">
            <span className="text-blue-500 text-xl md:text-2xl lg:text-4xl">
                OPEN CHATING
            </span>
        </div>
        <Chating />
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
        <EcofundiaReview />
      </div>
    </div>
  );
};

export default EcofundiaPage;
