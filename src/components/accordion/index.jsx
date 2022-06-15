import React, { useState } from "react";
import { useToggle } from "../../hooks/useToggle";

const Accordion = (props) => {
  const { title, content } = props;
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  return (
    <div className="accordion">
      <button onClick={toggleExpand}>
        {title} <span>{expand ? "-" : "+"}</span>
      </button>
      {expand && <div className="content">{content}</div>}
    </div>
  );
};

export default Accordion;
