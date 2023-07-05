import React from "react";
import './Card.css';

const Card = ({userData}) => {
  return (
    <section className="info-section">
      <img src={ userData && userData.url } />
      <p>{ userData && userData.name }</p>
      <p>{ userData && userData.age }</p>
      <p>{ userData && userData.email }</p>
    </section>
  )
};

export default Card;
