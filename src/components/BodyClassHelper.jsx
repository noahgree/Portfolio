import { useEffect } from "react";

export default function BodyClassHelper({ className, title }) {
    useEffect(() => {
        const prevCN = document.body.className;
        document.body.className = className;

        const prevT = document.title;
        document.title = title;

        return () => {
            document.body.className = prevCN;
            document.title = prevT;
        };
    }, [className, title]);

    return null;
}
