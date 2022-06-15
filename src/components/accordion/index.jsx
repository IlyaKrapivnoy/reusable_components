import React, { useState } from "react";

const Accordion = () => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);
  console.log(expand);

  return (
    <div>
      <button onClick={toggleExpand}>Header +</button>
      <div>this is content</div>
    </div>
  );
};

export default Accordion;
