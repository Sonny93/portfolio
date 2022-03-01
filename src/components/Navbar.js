import { createRef, useState } from "react";
import { BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";

export default function Navbar({ activeSection, sections }) {
    const dotRef = createRef();
    const [items, setItems] = useState([
        {
            name: "accueil",
            label: "Accueil",
        },
        {
            name: "aboutme",
            label: "Qui suis-je ?",
        },
        {
            name: "btssio",
            label: "BTS SIO",
        },
        {
            name: "parcours",
            label: "Mon parcours",
        },
        {
            name: "projets",
            label: "Mes projets",
        },
        {
            name: "veilletechno",
            label: "Veilles",
        },
        {
            name: "contact",
            label: "Me contacter",
        },
    ]);

    function handleActiveSection(name, target) {
        if (!name) return console.error("name missing");

        const section = sections.find((s) => s.name === name);
        if (section) {
            const index = sections.findIndex((s) => s.name === name);
            if (index === -1) return;

            const { height } = target.getBoundingClientRect();
            if (dotRef.current) {
                dotRef.current.style.transform = `translate(275px, ${index * height + 25}px)`;
            }

            if (name !== activeSection.name) {
                section.ref?.current?.scrollIntoView({
                    block: "start",
                    behavior: "smooth",
                });
            }
        }
    }

    return (
        <div className="navbar">
            <div className="header">
                <h2>Sonny LALLIER</h2>
                <p>Où me retrouver ?</p>
                <ul className="find-me">
                    <li className="item">
                        <a
                            href="https://github.com/Sonny93"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsGithub />
                        </a>
                    </li>
                    <li className="item">
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsLinkedin />
                        </a>
                    </li>
                    <li className="item">
                        <a
                            href="https://discord.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <BsDiscord />
                        </a>
                    </li>
                </ul>
            </div>
            <ul className="items">
                <div className="dot" ref={dotRef}></div>
                {items.map(({ name, label }, key) => (
                    <li
                        className={
                            activeSection.name === name ? `item active` : "item"
                        }
                        onClick={({ target }) =>
                            handleActiveSection(name, target)
                        }
                        key={key}
                    >
                        {label}
                    </li>
                ))}
            </ul>
            <div className="footer">
                Copyright 2022 © <b>Sonny LALLIER</b>
            </div>
        </div>
    );
}
