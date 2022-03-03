import './sections.scss';
import SectionWrapper from "./SectionWrapper";

export default function Sections({
    sections,
    activeSection,
    setActiveSection,
}) {
    return (
        <div className="page-content">
            {sections.map((section, key) => (
                <SectionWrapper
                    key={key}
                    section={section}
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                />
            ))}
        </div>
    );
}
