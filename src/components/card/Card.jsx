import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="card-img-top" />
      <div className="card-body">
        <p className="card-text">{props.title}</p>
        <h5 className="card-title">{props.source}</h5>
        <a href={props.link} className="btn btn-primary">
          See Recipe
        </a>
      </div>
    </div>
  );
};

export default Card;
