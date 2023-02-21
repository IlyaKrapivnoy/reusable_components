import { useState } from "react";

export const useToggle = (initialValue) => {
  if (typeof initialValue !== "boolean") {
    throw new Error("useToggle requires a boolean initial value");
  }

  const [status, setStatus] = useState(initialValue);
  const toggleStatus = () => setStatus((prevStatus) => !prevStatus);

  return { status, toggleStatus };
};
