import { useEffect, useId, useRef } from "react";
import { Expand, X } from "lucide-react";

const ProjectFigure = ({ src, alt, caption, portrait = false }) => {
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const previousOverflow = useRef(null);
  const captionId = useId();

  const restoreScroll = () => {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  };

  useEffect(() => () => restoreScroll(), []);

  const openImage = () => {
    previousOverflow.current = document.body.style.overflow;
    dialogRef.current.showModal();
    document.body.style.overflow = "hidden";
  };

  return (
    <figure className={`project-figure ${portrait ? "project-figure--portrait" : ""}`}>
      <button ref={triggerRef} type="button" onClick={openImage} className="project-figure__button" aria-label={`${alt} 확대 보기`} aria-haspopup="dialog">
        <img src={src} alt={alt} loading="lazy" decoding="async" />
        <span className="project-figure__expand"><Expand size={15} aria-hidden="true" /> 확대 보기</span>
      </button>
      <figcaption>{caption}</figcaption>
      <dialog
        ref={dialogRef}
        className="project-image-dialog"
        aria-label={`${alt} 확대 이미지`}
        aria-describedby={captionId}
        onClose={() => { restoreScroll(); triggerRef.current?.focus(); }}
        onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current.close(); }}
      >
        <div className="project-image-dialog__content">
          <div className="project-image-dialog__toolbar">
            <p id={captionId}>{caption}</p>
            <button type="button" autoFocus onClick={() => dialogRef.current.close()} aria-label="확대 이미지 닫기"><X aria-hidden="true" size={24} /></button>
          </div>
          <img src={src} alt={alt} />
        </div>
      </dialog>
    </figure>
  );
};

export default ProjectFigure;
