import React from 'react';
import Banner from '../components/Banner/banner';
import Collapse from '../components/Collapse/collapse';

function About() {
  return (
    <main className='about'>
      <Banner  />
      <div className='aboutCollapses'>
        <Collapse collapseTitle='Fiabilité' collapseContent='texte à ajouter'/>
        <Collapse collapseTitle='Respect' collapseContent='texte à ajouter'/>
        <Collapse collapseTitle='Service' collapseContent='texte à ajouter'/>
        <Collapse collapseTitle='Sécurité' collapseContent='texte à ajouter'/>
      </div>
    </main>
  );
}

export default About;