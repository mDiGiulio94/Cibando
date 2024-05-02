import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import RecipeApi from "../API/recipeAPI";
import RecipeCard from "../components/RecipeCard";

import Modale from "../components/Modale";

const Recipes = () => {
  const [ricette, setRicette] = useState([]);
  const [titolo, setTitolo] = useState("");

  async function prendiRicette() {
    try {
      const response = await RecipeApi.getRecipes();
      if (response) {
        setRicette(response.sort((a, b) => b._id - a._id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  function titoloDalFiglio(data) {
    if (data !== titolo) {
      return setTitolo(data);
    } else {
      setTitolo("");
    }
  }


  //solitamente lo useEFFECT() si scrive appena prima del return
  //la sintassi è uguale a quella dei metodi di js (vedi i metodi sugli array)
  //per capire quando essere eseguito si usa un array di dipendenze (l'array vuoto dopo la virgola, significa "fai questo quando si avvia il componente")
  //useEFFECT() AVVIO COMPONENTE
  useEffect(() => {
    prendiRicette();
    console.log("sei entrato nella pagina");

    return () => {
      console.log("sei uscito dal componente");
    };
  }, []);

  //useEFFECT()alla distruzione o unmount del componente (il return stesso è il destroy), proprio perché il return è il destroy, invece di "abusare"  più useEFFECT() si può mettere tutto dentro uno
  //ESEMPIO useEFFECT() DESTROY
  // useEffect(() => {

  //     return () => {
  //         console.log("sei uscito dal componente")
  //     }

  // }, [] )

  //useEFFECT() per modificare, molto usato in react, la meccanica è che quando cambia il valore di una variabile di stato deve accadere una certa cosa ad esempio "solamente che dopo una variabile è stata valorizzata, si attiva", la differenza sta che se l'array di dipendenza è [] vuoto si attiva ad inizio della pagina ma se dentro l'array ci sono elementi, l'useEFFECT() verrà utilizzato ogni volta che la variabile cambia valore, ad esempio si vuole un'altra chiamata al backend ma solo dopo che la variabile di stato ricette è stata valorizzata
  useEffect(() => {
    if (ricette.length > 1) console.log("hai ricevuto le ricette dal server");
    console.log(ricette);
  }, [ricette]);

  return (
    <>
      <Contenitore className="test">
        <h2>Le nostre Ricette:</h2>

        <div className="visualizza">{titolo && <h3>{titolo}</h3>}</div>

        <RecipeCard
          ricette={ricette}
          onTitoloRicevuto={titoloDalFiglio}
          pag="ricette"
        />
        <Modale pag ="ricette"/>
      </Contenitore>
    </>
  );
};
const Contenitore = styled.div`
  background-color: white;

  h2 {
    margin-left: 1.7%;
    margin-top: 10px;
  }

  .visualizza {
    text-align: center;
    font-weight: 600;
    margin-bottom: 40px;
    height: 20px;
  }
`;

export default Recipes;
