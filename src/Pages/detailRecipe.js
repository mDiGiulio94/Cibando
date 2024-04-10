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


    async function onGetRecipe() {
        try {
            const idNumber = Number(id)
            const ricetta = await RecipeApi.getRecipe(idNumber)
        setRicetta(ricetta)} catch (error) { console.log(error) }
    }

//useEffect regolare che si usa al mount, una volta sola al montaggio del componente, senza array di dipendenze l'istruzione dice che lo use effect deve essere ripetito ogni volt che una variabile di stato cambia valore
    useEffect(() => {
        onGetRecipe();

        // array di dipendendenze
    }, []);



    return (<Contenitore>

        <Dettaglio ricetta={ricetta} />
    </Contenitore>)
}

const Contenitore = styled.div``;

export default DetailRecipe

/*COME RECUPERARE I PARAMETRI URL:

Per farlo bisogna usare un hook di REACT ROUTER DOM, chiamato usePARAMS:

Come usare:
const pippo = useParams().id;

è lo stesso scritto nel path in app.js solo che si una un . invece che i :

----------------------------------------------------------------------

il secondo modo è:

const { id } = useParams();

in questa scrittura si possono passare più parametri aggiungendo semplicemente una virgola

*/