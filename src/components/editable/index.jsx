import { useState } from "react";

const Editable = () => {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleEditable = () => setEditable((prevEditable) => !prevEditable);
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
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
    </div>
  );
};

export default Editable;
