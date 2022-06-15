import React, { useState } from "react";

const Accordion = () => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);

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
