import React, { useEffect, useState } from 'react';

import { Section } from '../../../types';

import { name, SectionsProvider } from '../../../config';
import { ScrollToSection } from '../../../Utils/Navigation';

import Avatar from '../../Avatar';

import './accueil.scss';

export default function AccueilWrapper() {
    return (
        <SectionsProvider.Consumer>
            {(value) => <Accueil sections={value} />}
        </SectionsProvider.Consumer>
    );
}

interface AccueilProps {
    sections: Array<Section>;
}

function Accueil({ sections }: AccueilProps): JSX.Element {
    const [nextSection, setNextSection] = useState<Section | undefined>(undefined);

    useEffect(() => {
        if (sections.length > 1) {
            setNextSection(sections[1]);
        }
    }, [sections]);

    const handleNextSection = () => nextSection ? ScrollToSection(nextSection) : null;

    return (
        <div className='accueil'>
            <Avatar size={240} />
            <h2>{name} ✌️</h2>
            <h1>
                Développeur <span className='type'>Fullstack</span>
            </h1>
            <p>Étudiant de 19 ans en deuxième année de <b>BTS SIO</b> (Option <b>SLAM</b>)</p>
            {nextSection && (
                <div className='wrapper-scroll'>
                    <ScrollMouse handleNextSection={handleNextSection} />
                    <p>Défiler pour voir la suite !</p>
                </div>
            )}
        </div>
    );
}

const ScrollMouse = ({ handleNextSection }: { handleNextSection: () => void; }): JSX.Element => (
    <span className='scroll-icon' onClick={handleNextSection}>
        <span className='scroll-icon__dot'></span>
    </span>
);