const ProjectFeature = ({ title, description, items, tags, children }) => (
  <div className="project-feature">
    <div className="project-feature__copy">
      <p className="project-eyebrow">MY CONTRIBUTION</p>
      <h3>{title}</h3>
      <p className="project-feature__description">{description}</p>
      <ol className="project-feature__list">
        {items.map((item, index) => (
          <li key={item.title}>
            <span className="project-feature__number" aria-hidden="true">0{index + 1}</span>
            <div><h4>{item.title}</h4><p>{item.description}</p></div>
          </li>
        ))}
      </ol>
      <ul className="project-tech-list" aria-label="사용 기술">
        {tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
    </div>
    <div className="project-feature__visual">{children}</div>
  </div>
);

export default ProjectFeature;
