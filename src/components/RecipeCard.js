/* Creazione recipe Card

altro pilastro molto importante di react sono le PROPS

servono a passare informazioni da padre a figlio

*/

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const RecipeCard = (props) => {
  // const ricette = props.ricette
  const accorciaDescrizione = (descrizione) => {
    const lunghezzaMassima = 170;
// chiedi perché se il simbolo lo cambio come quello nel codice di danilo esplode tutto
    if (descrizione.length >= lunghezzaMassima) {
      return lunghezzaMassima;
    } else {
      const posizioneUltimoSpazio = descrizione.lastIndexOF(
        " ",
        lunghezzaMassima
      );

      return posizioneUltimoSpazio;
    }
  };


function inviaTitolo(title) {
    if (props.pag === "ricette") {
      props.onTitoloRicevuto(title); //richiamando la funzione di callback nel componente padre
    }

  }

  return (
    <Contenitore>

        {props.ricette.map((ricetta, index) => (
          <div className="container-card" key={index}>
            <div className="card">
              {/* inserimento di un immagine, per renderla responsive* usa come esempio non scordare mai */}
              <div
                className="card-image"
                style={{ backgroundImage: `url(${ricetta.image}) ` }}
                onClick={() => inviaTitolo(ricetta.title)}
              ></div>
              {/*Alternativa per mettere un immagine
              <div className="card-image" style={{ backgroundImage: 'url('+ ricetta.image + ') ' }}></div>*/}
              <div className="card-body">
                <h5 className="card-title">{ricetta.title}</h5>
                <p className="card-text">
                  {ricetta.description.slice(
                    " ",
                    accorciaDescrizione(ricetta.description)
                  )}
                  ...
                </p>
                <Link to={`/dettaglio/${ricetta.title}/${ricetta._id}`}>
                  <button className="btn btn-primary">Visualizza</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
   
    </Contenitore>
  );
};

/*
metodo blando per tagliare:

<Card.Text>{ricetta?.description.slice(0, 200)}...</Card.Text>


metodo più articolato:

const accorciaDescrizione = (descrizione) => {

  const lunghezzaMassima = 170;

if(descrizione.length >= lunghezzaMassima){

  return lunghezzaMassima

}else {
  const posizioneUltimoSpazio = descrizione.lastIndexOF(' ', lunghezzaMassima)

  return posizioneUltimoSpazio
}

}

//lastIndexOF: serve per prendere l'ultimo parametro dopo un determinato parametro, in questo caso l'ultimo spazio (' '), dopo i 170

*/

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
