/* Creazione recipe Card

altro pilastro molto importante di react sono le PROPS

*/

import React from "react";

import styled from "styled-components";

const RecipeCard = ({ ricette }) => {
  return (
    <Contenitore>
      {ricette.map((ricetta, index) => (
        <div className="container-card" key={index}>
          <div className="card">
            {/* inserimento di un immagine usa come esempio non scordare mai */}
            <div
              className="card-image"
              style={{ backgroundImage: `url(${ricetta.image}) ` }}
            ></div>
            {/*Alternativa per mettere un immagine
              <div className="card-image" style={{ backgroundImage: 'url('+ ricetta.image + ') ' }}></div>*/}
            <div className="card-body">
              <h5 className="card-title">{ricetta.title}</h5>
              <p className="card-text">{ricetta.description}</p>
              <button className="btn btn-primary">Visualizza</button>
            </div>
          </div>
        </div>
      ))}
    </Contenitore>
  );
};

const Contenitore = styled.div`
  background-color: white;

  .btn {
    border: none;
    background-color: #8e210b;
    width: 50%;
    margin-left: 25%;
    margin-top: 5px;
    font-weight: 600;
    padding: 3%;
  }

  .container-card {
    display: block;
    width: 23%;
    float: left;
    margin-left: 1.6%;
    margin-bottom: 20px;

    .card-image {
      height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .card-body {
      .card-title {
        font-size: 23px;
        font-weight: bold;
        color: #8e210b;
        text-align: center;
      }

      .card-text {
        font-size: 20px;
        font-weight: 400;
        color: black;
        text-align: justify;
      }
    }
  }
`;

export default RecipeCard;

/*

<div className="card">
<div className="card-image"> </div>
  <div className="card-body">
    <h5 className="card-title">Titolo ricetta</h5>
    <p className="card-text">Descrizione Ricetta</p>
    <button className="btn btn-primary">Visualizza</button>
  </div>
</div>

className="btn btn-primary">


*/
