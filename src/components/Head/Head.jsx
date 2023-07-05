import React from "react";
import { useContext } from 'react'
import { UserContext } from "../../context/userContext";
import './Head.css'

const Head = () => {

  const { userData } = useContext(UserContext);

  return (
    <section className="email-container">
      <p>{ userData.email }</p>
    </section>
  );
};

export default Head;
