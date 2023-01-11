import React, { useCallback, useEffect, useRef } from "react";
import { Section } from "../../types";

import "./sections.scss";

export default function SectionsList({
    sections,
    activeSection,
    setActiveSection,
}: {
    sections: Array<Section>;
    activeSection: Section;
    setActiveSection: (name: string) => void;
}): JSX.Element {
    const listRef = useRef<HTMLDivElement>(null);
    // const offset = window.innerWidth / 5;
    const offset = 0;

    const handleScroll = useCallback(() => {
        const currentSection = sections.find((section) => {
            const rect = section?.ref.current?.getBoundingClientRect();
            if (!rect) {
                return false;
            }

            return (
                rect.top + offset >= 0 &&
                rect.top - offset <= window.innerHeight
            );
        });
        console.log(currentSection);
        if (currentSection !== undefined && currentSection !== activeSection) {
            setActiveSection(currentSection.name);
        }
    }, [activeSection, sections, setActiveSection]);

    useEffect(() => {
        const ref = listRef?.current;
        if (!ref) return;

        handleScroll();
        ref?.addEventListener("scroll", () => handleScroll());
        return () => ref?.removeEventListener("scroll", () => handleScroll());
    }, [handleScroll]);

    return (
        <div className="page-content" id="page-content" ref={listRef}>
            {sections.map(({ ref, ...section }: Section, key: number) => (
                <div className="section" key={key} id={section.name} ref={ref}>
                    <section.component {...section} />
                </div>
            ))}
        </div>
    );
}
