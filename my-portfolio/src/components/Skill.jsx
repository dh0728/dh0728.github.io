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
import React from '../assets/images/React.png';
import Vue from '../assets/images/Vue.js.png';
import Tailwind from '../assets/images/Tailwind_CSS.png';

import VscodeImg from '../assets/images/VSCode.png';
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
    ]

    const frontendTools = [
      { name: 'React', icon: React },
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
        { title : "개발 언어", list : lang},
        { title : "BE Tools", list : backendTools},
        { title : "DB Tools", list : dbTools},
        { title : "FE Tools", list : frontendTools},
        { title : "개발 도구", list : devTools}
    ]

    

    return (
      <div className="w-[90%] h-[55%] flex flex-wrap justify-center gap-8 items-start">
        {skills.map((items, i) => (
          <div key={i} className="w-[18%] min-w-[180px] border-2 rounded-3xl py-8 shadow-xl">
            <div className="text-2xl font-bold mb-6 text-center">{items.title}</div>

            {/* 도구 아이콘들 */}
            <div
              className={`grid ${
                items.list.length > 2 ? "grid-cols-2" : "grid-cols-1"
              } gap-6 place-items-center p-8`}
            >
              {items.list.map((tool, j) => (
                <div key={j} className="flex flex-col items-center">
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                  <div className="text-sm mt-1 font-semibold">{tool.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );

}

export default Skill;