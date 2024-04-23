import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import CarouselSlider from "../components/CarouselSlider";
import RecipeCard from "../components/RecipeCard";
import RecipeApi from "../API/recipeAPI";


const Home = () => {

  const [ricette, setRicette] = useState([]);

 async function prendiRicette() {
   try {
     const response = await RecipeApi.getRecipes();
     if (response) {
       setRicette(response.sort((a, b) => b._id - a._id).slice(0, 4));
     }
   } catch (error) {
     console.log(error);
   }
 }

    useEffect(() => {
    prendiRicette();
    console.log("sei entrato nella pagina");

    return () => {
      console.log("sei uscito dal componente");
    };
  }, []);


    return (
      //SI CHIAMA REACT FRAGMENT <></>
      <>
        <Contenitore>

          <CarouselSlider />
          <div className="container-titolo">
            {/* aggiunta stile e presa da bgDinamico, con stile in linea */}

            {/* le tonde si usano in questo caso solo se devi richiamare dei parametri me si scrive in un altro modo e si vedrà più avanti nel corso */}

            <h2>Ecco le Ultime Ricette: </h2>
            <RecipeCard  ricette={ ricette }  pag='home' />
          </div>

        </Contenitore>
      </>
    );
}

const Contenitore = styled.div`
  background-color: white;

  h2 {
    margin-left: 10px;
  }

  p {
    width: 95%;
    margin: auto;
    text-align: justify;
  }
`;

export default Home



/*obbiettivo:

fai uscire le solo 4 slide sulla home

diversificare il titolo dalla home alla pagina Card

in ordine dalla più nuova e vecchia

disattivare il click sulla home

*/