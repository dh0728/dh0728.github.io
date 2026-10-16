import { ArrowRight, ArrowDown, Lightbulb } from "lucide-react";

export const FlowArrow = ({ down = false }) => down
  ? <ArrowDown className="review-flow-arrow review-flow-arrow--down" size={20} aria-hidden="true" />
  : <ArrowRight className="review-flow-arrow" size={20} aria-hidden="true" />;

export const FlowNode = ({ icon: Icon, title, detail, muted = false }) => (
  <div className={`review-flow-node ${muted ? "review-flow-node--muted" : ""}`}>
    {Icon && <Icon size={23} strokeWidth={1.7} aria-hidden="true" />}
    <strong>{title}</strong>
    {detail && <span>{detail}</span>}
  </div>
);

const ProjectReview = ({ title, summary, visualTitle, children, contributions, lesson, next }) => (
  <div className="project-review">
    <div className="project-review__intro">
      <p className="project-eyebrow">PROJECT TAKEAWAY</p>
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
    <div className="project-review__body">
      <figure className="project-review__visual">
        <figcaption>{visualTitle}<span>핵심 흐름을 요약한 도식</span></figcaption>
        {children}
      </figure>
      <div className="project-review__notes">
        <div>
          <h4 className="project-review__label">내가 기여한 것</h4>
          <ul className="project-review__contributions">
            {contributions.map((item) => <li key={item.title}><strong>{item.title}</strong><p>{item.description}</p></li>)}
          </ul>
        </div>
        <div className="project-review__lesson">
          <h4><Lightbulb size={18} aria-hidden="true" /> 배운 점</h4>
          <p>{lesson}</p>
        </div>
      </div>
    </div>
    <p className="project-review__next"><span>다음 개선</span>{next}</p>
  </div>
);

export default ProjectReview;
