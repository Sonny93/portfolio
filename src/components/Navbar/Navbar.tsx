import React, { createRef, useState } from "react";
import { useMediaQuery } from 'react-responsive'

import { AiOutlineMenu } from "react-icons/ai";
import { BsFillSuitHeartFill } from "react-icons/bs";

import { findMe, name } from "../../config";
import {
    MoveNavbarDot,
    ScrollToSection,
} from "../../Utils/Navigation";

import "./navbar.scss";

export interface NavbarProps {
    activeSection: any;
    sections: Array<any>;
}

export default function Navbar({ activeSection, sections }: NavbarProps) {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const dotRef = createRef();

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    function handleActiveSection(name: string, target: EventTarget) {
        if (!name) return console.error("name missing");

        const section = sections.find((s) => s.name === name);
        if (section) {
            const index = sections.findIndex((s) => s.name === name);
            if (index === -1) return;

            //@ts-ignore
            const { height } = target.getBoundingClientRect();
            MoveNavbarDot(index * height + 25, dotRef.current);

            // Scroll into view
            if (name !== activeSection.name) {
                ScrollToSection(section);
            }
        }
    }

    const toggleMenu = () => setMenuOpen((state: boolean) => !state);
    const handleClickNavbarWrapper = (event: any) =>
        event.target.className.startsWith('navbar-wrapper') ? setMenuOpen(false) : null;

    const classNameNavbar = `navbar-wrapper ${isMobile ? (menuOpen ? 'mobile-open' : 'mobile-close') : ''}`;
    return (<>
        <div className="btn-navbar-menu" onClick={toggleMenu}>
            <AiOutlineMenu />
        </div>
        <div className={classNameNavbar} onClick={(e) => handleClickNavbarWrapper(e)}>
            <div className="navbar">
                <div className="header">
                    <h2>{name}</h2>
                    <p>Où me retrouver ?</p>
                    <ul className="find-me">
                        {findMe.map(({ link, icon }, key) => (
                            <li className="item" key={key}>
                                <a href={link} target="_blank" rel="noreferrer">
                                    {icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul className="items">
                    {/*@ts-ignore*/}
                    <div className="dot" ref={dotRef}></div>
                    {sections.map(({ name, label }, key) => {
                        const className = activeSection.name === name ? "item active" : "item";
                        const onClick = ({ target }: React.MouseEvent<HTMLElement>) => handleActiveSection(name, target);

                        return (
                            <li className={className} onClick={onClick} key={key}>
                                {label}
                            </li>
                        )
                    })}
                </ul>
                <div className="footer">
                    Made with <BsFillSuitHeartFill /> by <b>{name}</b>
                </div>
            </div>
        </div>
    </>);
}
