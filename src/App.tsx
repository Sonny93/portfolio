import React, { createRef, useState, createContext } from "react";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";

// Sections
import Sections from "./components/Sections/Sections";

import Accueil from "./components/Sections/Accueil/Accueil";
import APropos from "./components/Sections/APropos/APropos";
import BTS from "./components/Sections/BTS/BTS";
import Parcours from "./components/Sections/Parcours/Parcours";
import Projets from "./components/Sections/Projets/Projets";
import VeilleTechnologique from "./components/Sections/VeilleTechno/Veilles";
import Contact from "./components/Sections/Contact/Contact";

export interface Section {
    name: string;
    label: string;
    background: string;
    component: JSX.Element;
    ref: React.RefObject<any>;
}

const sections = [
    {
        name: "accueil",
        label: "Accueil",
        background: "accueil-bg.jpg",
        component: <Accueil />,
        ref: createRef(),
    },
    {
        name: "aboutme",
        label: "À propos",
        background: "apropos-bg.jpg",
        component: <APropos />,
        ref: createRef(),
    },
    {
        name: "btssio",
        label: "BTS SIO",
        background: "bts-sio-bg.jpg",
        component: <BTS />,
        ref: createRef(),
    },
    {
        name: "parcours",
        label: "Mon parcours",
        background: "mon-parcours-bg.jpg",
        component: <Parcours />,
        ref: createRef(),
    },
    {
        name: "projets",
        label: "Mes projets",
        background: "mes-projets-bg.jpg",
        component: <Projets />,
        ref: createRef(),
    },
    {
        name: "veilletechno",
        label: "Veille Technologique",
        background: "veille-techno-bg.jpg",
        component: <VeilleTechnologique />,
        ref: createRef(),
    },
    {
        name: "contact",
        label: "Me contacter",
        background: "me-contacter-bg.jpg",
        component: <Contact />,
        ref: createRef(),
    },
];
export const SectionsProvider = createContext(sections);

export default function App() {
    const [activeSection, setActiveSection] = useState<Section>(sections[0]);
    const [background, setBackground] = useState<string>(sections[0].background);

    function changeBackground(section: Section): void {
        setBackground(section.background);
    }

    return (
        <div className="background" style={{ background: `url(${background})` }}>
            <div className="App">
                <SectionsProvider.Provider value={sections}>
                    <Navbar activeSection={activeSection} sections={sections} />
                    <Sections
                        sections={sections}
                        activeSection={activeSection}
                        setActiveSection={setActiveSection}
                        changeBackground={changeBackground}
                    />
                </SectionsProvider.Provider>
            </div>
        </div>
    );
}