import { useEffect } from "react";

export default function BodyClassHelper({ className, title, icon }) {
    useEffect(() => {
        const prevCN = document.body.className;
        document.body.className = className ?? "";

        const prevT = document.title;
        if (title != null) document.title = title;

        const undoIcon = setFavicon(icon);

        return () => {
            document.body.className = prevCN;
            document.title = prevT;
            if (undoIcon) undoIcon();
        };
    }, [className, title, icon]);

    return null;
}

function setFavicon(href) {
    if (!href) return null;

    // find existing favicon link (or create one)
    let link = document.querySelector('link[rel="icon"]');

    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
    }

    const prevHref = link.getAttribute("href");
    link.setAttribute("href", href);

    return () => {
        if (prevHref) {
            link.setAttribute("href", prevHref);
        } else {
            // If there wasn't one before, remove the created/modified one
            link.remove();
        }
    };
}
