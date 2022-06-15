import React, { useState } from "react";
import { useToggle } from "../../hooks/useToggle";

const Accordion = () => {
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  return (
    <div className="accordion">
      <button onClick={toggleExpand}>
        Header <span>{expand ? "-" : "+"}</span>
      </button>
      {expand && <div className="content">this is content</div>}
    </div>
  );
};

export default Accordion;
