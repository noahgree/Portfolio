import { useEffect } from "react";

export default function BodyClassHelper({ className }) {
    useEffect(() => {
        const prev = document.body.className;
        document.body.className = className;

        return () => {
            document.body.className = prev;
        };
    }, [className]);

    return null;
}
