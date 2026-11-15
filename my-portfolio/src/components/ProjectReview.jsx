import { Fragment } from "react";
import { ArrowRight, ClipboardCheck, Lightbulb } from "lucide-react";

const ProjectReview = ({ title, steps, nextStep, reflection, regret }) => (
  <div className="project-review">
    <div className="project-review__intro">
      <p className="project-eyebrow">PROJECT TAKEAWAY</p>
      <h3>{title}</h3>
    </div>
    <div className="project-review__body">
      <figure className="project-review__visual">
        <figcaption>경험에서 다음 개선으로<span>회고를 요약한 도식</span></figcaption>
        <div className="review-growth">
          <p className="review-step-label">이번 프로젝트에서 넓힌 시야</p>
          <div className="review-growth__path">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Fragment key={step.title}>
                  {index > 0 && <ArrowRight className="review-flow-arrow" size={20} aria-hidden="true" />}
                  <div className="review-flow-node">
                    <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                    <strong>{step.title}</strong>
                    <span>{step.detail}</span>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className="review-growth__next">
            <ClipboardCheck size={24} aria-hidden="true" />
            <div>
              <p className="review-step-label">다음 프로젝트에서 보완할 점</p>
              <strong>{nextStep.title}</strong>
              <ul aria-label="다음 개선 키워드">{nextStep.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </div>
          </div>
        </div>
      </figure>
      <div className="project-review__reflections">
        <div className="project-review__reflection">
          <h4><Lightbulb size={20} aria-hidden="true" />회고</h4>
          <h5>{reflection.title}</h5>
          <p>{reflection.description}</p>
        </div>
        <div className="project-review__reflection">
          <h4><ClipboardCheck size={20} aria-hidden="true" />아쉬운 점</h4>
          <h5>{regret.title}</h5>
          <p>{regret.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectReview;
