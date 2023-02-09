import { useState } from "react";

export const useToggle = (initialValue) => {
    const [status, setStatus] = useState(initialValue);
    const toggleStatus = () => setStatus((prevStatus) => !prevStatus);

    return { status, toggleStatus };
};
