import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Select, Input } from "antd";


import Modale from "../components/Modale";

const Contatti = () => {
  const [open, setOpen] = useState(false);

  //use state con oggetto i value di default dei parametri
  const [formValues, setFormValues] = useState({
    nome: "",
    selettore: "",
    email: "",
    oggetto: "",
    cellulare: "",
    messaggio: "",
  });

  const info = formValues

  //Apri/chiudi modale
  const apriModale = () => {
    setOpen(true)
  };

  const chiudiModale = () => {
     setOpen(false);

  };

  //Gestione modale con dati del form

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
      selettore: event,
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
      //campo di regole da rispettare per la email valida
      if (name === "email") {
        //regex che stabilisce le regole
        const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        //condizione per la quale se la regex è falsa stampa l'errore
        if (!emailRegex.test(value)) {
          setError((prevError) => ({
            ...prevError,
            [name]: "Il campo email deve essere valido",
          }));
        } else {
          //se non ci sono errori non lasciare nessun errore
          setError((prevError) => ({
            ...prevError,
            [name]: undefined,
          }));
        }
      } else {
        setError((prevError) => ({
          ...prevError,
          [name]: undefined,
        }));
      }
    }
  };

  //onSubmit per prevenire il defeult del form all'invio del form
  function onSubmitF(evento) {
    evento.preventDefault();
    console.log("campi del form ", formValues);
  
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


console.log(info)
  return (
    <>
      <Contenitore>
        <div className="container">
          {/* inizio form registrazione */}

          <form className="registrazione" onSubmit={onSubmitF}>
            <h2 className="titolo">Contattaci</h2>
            {/* div dati anagrafici inizio */}

            {/* NOME */}

            <div className="Dati">
              <label className="label" htmlFor="nome1">
                Inserisci il tuo nome :
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

              {/* EMAIL */}

              <div className="prova">
                {error.email && <p className="help ">{error.email}</p>}
              </div>
              <label className="label" htmlFor="email1">
                Inserisci la tua mail :
              </label>

              <Input
                type="email"
                name="email"
                id="email"
                className={`control ${error.email ? "errore" : ""}`}
                value={formValues.email}
                onChange={handleOnChange}
                onBlur={validazioneCampi}
              />
              <div className="prova">
                {error.email && <p className="help ">{error.email}</p>}
              </div>

              {/* OGGETTO */}

              <div className="prova">
                {error.data && <p className="help ">{error.data}</p>}
              </div>
              <label className="label" htmlFor="oggetto1">
                Oggetto :
              </label>

              <Input
                type="oggetto"
                name="oggetto"
                id="oggetto"
                className={`control ${error.oggetto ? "errore" : ""}`}
                value={formValues.oggetto}
                onChange={handleOnChange}
                onBlur={validazioneCampi}
              />
              <div className="prova">
                {error.oggetto && <p className="help ">{error.oggetto}</p>}
              </div>

              {/* CELLULARE */}

              <div className="prova">
                {error.data && <p className="help ">{error.data}</p>}
              </div>
              <label className="label" htmlFor="cellulare1">
                Inserisci un cellulare :
              </label>

              <Input
                type="cellulare"
                name="cellulare"
                id="cellulare"
                className={`control ${error.cellulare ? "errore" : ""}`}
                value={formValues.cellulare}
                onChange={handleOnChange}
                onBlur={validazioneCampi}
              />
              <div className="prova">
                {error.cellulare && <p className="help ">{error.cellulare}</p>}
              </div>

              {/* SELECT */}

              <label className="label" htmlFor="selettore">
                Di cosa hai bisogno?
              </label>
              <Select
                defaultValue={"Seleziona un servizio"}
                onChange={handleOnChangeSelect}
                name="selettore"
                id="selettore"
                className={`control ${error.selettore ? "errore" : ""}`}
              >
                <option value={"Pagamenti"}>Pagamenti</option>
                <option value={"Prenotazioni"}>Prenotazioni</option>
                <option value={"Informazioni"}>Informazioni</option>
              </Select>
              <div className="prova">
                {error.selettore && <p className="help ">{error.selettore}</p>}
              </div>

              {/* TEXTAREA */}

              <label className="label" htmlFor="messaggio">
                Lasciaci un messaggio:
              </label>

              <Input.TextArea
                rows={4}
                onBlur={validazioneCampi}
                onChange={handleOnChange}
                name="messaggio"
                id="messaggio"
                value={formValues.messaggio}
                className={`control ${error.selettore ? "errore" : ""}`}
              />
              <div className="prova">
                {error.messaggio && <p className="help ">{error.messaggio}</p>}
              </div>
              <div className="bottone">
                <button type="submit" className="invia" disabled={!valido}
                onClick={apriModale}>
                  Invia Richiesta
                </button>
              </div>
            </div>
          </form>
        </div>
        <Modale page="contatti" chiudiModale={chiudiModale} info={info} open={open} />
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

  textarea{
    resize: none;
  }
`;

export default Contatti;