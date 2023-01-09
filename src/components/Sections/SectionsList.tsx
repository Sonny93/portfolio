import React, { useCallback, useEffect } from "react";
import { Section } from "../../types";

import "./sections.scss";

export default function SectionsList({
    sections,
}: {
    sections: Array<Section>;
}): JSX.Element {
    const handleWindowScroll = useCallback(() => {
        console.log(
            sections.map(({ ref }) => ref.current?.getBoundingClientRect())
        );
        // const currentSection = rects.filter((rect) => rect?.y === )
    }, [sections]);

    useEffect(() => {
        window.addEventListener("scroll", handleWindowScroll);
        return window.removeEventListener("scroll", handleWindowScroll);
    }, [handleWindowScroll]);

    return (
        <div className="page-content" id="page-content">
            {sections.map((section: Section, key: number) => (
                <div
                    className="section"
                    key={key}
                    id={section.name}
                    ref={section.ref}
                >
                    <section.component {...section} />
                </div>
            ))}
        </div>
    );
}
