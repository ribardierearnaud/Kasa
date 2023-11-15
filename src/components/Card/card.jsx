import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <NavLink
            className="card"
            to={`/housing/${props.logement.id}`}
        >
            <article key={props.logement.id}>
                <img src={props.logement.cover} alt={props.logement.title} />
                <div className="overlay"></div>
                <h2>{props.logement.title}</h2>
            </article>
        </NavLink>
    );
};

export default Card;