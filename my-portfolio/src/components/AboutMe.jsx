import profileImg from "../assets/images/profileImg.jpg";
import { createElement } from "react";
import { Mail, Github, Globe } from "lucide-react";

const contacts = [
  { label: "Email", href: "mailto:dustkscjswo@naver.com", Icon: Mail },
  { label: "GitHub", href: "https://github.com/dh0728", Icon: Github, external: true },
  { label: "Blog", href: "https://gyeongsangman.tistory.com/", Icon: Globe, external: true },
];
const tags = ["#백엔드", "#웹개발자", "#파이썬 좋아", "#자바도 좋아", "#열정맨", "#중꺽그마", "#ISFP", "#축구가 취미", "#코딩이 취미", "#운동 좋아"];

const AboutMe = () => (
  <div className="flex w-full min-w-0 flex-col items-center justify-center gap-8 md:flex-row md:items-start lg:gap-12">
    <img src={profileImg} alt="송동현 프로필" className="h-auto w-32 shrink-0 rounded-xl object-contain shadow-2xl md:w-48 lg:w-64" />
    <div className="w-full min-w-0 max-w-2xl">
      <h1 className="mb-6 text-center text-lg font-bold leading-relaxed text-gray-800 md:text-xl lg:text-2xl">
        <span className="text-blue-500">요구사항</span>을 기술로 해석하고,<br />
        가장 <span className="text-blue-500">효율적인 구조</span>로 풀어내는 개발자 <span className="text-blue-500">송동현</span>입니다
      </h1>
      <div className="flex flex-wrap justify-center gap-3">
        {contacts.map(({ label, href, Icon, external }) => (
          <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="flex min-h-[3rem] min-w-[7rem] items-center justify-center gap-2 rounded-xl bg-blue-500 px-4 py-2 text-white shadow-sm transition hover:bg-blue-400 hover:shadow-md">
            {createElement(Icon, { size: 22, className: "shrink-0", "aria-hidden": true })}
            <span>{label}</span>
          </a>
        ))}
      </div>
      <div className="mt-8 hidden flex-wrap justify-center gap-3 md:flex">
        {tags.map((tag) => <span key={tag} className="rounded-full bg-blue-200 px-4 py-1 text-sm font-medium text-blue-700 shadow-sm">{tag}</span>)}
      </div>
    </div>
  </div>
);

export default AboutMe;
