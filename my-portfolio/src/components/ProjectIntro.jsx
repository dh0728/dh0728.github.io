import { Award, BarChart3, Calendar, Github, UserCog, Users, Youtube } from "lucide-react";

const ProjectIntro = ({ title, period, role, contribution, tech, awards = [], github, video, responsibilities, children }) => {
  const facts = [
    { label: "개발 기간", value: period, icon: Calendar },
    { label: "팀 구성", value: "6인 프로젝트", icon: Users },
    { label: "담당 역할", value: role, icon: UserCog },
    { label: "기여도", value: contribution, icon: BarChart3 },
  ];

  return (
    <div className="project-intro">
      <div className="project-intro__main">
        <div className="project-intro__info">
          <p className="project-eyebrow">PROJECT INFO</p>
          <h3>{title}</h3>
          <dl className="project-intro__facts">
            {facts.map(({ label, value, icon: Icon }) => (
              <div key={label}>
                <dt><Icon size={16} aria-hidden="true" />{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <ul className="project-tech-list" aria-label="사용 기술">
            {tech.map((item) => <li key={item}>{item}</li>)}
          </ul>
          {awards.length > 0 && (
            <div className="project-intro__awards">
              <h4><Award size={18} aria-hidden="true" />수상 내역</h4>
              <ul>{awards.map((award) => <li key={award}>{award}</li>)}</ul>
            </div>
          )}
          <div className="project-intro__links">
            <a href={github} target="_blank" rel="noopener noreferrer"><Github size={18} aria-hidden="true" />GitHub<span className="sr-only"> (새 탭)</span></a>
            <a href={video} target="_blank" rel="noopener noreferrer"><Youtube size={19} aria-hidden="true" />시연 영상<span className="sr-only"> (새 탭)</span></a>
          </div>
        </div>
        <div className="project-intro__visual">{children}</div>
      </div>
      <div className="project-intro__work">
        <p className="project-eyebrow">MY CONTRIBUTION</p>
        <h3>담당한 기능</h3>
        <ol className={`project-intro__responsibilities ${responsibilities.length === 4 ? "project-intro__responsibilities--four" : ""}`}>
          {responsibilities.map((item, index) => (
            <li key={item.title}>
              <div className="project-intro__work-title"><span aria-hidden="true">0{index + 1}</span><h4>{item.title}</h4></div>
              <ul>{item.items.map((detail) => <li key={detail}>{detail}</li>)}</ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ProjectIntro;
