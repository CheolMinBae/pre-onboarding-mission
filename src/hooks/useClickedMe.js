import { useState, useEffect } from "react";

export default function useClickedMe(ref) {
    const [IAmClicked, setIAmClicked] = useState(false);
    useEffect(() => {
        const me = ref.current;
        function handleClick(e) {
            setIAmClicked(me && me.contains(e.target));
        }
        window.addEventListener("mousedown", handleClick);
        return () => window.removeEventListener("mousedown", handleClick);
    }, [ref]);

    return IAmClicked;
}
