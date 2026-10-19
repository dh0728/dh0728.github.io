const ProjectOverview = ({ title, description, features, children }) => (
  <div className="project-overview">
    <div className="project-overview__intro">
      <p className="project-eyebrow">SERVICE OVERVIEW</p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="project-overview__body">
      <div>
        <div className="project-overview__feature-heading"><h4>서비스 주요 기능</h4><span>팀 전체 구현 범위</span></div>
        <ul className="project-overview__features">
          {features.map(({ title: featureTitle, icon: Icon, items }) => (
            <li key={featureTitle}>
              <div className="project-overview__feature-title"><Icon size={20} strokeWidth={1.7} aria-hidden="true" /><h5>{featureTitle}</h5></div>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </li>
          ))}
        </ul>
      </div>
      <div className="project-overview__visual">{children}</div>
    </div>
  </div>
);

export default ProjectOverview;
