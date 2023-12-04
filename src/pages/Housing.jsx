import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel/carousel';
import Lost from '../components/Lost/lost';
import LogementsData from '../data/logements.json';
import { useParams } from 'react-router-dom';
import Rating from '../components/Rating/rating';
import Collapse from '../components/Collapse/collapse';

const Housing = () => {
  const { id } = useParams();
  const logement = LogementsData.find(logement => logement.id === id);

  // Vérifier si l'ID de la maison est valide
  const isIdValid = !!logement;

  // Récupérer les images uniquement si l'ID de la maison est valide
  const allImages = isIdValid ? logement?.pictures || [] : [];

  // Mettre à jour la liste d'images si l'ID de la maison change
  const [images, setImages] = useState(allImages);

  useEffect(() => {
    if (isIdValid) {
      const newImages = logement?.pictures || [];
      setImages(newImages);
    }
  }, [id, isIdValid]);

  if (!isIdValid || !logement) {
    return <Lost />;
  }

  return (
    <main className='logementAll'>
      <article>
        <section className="carousel">
          <Carousel images={images} />
        </section>
        <section className="logementCard">
          <div className='logementWithoutCollapses'>
            <div className='logementIntro'>
              <h1 className='logementTitle'>{logement.title}</h1>
              <p className='logementLocation'>{logement.location}</p>
              <ul className='logementTag'>
                {logement.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </div>
            <div className='hostAndRating'>
              <figure className='logementHost'>
                <img src={logement.host.picture} alt="Profil de l'host" className='logementHostPicture'/>
                <figcaption>{logement.host.name}</figcaption>
              </figure>        
              <Rating rate={logement.rating} />     
            </div>
          </div>
          <div className='collapses'>
            <Collapse collapseTitle='Description' collapseContent={logement.description} />
            <Collapse 
              collapseTitle='Équipements' 
              collapseContent={logement.equipments.map((equipment, i) => (
                <ul key={i}>
                  <li>{equipment}</li>
                </ul>
              ))} />
          </div>
        </section>
      </article>
    </main>
  );
};

export default Housing;