import React from 'react';
import { NavLink } from 'react-router-dom';

const Lost = () => {
    return (
        <section className='lost'>
            <h1 className='lost_title'>404</h1>
            <p className='lost_description'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink
                className='lost_redirection'
                            title='Accueil'
                            end to='/'
                        >Retourner sur la page d’accueil</NavLink>
        </section>
    )
}

export default Lost;