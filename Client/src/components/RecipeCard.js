/* Creazione recipe Card

altro pilastro molto importante di react sono le PROPS

servono a passare informazioni da padre a figlio

*/

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Pagination } from "@mui/material";
import AppContext from "antd/es/app/context";
import Modale from "./Modale";
import DOMPurify from "dompurify";

const RecipeCard = (props) => {
  //costante con pagina iniziale
  const [paginaCorrente, setPaginaCorrente] = useState(1);

  //costante delle ricette per pagina(con costante perché la si vuole fissa in questo caso, ma possono variare con variabile di stato "esercizio da provare")
  const [ricettePerPagina, setRicettePerPagina] = useState(4);

  const [open, setOpen] = useState(false);
  const [titolo, setTitolo] = useState("");
  const ricette = props.ricette;

  //costente ultima ricetta
  const indiceUltimaRicetta = Math.min(
    paginaCorrente * ricettePerPagina,
    ricette.length
  );

  //costante prima ricetta
  const indicePrimaRicetta = indiceUltimaRicetta - ricettePerPagina;

  //ricette attualmente viste
  const ricetteCorrenti = ricette.slice(
    indicePrimaRicetta,
    indiceUltimaRicetta
  );

  //costante numero pagine
  const numeroPagine = Math.ceil(ricette.length / ricettePerPagina);

  //gestione cambio pagina
  //i parametri sono evento e valore (event e value)
  const cambioPagina = (evento, valore) => {
    //metodo che riceve due parametri (passati dal paginatore)
    setPaginaCorrente(valore);
  };

  //variabile per cambiare il numero delle ricette visualizzate per pagina
  //altera il numero di ricette tra 4-6-8
  const cambioNumero = (event) => {
    setRicettePerPagina(event.target.value);
  };

  // const ricette = props.ricette
  const accorciaDescrizione = (descrizione) => {
    const lunghezzaMassima = 170;
    if (descrizione.length <= lunghezzaMassima) {
      return lunghezzaMassima;
    } else {
      const posizioneUltimoSpazio = descrizione.indexOf(" ", lunghezzaMassima);

      return posizioneUltimoSpazio;
    }
  };

  function inviaTitolo(titolo) {
    if (props.pag === "ricette") {
      props.onTitoloRicevuto(titolo); //richiamando la funzione di callback nel componente padre
    }
    setTitolo(titolo);
    apriModale();
  }

  const apriModale = () => {
    setOpen(true);
  };

  const chiudiModale = () => {
    setOpen(false);
  };

  return (
    <Contenitore>
      {props.pag === "ricette" && (
        <div>
          Ricette visualizzate {indicePrimaRicetta + 1} a {indiceUltimaRicetta}{" "}
          su un totale di {ricette.length} ricette
        </div>
      )}
      {ricetteCorrenti.map((ricetta, index) => (
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
                {/* si chiama dangerously perché si da la possibilità di scrivere codice html che venga inniettato all'interno del proprio codice, è pericoloso perché si rende vulnerabili ad attacchi hacker, perciò si dovrebbe "SANIFICARE" tutto l'html tramide DOM SANITAIZER tramite un'altra libreria 

             comando installazione:

             npm i dompurify

             */}
                <span
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      ricetta.description.slice(
                        0,
                        accorciaDescrizione(ricetta.description)
                      ) + " ..."
                    ),
                  }}
                />
              </p>
              <Link to={`/dettaglio/${ricetta.title}/${ricetta._id}`}>
                <button className="btn btn-primary">Visualizza</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
      {/* per la gestione css */}
      {props.pag === "ricette" && (
        <div className="paginatore">
          <Pagination
            count={numeroPagine}
            page={paginaCorrente}
            color="primary"
            onChange={cambioPagina}
          />
        </div>
      )}
      {/* L'onChange andava sulla select *facepalm */}
      {props.pag === "ricette" && (
        <select onChange={cambioNumero}>
          <option value={4}>4</option>
          <option value={6}>6</option>
          <option value={8}>8</option>
        </select>
      )}
      <Modale
        page="ricette"
        open={open}
        chiudiModale={chiudiModale}
        titolo={titolo}
      />
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

/*
1) implementare numero elementi dinamico tramite la select
ovvero (4, 6, 8) //FATTO ricordati che l'onchange va sulla select

2) fix il bug ultima pagina// FATTO andava aggiunto math.min che prende due valori, i quali in questo caso sono il numero di ricette visibili per pagina (paginaCorrente * ricette corrente), e il valore a cui deve fermarsi (la lunghezza effettiva delle ricette)

3) aggiungere un accordion di react-boostrap messo nella pagina registrazione,
sotto accetto mi termini del contratto, che sono chiusi e collassati e se cliccati li mostra //FATTO//

4) Ultimo: fare tutto il componente di contatti:
fatta a mano (non da componenti), il modulo contatti deve essere di semplice richiesta informazioni

contattaci

campo nome

campo email

campo oggetto

selettore per settore

text area messaggio

pulsante invio

//FATTO: alla fine bisognave non impostare le option come un'array contenente un oggetto e passarli come dentro una normale select, inoltre pare che in antd quando si fa l'handleOnChange, bisogna mettere invece che event.target.value, direttamente l'event e funziona

aggiungere che una volta cliccato su invio mostra una modale con grazie messaggio inviato e il riepilogo del messaggio//FATTO
*/
