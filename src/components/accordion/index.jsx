import React, { createContext, useContext } from "react";
import { useToggle } from "../../hooks/useToggle";

// create context API
const AccordionContext = createContext();
const { Provider } = AccordionContext;

const Accordion = (props) => {
  const { title, content } = props;
  const { status: expand, toggleStatus: toggleExpand } = useToggle();

  const value = {
    expand,
    toggleExpand,
  };

  return (
    <Provider value={value}>
      <div className="accordion">
        <AccordionHeader title={title} />
        <AccordionContent content={content} />
      </div>
    </Provider>
  );
};

const AccordionHeader = (props) => {
  const { title } = props;
  const { expand, toggleExpand } = useContext(AccordionContext);

  return (
    <button onClick={toggleExpand}>
      {title} <span>{expand ? "-" : "+"}</span>
    </button>
  );
};

const AccordionContent = (props) => {
  const { content } = props;
  const { expand } = useContext(AccordionContext);

  return <>{expand && <div className="content">{content}</div>}</>;
};

export default Accordion;
