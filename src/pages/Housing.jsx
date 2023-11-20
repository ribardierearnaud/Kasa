import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel/Carousel';
import Lost from '../components/Lost/lost';
import LogementsData from '../data/logements.json';
import { useParams } from 'react-router-dom';

const Housing = () => {
  const { id } = useParams();

  // Vérifier si l'ID de la maison est valide
  const isIdValid = LogementsData.some((logement) => logement.id === id);

  // Récupérer les images uniquement si l'ID de la maison est valide
  const allImages = isIdValid ? LogementsData.find((logement) => logement.id === id)?.pictures : [];

  // Mettre à jour la liste d'images si l'ID de la maison change
  const [images, setImages] = useState(allImages);

  useEffect(() => {
    if (isIdValid) {
      const newImages = LogementsData.find((logement) => logement.id === id)?.pictures || [];
      setImages(newImages);
    }
  }, [id, isIdValid]);

  return (
    <div className="carousel">
      {isIdValid ? <Carousel images={images} /> : <Lost />}
    </div>
  );
};

export default Housing;