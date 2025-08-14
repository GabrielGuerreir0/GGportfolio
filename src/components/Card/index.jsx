import React, { useState } from "react";
import "./Card.css";
const Card = ({ url, text, title, author }) => {
  return (
    <div class="card">
      <div class="icon-container">
        <img src={url} alt="Ícone de Web Development" class="icon" />
      </div>
      <div class="content-container">
        <h2 class="title">{title}</h2>
        <p class="quote">"{text}"</p>
        <p class="author">- {author}</p>
      </div>
    </div>
  );
};
export default Card;
