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
        <AccordionHeader>{title}</AccordionHeader>
        <AccordionContent>{content}</AccordionContent>
      </div>
    </Provider>
  );
};

const AccordionHeader = ({ children }) => {
  const { expand, toggleExpand } = useContext(AccordionContext);

  return (
    <button onClick={toggleExpand}>
      {children} <span>{expand ? "-" : "+"}</span>
    </button>
  );
};

const AccordionContent = ({ children }) => {
  const { expand } = useContext(AccordionContext);

  return <>{expand && <div className="content">{children}</div>}</>;
};

export default Accordion;
