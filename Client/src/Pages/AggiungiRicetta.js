import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Select, Input } from "antd";
import { Snackbar, Alert } from "@mui/material";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Modale from "../components/Modale";

import RecipeApi from "../API/recipeAPI";

const AggiunngiRicetta = () => {

  const [open, setOpen] = useState(false);

  const [openSnack, setOpenSnack] = useState(false);

  //gestione del tipo di messaggio
  const [severity, setSeverity] = useState("");

  //const message, quello che c'è scritto dentro
  const [message, setMessage] = useState("");

  //variabili per la posizione
  const vertical = "bottom";
  const horizontal = "right";

  //metodo per la chiusura toast
  const closeToast = () => {
    setOpenSnack(false);
  };

  //use state con oggetto i value di default dei parametri
  const [formValues, setFormValues] = useState({
    nome: "",
    difficolta: "",
    immagine: "",
    descrizione: "",
  });

  const info = formValues;

  //Apri/chiudi modale
  const apriModale = () => {
    setOpen(true);
  };

  const chiudiModale = () => {
    setOpen(false);
  };

  //variabile di stato per la gestione degli errori

  const [error, setError] = useState({});

  //variabile di stato per il set della validazione form
  const [valido, setValido] = useState(false);

  // gestione cambiamento valore del form
  const handleOnChange = (evento) => {
    setFormValues({
      //spread array con i valori di base
      ...formValues,
      //target sul nome
      [evento.target.name]: evento.target.value.trim(),
    });
  };

  const handleOnChangeSelect = (event) => {
    setFormValues({
      ...formValues,
      difficolta: event,
    });
  };

const handleEditorChange = (event, value) => {
  const data = value.getData();
  setFormValues({
    ...formValues,
    descrizione: data,
  });
};


  //gestione degli errori
  const validazioneCampi = (evento) => {
    //destrutturazione oggetto che prende come valori un nome e value degli elementi target (quelli negli input del form)
    const { name, value } = evento.target;
    //taglio degli spazi vuoti ai valori inseriti tramite tim, se il nome è vuoto, stampa il messaggio di errore
    if (value.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        [name]: "Perfavore, completa il campo",
      }));
    } else {
      setError((prevError) => ({
        ...prevError,
        [name]: undefined,
      }));
    }
  };

  //onSubmit per prevenire il defeult del form all'invio del form
  async function onSubmitF(evento) {
    evento.preventDefault();
    chiudiModale();
    console.log("campi del form ", formValues);

    try {
      const dati = {
        title: formValues.nome,
        difficulty: formValues.difficolta,
        image: formValues.immagine,
        description: formValues.descrizione,
      };
      const response = await RecipeApi.postRecipe(dati);
      if (response && response.status === 200) {
        setSeverity("success");
        setMessage("ricetta registrata con successo!");
        setOpenSnack(true);
      } else {
        setSeverity("error");
        setMessage("Errore registrazione ricetta");
        setOpenSnack(true);
      }
    } catch (error) {}
  }

  useEffect(() => {
    //se in un valore dell'oggetto è presente un errore, questa è valorizzata e quindi lancia l'errore, altrimenti non ci sono errori
    const isValid = Object.values(error).every((error) => !error);

    const condizioni = Object.values(formValues).every(
      (value) =>
        value !== undefined &&
        value !== null &&
        value !== "" &&
        value !== false &&
        value !== "false"
    );
    setValido(isValid && condizioni);
    //all'aggiornamento controlla questi campi
  }, [formValues, error]);

  return (
    <>
      <Contenitore>
        <div className="container">
          {/* inizio form registrazione */}

          <form className="registrazione" onSubmit={onSubmitF}>
            <h2 className="titolo">
              Completa il form per inserire una nuova ricetta!
            </h2>
            {/* div dati anagrafici inizio */}

            {/* NOME */}

            <div className="Dati">
              <label className="label" htmlFor="nome1">
                Inserisci il nome della ricetta :
              </label>
              <Input
                type="text"
                name="nome"
                id="nome"
                className={`control ${error.nome ? "errore" : ""}`}
                value={formValues.nome}
                onChange={handleOnChange}
                onBlur={validazioneCampi}
              />
              <div className="prova">
                {error.nome && <p className="help ">{error.nome}</p>}
              </div>

              {/* immagine */}

              <label className="label" htmlFor="immagine1">
                Inserisci un immagine :
              </label>

              <Input
                type="immagine"
                name="immagine"
                id="immagine"
                className={`control ${error.immagine ? "errore" : ""}`}
                value={formValues.immagine}
                onChange={handleOnChange}
                onBlur={validazioneCampi}
              />
              <div className="prova">
                {error.immagine && <p className="help ">{error.immagine}</p>}
              </div>

              {/* SELECT */}

              <label className="label" htmlFor="difficolta1">
                Inserisci la difficoltà:
              </label>
              <Select
                defaultValue={"Scegli un campo"}
                onChange={handleOnChangeSelect}
                name="difficolta"
                id="difficolta"
                className={`control ${error.difficolta ? "errore" : ""}`}
              >
                <option value={1}>Molto Facile</option>
                <option value={2}>Facile</option>
                <option value={3}>Medio</option>
                <option value={4}>Impegniativo</option>
                <option value={5}>Difficile</option>
              </Select>
              <div className="prova">
                {error.difficolta && (
                  <p className="help ">{error.difficolta}</p>
                )}
              </div>

              {/* TEXTAREA */}

              <label className="label" htmlFor="descrizione1">
                Descrizione Ricetta:
              </label>
              <div className="descrizione">
                <CKEditor
                  editor={ClassicEditor}
                  data={formValues.descrizione}
                  onChange={handleEditorChange}
                />
              </div>
              <div className="prova">
                {error.descrizione && (
                  <p className="help ">{error.descrizione}</p>
                )}
              </div>
              <div className="bottone">
                <button
                  type="button"
                  className="invia"
                  disabled={!valido}
                  onClick={apriModale}
                >
                  Invia Richiesta
                </button>
              </div>
            </div>
          </form>
        </div>
        <Modale page="nuovaRicetta" info={info} open={open} invia={onSubmitF} />
        <Snackbar
          open={openSnack}
          autoHideDuration={4000}
          onClose={closeToast}
          anchorOrigin={{ vertical, horizontal }}
        >
          <Alert onClose={closeToast} severity={severity} variant="filled">
            {message}
          </Alert>
        </Snackbar>
      </Contenitore>
    </>
  );
};

const Contenitore = styled.div`
  .container {
    border: 1px solid black;
    padding: 0;
    display: flex;
    justify-self: center;
    margin-top: 3%;
    margin-bottom: 3%;
    width: 40%;

    .registrazione {
      width: 100%;

      .titolo {
        font-weight: 600;
        margin-left: 3%;
        margin-top: 3%;
      }

      .Dati {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 3%;
      }

      .bottone {
        display: flex;
        justify-content: center;
        margin-top: 15px;
      }
      .invia {
        border-radius: 5px;
        font-size: 17px;
        font-weight: 600;
        background-color: #8e210b;
        color: white;
        height: 100%;
        width: 80%;
        border: #8e210b;
      }
    }
  }

  .help {
    color: #5a0001;
    font-size: 14px;
    font-weight: 600;
  }

  .prova {
    height: 10px;
    margin-bottom: 1%;
  }

  .label {
    margin-top: 1%;
    margin-bottom: 1%;
  }

  .errore {
    border-color: red;
  }

  textarea {
    resize: none;
  }
`;

export default AggiunngiRicetta;
