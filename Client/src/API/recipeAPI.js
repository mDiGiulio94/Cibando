// I metodi che si interfacciano col server sono ASINCRONI, si chiamano in questo modo perché c'è una CHIAMATA che deve aspettare una RISPOSTA

//è BUONA PRATICA ma non obbligatorio gestire l'errore con dei TRY e CATCH

//questo è js nativo non react può essere utilizzato anche in altre istanze, questo perché react non ha un suo nativo specifico, il suo è js

//metodi asincroni che si vanno ad interfacciare con altri metodi, anche quelli devono essere asincroni

import RECIPES from "../Mocks/recipes-mock";

import axios from 'axios';

//percorso dato dal server (lo trovi in recipes.route)
const apiBaseUrl = "/api/recipes/";

//chiamata al mock

// async function getRecipes() {

//     try {
//         const response = await RECIPES;
//         return response;
//     } catch (error) {
//         console.log(error)
//     }

// }

// chiamata al server con await / catch

// async function getRecipes() {
//   try {
//     const response = await fetch(apiBaseUrl + "/");
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     } else {
//       throw new Error("errore nella richiesta al server");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }


//chiamata api gestita con axios
async function getRecipes() {
  try {
    const response = await axios.get(apiBaseUrl);
    if (response.status === 200) {
      console.log("risposta: " + response.data);
      return response.data;
    } else {
      throw new Error("Errore nella richiesta al server!");
    }
  } catch (error) {
    console.log(error);
  }
}


//quando si fanno delle chiamate per dei parametri questi si scrivono tra le parentesi tonde

//chiamata mock

// async function getRecipe(id) {
//   try {
//     const response = await RECIPES.find((ricetta) => ricetta._id === id);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }

const getRecipe = async (id) => {
  try {
    const response = await fetch(apiBaseUrl + id);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Errore nella chiamata al server");
    }
  } catch (error) {
    console.log(error);
  }
};


const postRecipe = async (dati) => {
  try {
    const response = await axios.post(apiBaseUrl, dati);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

//siccome si avranno tante chiamate all'interno di questo file si può alla fine creare un oggetto contenente i vari metodi associando come chiave e valore lo stesso nome della chiamata che vogliamo richiamare, questo perché invece di fare tanti diversi export si usa un unico oggetto che li porta tutti quanti
const RecipeApi = {
  getRecipes: getRecipes,
  getRecipe: getRecipe,
  postRecipe: postRecipe
};

export default RecipeApi;
