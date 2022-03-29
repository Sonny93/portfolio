import React, { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import './veille.scss'

interface VeilleTechnologiqueProps {
    inView?: boolean;
}

export default function VeilleTechnologique({ inView }: VeilleTechnologiqueProps) {
    const [loading, setLoading] = useState<boolean>(true);
    const src = "https://flipboard.com/@alonswartz/cloud-computing-4s4so98hz/widget?layout=banner";

    return (
        <div className="veille-technologique">
            <h1>Veille technologique</h1>
            {loading && <div className="loading">
                <AiOutlineLoading />
                <p>
                    Chargement en cours...
                </p>
            </div>}
            {inView && (
                <iframe
                    onLoad={() => setLoading(false)}
                    src={src}
                    frameBorder="0"
                    title="Iframe flipboard 'cloud computing'"
                    className={loading ? "loading-iframe" : ""}
                />
            )}
        </div>
    );
}
