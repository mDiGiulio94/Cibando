import React from "react";
import styled from "styled-components";

//Elementi bootstrap
import Card from "react-bootstrap/Card";
import DOMPurify from "dompurify";


const Dettaglio = ({ ricetta }) => {

  function Livello() {

    let string
    if (ricetta?.difficulty <= 2) {

      string = "facile"

    } else if (ricetta?.difficulty === 3) {

      string = "medio"

    } else {

      string = "difficile"

    }
    return (string)
  }

  const percorsoDifficolta = "/assets/images/difficolta-"



  return (
    // dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize() }}
    <Contenitore>
      <div
        style={{ backgroundImage: `url(${ricetta?.image})` }}
        className="img"
      ></div>
      <Card>
        <Card.Body>
          <Card.Title>{ricetta?.title}</Card.Title>
          <Card.Text dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(ricetta?.description) }}/>
        </Card.Body>
        <Card.Footer>
          <div className="row">
            <p>Difficoltà: {Livello(ricetta?.difficulty)} </p>
            <img
              src={percorsoDifficolta + ricetta?.difficulty + ".png"}
              alt={ricetta?.title}
              className="difficolta"
            />
          </div>

          <p>{ricetta?.date}</p>
        </Card.Footer>
      </Card>
    </Contenitore>
  );
};



const Contenitore = styled.div`

  .card {
    border: none;
  }

  .img {
    height: 500px;
    background-size: cover;
    width: 100%;
    margin-top: -19px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    border: none;
  }

  .card-title {
    font-size: 30px;
    font-weight: 600;
  }

  .card-img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }


  .difficolta{
    width: 150px;
  }
`;

export default Dettaglio;

/*
il PUNTO INTERROGATIVO serve perché noi stiamo chiedendo nel dom di renderizzarci un immagine che viene valorizzata solamente dopo che si riceva la risposta da una chiamata asincrona

la prima soluzione è quella di mettere appunto il PUNTO INTERROGATIVO, che definisce che l'elemento passato può essere undefined e quando si riempie di informazioni allora lo carica.

se la risposta è molto lenta ad arrivare si portrebbero vedere prima dei contenuti statici o e poi dopo del tempo quelli dal server

SECONDO MODO:

se la chiamata è molto pesante si può predisporre uno spinner di caricamento che finché la chiamta non è terminata vediamo lo spinner

per farlo si può sfruttare l'if di react:

{ ricetta && (  <Card>
          <Card.Img src={ricetta.image} />
          <Card.Body>
            <Card.Title>{ricetta.title}</Card.Title>
            <Card.Text>{ricetta.description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <p>sinistra</p>
            <p>destra</p>
          </Card.Footer>
        </Card>)}

        questo significa verbalmente "Se la pagina è renderizzata mostrala"

{ !ricetta && ("aggiungi spinner")}

    che verbalmente significa " Se la pagina non è renderizzata mostara lo spinne"

    *può essere utilizzabile l'OPERATORE TERNARIO per fare la stessa operazione

*/
