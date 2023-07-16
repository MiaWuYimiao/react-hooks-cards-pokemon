import { useState } from "react";

function useFlip(initialVal = true) {
    const [value, setValue] = useState(initialVal);
    const toggle = () => {
        setValue(oldValue => !oldValue);
    };
    return [value, toggle];
}

export default useFlip;