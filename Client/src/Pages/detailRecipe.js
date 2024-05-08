//Import
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";


//Pagine
import RecipeApi from "../API/recipeAPI";
import Dettaglio from "../components/Dettaglio";

const DetailRecipe = () => {

    const { id } = useParams();
    const [ricetta, setRicetta] = useState();
    const [loading, setLoading] = useState(false)

    async function onGetRecipe() {
        try {
            setLoading(true);
            // const idNumber = Number(id); non serve pià perché ora prendiamo l'id dal server e non dal mock, grazie ad useParams quell'id alfanumerico viene trasformato in una stringa
            const ricetta = await RecipeApi.getRecipe(id);
            // siccome il set deve essere fatto quando c'è la certezza che trova la ricetta si aggiunge un if
            // con questo if si dice che se il parametro ricetta è trovato allora lo spinner non si vede, altrimenti se non la trova fa vedere lo spinner
            if (ricetta) {
              /*

                  Esempio di Timeout:

              setTimeout(() => {
                setRicetta(ricetta);

                setLoading(false);
              }, 3000);  */
              // Commentare queste due voci per attivare il timer
              setRicetta(ricetta);
              setLoading(false);
            } else {
                setLoading(false)
            }

        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }
    //per simulare una risposta lenta da server si usa un timer con un timeout

    //useEffect regolare che si usa al mount, una volta sola al montaggio del componente, senza array di dipendenze l'istruzione dice che lo use effect deve essere ripetito ogni volt che una variabile di stato cambia valore
    useEffect(() => {
        onGetRecipe();

        // array di dipendendenze
    }, []);


    return (
      <Contenitore>
        {ricetta && <Dettaglio ricetta={ricetta} />}

        {!ricetta && !loading && (
          <div className="mancante"> Spiacente la pagina non è disponibile</div>
        )}

        {loading && (
          <div className="container-spinner">
            <div className="spinner-border text-danger" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </Contenitore>
    );
}

const Contenitore = styled.div`
  .mancante {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .container-spinner {
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default DetailRecipe

/*COME RECUPERARE I PARAMETRI URL:

Per farlo bisogna usare un hook di REACT ROUTER DOM, chiamato usePARAMS:

Come usare:
const pippo = useParams().id;

è lo stesso scritto nel path in app.js solo che si una un . invece che i :

----------------------------------------------------------------------------------------

il secondo modo è:

const { id } = useParams();

in questa scrittura si possono passare più parametri aggiungendo semplicemente una virgola

---------------------------------------------------------------------------------------

 questo è il caso in cui far apparire lo spinner in questo modo si possono inserire condizioni
      {/* { loading && (
        <div className="container fluid">
          <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}





*/