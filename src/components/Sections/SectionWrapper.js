import { useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";

export default function SectionWrapper({
    section,
    activeSection,
    setActiveSection,
}) {
    const { component, ref: refSection } = section;
    const { ref, inView } = useInView({
        threshold: 0.5,
    });

    useEffect(
        () => (inView ? setActiveSection(section) : null),
        [inView, setActiveSection, section]
    );

    const setRefs = useCallback(
        (node) => {
            refSection.current = node;
            activeSection.ref.current = node;
            ref(node);
        },
        [ref, refSection, activeSection]
    );

    return (
        <div className="section" ref={setRefs}>
            {component}
        </div>
    );
}
