import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import JavaScript from '../assets/images/JavaScript.png';
import Python from '../assets/images/Python.png';
import Java from '../assets/images/Java.png';
import Spring from '../assets/images/Spring.png';
import Django from '../assets/images/Django.png';
import Docker from '../assets/images/Docker.png';
import MySQL from '../assets/images/MySQL.png';
import MongoDB from '../assets/images/MongoDB.png';
import Redis from '../assets/images/Redis.png';
import HTML5 from '../assets/images/HTML5.png';
import CSS3 from '../assets/images/CSS3.png';
import ReactImg from '../assets/images/React.png';
import Vue from '../assets/images/Vue.js.png';
import Tailwind from '../assets/images/Tailwind_CSS.png';
import VscodeImg from '../assets/images/VScode.png';
import PyCharmImg from '../assets/images/PyCharm.png';
import IntelliJImg from '../assets/images/IntelliJ.png';
import GitHubImg from '../assets/images/GitHub.png';
import GitLabImg from '../assets/images/GitLab.png';

const Skill = () => {
  const lang = [
    { name: 'Java', icon: Java },
    { name: 'Python', icon: Python },
    { name: 'JavaScript', icon: JavaScript },
  ];

  const backendTools = [
    { name: 'Spring', icon: Spring },
    { name: 'Django', icon: Django },
    { name: 'Docker', icon: Docker },
  ];

  const dbTools = [
    { name: 'MySQL', icon: MySQL },
    { name: 'MongoDB', icon: MongoDB },
    { name: 'Redis', icon: Redis },
  ];

  const frontendTools = [
    { name: 'React', icon: ReactImg },
    { name: 'Tailwind', icon: Tailwind },
    { name: 'HTML5', icon: HTML5 },
    { name: 'CSS3', icon: CSS3 },
    { name: 'Vue.js', icon: Vue },
  ];

  const devTools = [
    { name: 'VS Code', icon: VscodeImg },
    { name: 'PyCharm', icon: PyCharmImg },
    { name: 'IntelliJ IDEA', icon: IntelliJImg },
    { name: 'GitHub', icon: GitHubImg },
    { name: 'GitLab', icon: GitLabImg },
  ];

  const skills = [
    { title: "개발 언어", list: lang },
    { title: "BE Tools", list: backendTools },
    { title: "DB Tools", list: dbTools },
    { title: "FE Tools", list: frontendTools },
    { title: "개발 도구", list: devTools }
  ];

  return (
    <div className="w-full min-w-0">
      <Swiper
        modules={[A11y, Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },       // 모바일: 1개씩
          768: { slidesPerView: 2 },     // 태블릿: 2개씩
          1024: { slidesPerView: 3 },    // PC: 3개씩
        }}
        className="portfolio-carousel w-full"
        a11y={{ containerMessage: "기술 목록", paginationBulletMessage: "기술 목록 {{index}}번 슬라이드로 이동" }}
      >
        {skills.map((section, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex h-full min-w-0 flex-col items-center rounded-2xl border-2 bg-white p-5 shadow-md sm:p-8">
              <div className="text-2xl font-bold mb-6 text-center">{section.title}</div>
              <div className={`grid w-full ${section.list.length > 2 ? "grid-cols-2" : "grid-cols-1"} gap-6 place-items-center py-4`}>
                {section.list.map((tool, j) => (
                  <div key={j} className="flex flex-col items-center">
                    <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />
                    <div className="mt-1 text-center text-sm font-semibold">{tool.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skill;
