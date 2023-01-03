import React from "react";

import { Projet } from "../../../types";
import projetList from "./projets.json";
import "./projets.scss";

const PATH_IMAGES = "/img/projets";

export default function Projets() {
    const projets = projetList.filter((projet: Projet) => !projet?.disabled);
    return (
        <div className="projets">
            <h1>Mes projets</h1>
            <p className="box">
                Voici quelques uns de mes projets réalisés sur mon temps libre.
                Le code source de chacun des projets est sur Github (dans des
                repos privés) et sont hébergés chez Vercel ou sur mon VPS.
            </p>
            <ul className="reset">
                {projets.map(
                    (
                        { nom, description, url, thumbnail, languages }: Projet,
                        key: number
                    ) => (
                        <li className="projet" key={key}>
                            <a href={url} target="_blank" rel="noreferrer">
                                <img
                                    src={PATH_IMAGES + "/" + thumbnail}
                                    alt={`${nom} thumbnail`}
                                />
                                <div className="details">
                                    <span className="languages">
                                        {languages.join(", ")}
                                    </span>
                                    <span className="name">{nom}</span>
                                </div>
                            </a>
                            <div className="description">{description}</div>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}
