import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import UserApi from "../API/userApi";
import moment from 'moment';
import Button from "@mui/material/Button";


const Profile = () => {



  const [dati, setDati] = useState({});
  const { email } = useContext(AuthContext);




  //Chiamata asincrona per la presa dell'utente tramite email

  async function getUser() {
    try {
      const response = await UserApi.getDetail(email);
      if (response.data) {
        setDati(response.data);

      }
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Contenitore>
        <div className="display">
          {dati && (
            <>
              <h2> Ciao {dati.name} ecco il riepilogo dei tuoi dati:</h2>
            </>
          )}

          {dati && (
            <>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Ruolo</th>
                    <th>Note</th>
                    <th>Iscritto dal:</th>
                  </tr>
                </thead>
                <tbody>
                  <td>{dati.name}</td>
                  <td>{dati.email}</td>
                  <td>{dati.role}</td>
                  <td>{dati.note !== null ? dati.note : "Nessuna nota"}</td>
                  <td>
                    {moment(dati.createdAt)
                      .locale("it")
                      .format("dddd DD MMMM YYYY")}
                  </td>
                </tbody>
              </table>
            </>
          )}
          <Link to={`/modificaUser/${dati._id}`}>
            <button className="invia" type="button">
              Modifica
            </button>
          </Link>
        </div>
      </Contenitore>
    </>
  );
}

const Contenitore = styled.div`
  .display {
    display: flex;
    flex-direction: column;
    margin-left: 25%;
  }

  table {
    border: solid black 1px;
    width: 50%;
    margin-top: 1%;
    margin-bottom: 1%;
  }

  th {
    border: solid black 1px;
    text-align: center;
    height: 50px;
  }

  tr {
    border: solid black 1px;
  }
  td {
    border: solid black 1px;
    height: 50px;
  }
  .invia {
    border-radius: 5px;
    font-size: 17px;
    font-weight: 600;
    background-color: #8e210b;
    color: white;
    height: 100%;
    width: 15%;
    border: #8e210b;
    margin-bottom: 3%;
  }
`;


export default Profile


/*
per formattare la data si utilizza spesso moment.js un manipolatore date per js

facendo si che si possano impostare condizioni particolari per la stampa della data oltre per cambiarne il formato

moment è una libreria puoi cercarla su internet e poi instarlarla attraverso il comando

npm i moment --save



CK-EDITOR è una delle librerie più utilizzate per la gestione dei font lato utente

npm i --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic

due dipendenze installate qui sopra l'editor ottimizzato per react e il suo tema base 

*/