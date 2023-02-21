import { useState } from "react";
import { useToggle } from "../../hooks/useToggle";

const Editable = () => {
  const [inputValue, setInputValue] = useState("");
  const { status: editable, toggleStatus: toggleEditable } = useToggle(false);

  const handleInputValue = (e) => {
    setInputValue(e.target?.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleEditable();
  };

  return (
    <form onSubmit={handleSubmit}>
      {editable ? (
        <label>
          Title
          <input type="text" value={inputValue} onChange={handleInputValue} />
        </label>
      ) : (
        <>Title {inputValue}</>
      )}
      <br />
      <button onClick={toggleEditable}>{editable ? "Submit" : "Edit"}</button>
    </form>
  );
};

export default Editable;
