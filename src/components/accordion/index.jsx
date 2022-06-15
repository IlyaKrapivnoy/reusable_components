import React from "react";
import { useToggle } from "../../hooks/useToggle";

const Accordion = (props) => {
  const { title, content } = props;
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  return (
    <div className="accordion">
      <AccordionHeader
        title={title}
        toggleExpand={toggleExpand}
        expand={expand}
      />
      <AccordionContent expand={expand} content={content} />
    </div>
  );
};

const AccordionHeader = (props) => {
  const { title, toggleExpand, expand } = props;
  return (
    <button onClick={toggleExpand}>
      {title} <span>{expand ? "-" : "+"}</span>
    </button>
  );
};

const AccordionContent = (props) => {
  const { expand, content } = props;
  return <>{expand && <div className="content">{content}</div>}</>;
};

export default Accordion;
