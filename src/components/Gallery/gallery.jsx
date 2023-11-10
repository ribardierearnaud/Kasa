import { useState } from "react";
import LogementsData from '../../data/logements.json';
import Card from "../Card/card";

const Gallery = () => {
    const [logements] = useState(LogementsData);

    return (
        <div className="logements">
            {logements.map((logement) => (
                <Card
                    key={logement.id}
                    logement={logement}
                />
            ))}
        </div>
    );
};

export default Gallery;