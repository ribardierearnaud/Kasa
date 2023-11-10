import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <NavLink
            className="card overlay"
            to={`/housing/${props.logement.id}`}
        >
            <article key={props.logement.id}>
                <img src={props.logement.cover} alt={props.logement.title} />
                <p>{props.logement.title}</p>
            </article>
        </NavLink>
    );
};

export default Card;