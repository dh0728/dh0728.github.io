import { Calendar, Users, Laptop, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Project = ({ img, title, content, team, myFunc, date, path }) => (
  <Link to={path} aria-label={title + " 프로젝트 자세히 보기"} className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border-2 bg-white shadow-md transition hover:border-blue-300 hover:shadow-xl">
    <img src={img} alt={title + " 프로젝트 화면"} className="aspect-video w-full object-cover" loading="lazy" />
    <div className="flex flex-1 flex-col gap-3 p-5">
      <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
      <p className="text-sm text-gray-700">{content}</p>
      <div className="flex items-start gap-2 text-xs text-gray-700">
        <Calendar className="h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
        <span>기간 : {date}</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-700">
        <Users className="h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
        <span>팀 구성 : {team}명</span>
      </div>
      <div className="flex items-center gap-2 text-xs text-gray-700">
        <Laptop className="h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
        <span>역할 :</span>
      </div>
      <ul className="flex flex-wrap gap-2">
        {myFunc.map((item) => <li key={item} className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">{item}</li>)}
      </ul>
      <span className="mt-auto flex items-center justify-end gap-1 pt-3 text-sm font-semibold text-blue-600">
        자세히 보기 <ArrowUpRight size={18} aria-hidden="true" />
      </span>
    </div>
  </Link>
);

export default Project;
