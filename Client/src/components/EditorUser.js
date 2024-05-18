import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import UserApi from "../API/userApi";
import { Input } from "antd";
import { AuthContext } from "../auth/AuthContext";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Snackbar, Alert } from "@mui/material";

const EditorUser = () => {
  const { email } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate()

    const [open, setOpen] = useState("false")
    

//Comandi toast
   //gestione del tipo di messaggio
  const [severity, setSeverity] = useState("");

  //const message, quello che c'è scritto dentro
  const [message, setMessage] = useState("");

  //variabili per la posizione
  const vertical = "bottom";
  const horizontal = "right";

  //metodo per la chiusura toast
  const closeToast = () => {
    setOpen(false);
  };

    //useState che imposta i valori di default come oggetto con chiavi vuote
  const [dati, setDati] = useState({
    name: "",
    role: "",
    note: "",
    email: "",
  });

  // Funzione onchange che mi permette di modificare i valori nei campi input
  function changeData(evento) {
    setDati({
      ...dati,
      [evento.target.name]: evento.target.value,
    });
  }

    //funzione di submit che permette di aggiornare i dati 
  async function invia(evento) {
    evento.preventDefault();

      //dichiarare costante che assegna alle chiavi dell'oggetto preso dal database i valori di dati
    const updatedData = {
      name: dati.name,
      role: dati.role,
      note: dati.note,
      email: dati.email,
    };

      //await della chiamata api dedicata all'aggiornamento dei parametri che andranno a cambiare updateData
    await modificaUser(updatedData);
  }

  /*
  Funzione put

  1) metodo asincrono perché la chiamata api è asincrona
  2)nuovi dati passato come parametro preso da chiamata api che conta corpo che andrà ad essere aggiornato
  3)la response aspetta la risposta di UserApi sulla funzione modificaDetail, prende l'id da use params e i nuoviDati
  4)se si hanno dei dati in risposta, setDati li aggiorna
  */
  async function modificaUser( nuoviDati) {
    try {
      const response = await UserApi.modificaDetail(id, nuoviDati);
      if (response.data) {
        setDati(response.data);
          console.log("Dati aggiornati:", response.data);
           setSeverity("success");
           setMessage("Campi modificati correttamente");
           setOpen(true);
          setTimeout(() => {
              navigate("/profilo");
          }, 4000);

      } else {
          setSeverity("error");
          setMessage("Errore nella modifica utente");
          setOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect che al montaggio della pagina carica i dati dell'utente tramite chiamata API con chiave email
  useEffect(() => {
    // Funzione asincrona per ottenere i dati dell'utente
    const getUser = async () => {
      try {
        const response = await UserApi.getDetail(email);
        if (response.data) {
          setDati(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, [email]);

  return (
    <>
      <Contenitore>
        <div>
          <div className="container">
            {/* inizio form registrazione */}

            <form className="registrazione">
              <h2 className="titolo">Modifica il campo desiderato!</h2>

                          {/* div dati anagrafici inizio */}

              {/* NOME */}

              <div className="Dati">
                <label className="label" htmlFor="nome1">
                  Modifica nome:
                </label>
                <Input
                  id="name"
                  name="name"
                  value={dati.name}
                  onChange={changeData}
                />

                {/* Ruolo */}

                <label className="label" htmlFor="immagine1">
                  Modifica Ruolo:
                </label>
                <Input
                  id="role"
                  name="role"
                  value={dati.role}
                  onChange={changeData}
                />
                {/* Email */}

                <label className="label" htmlFor="difficolta1">
                  Modifica la Email:
                </label>
                <Input
                  id="email"
                  name="email"
                  value={dati.email}
                  onChange={changeData}
                />
                {/* Difficoltà */}

                <label className="label" htmlFor="descrizione1">
                  Modifica Note:
                </label>

                <Input
                  id="note"
                  name="note"
                  value={dati.note !== null ? dati.note : "Campo Vuoto"}
                  onChange={changeData}
                />

                <div className="bottone">
                  <button className="invia" type="button" onClick={invia}>
                    Conferma Modifiche
                  </button>
                </div>
              </div>
            </form>
          </div>

          <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={closeToast}
            anchorOrigin={{ vertical, horizontal }}
          >
            <Alert onClose={closeToast} severity={severity} variant="filled">
              {message}
            </Alert>
          </Snackbar>
        </div>
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

  .label {
    margin-top: 1%;
    margin-bottom: 1%;
  }



`;

export default EditorUser;
