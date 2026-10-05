import { useCallback, useEffect, useRef, useState } from "react";

const SectionPage = ({ sections, Header: headerComponent, implementSections = [] }) => {
  const Header = headerComponent;
  const sectionRefs = useRef({});
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    let frame;
    const updateActiveSection = () => {
      const marker = Math.min(window.innerHeight * 0.35, 240);
      let current = sections[0].id;
      for (const section of sections) {
        if (sectionRefs.current[section.id]?.getBoundingClientRect().top <= marker) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [sections]);

  const moveToSection = useCallback((id) => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    sectionRefs.current[id]?.scrollIntoView({
      behavior: reducedMotion ? "instant" : "smooth",
      block: "start",
    });
  }, []);

  return (
    <>
      <Header onMoveToSection={moveToSection} sections={implementSections} />
      <nav aria-label="섹션 바로가기" className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col lg:flex">
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            aria-label={`${section.label} 섹션으로 이동`}
            aria-current={activeSection === section.id ? "location" : undefined}
            onClick={() => moveToSection(section.id)}
            className="flex h-11 w-11 items-center justify-center rounded-full"
          >
            <span className={`h-2 w-2 rounded-full bg-black transition ${activeSection === section.id ? "scale-150" : "opacity-40"}`} />
          </button>
        ))}
      </nav>
      <main>
        {sections.map(({ id, label, title, subtitle, content, background = "" }) => (
          <section
            key={id}
            id={id}
            aria-label={label}
            ref={(element) => { sectionRefs.current[id] = element; }}
            className={`relative flex min-h-[100svh] w-full flex-col justify-center px-4 pb-12 pt-28 sm:px-8 lg:px-16 lg:pb-16 lg:pt-32 ${background}`}
          >
            <div className="relative mx-auto w-full min-w-0 max-w-7xl">
              {title && (
                <div className="relative mb-8 min-w-0 md:mb-12">
                  <span aria-hidden="true" className="pointer-events-none absolute -top-8 left-0 max-w-full overflow-hidden whitespace-nowrap text-5xl font-extrabold text-black/5 md:text-7xl">
                    {title}
                  </span>
                  <h2 className="relative break-words text-2xl font-bold text-blue-500 md:text-4xl">{title}</h2>
                  {subtitle && <p className="relative mt-3 text-sm font-semibold text-gray-600 md:text-base">{subtitle}</p>}
                </div>
              )}
              {content}
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default SectionPage;
