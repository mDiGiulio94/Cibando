import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import UserApi from "../API/userApi";
import moment from 'moment';




const Profile = () => {

    const [dati, setDati] = useState({});
    const { email } = useContext(AuthContext);

    async function getUser() {
        try {
          const response = await UserApi.getDetail(email)
            if (response.data) {
              setDati(response.data)

}

        } catch (error) {
console.log(error)
        }
    }
    useEffect(() => {
        getUser();

}, [])

    return (
      <>
        <Contenitore>
          {dati && (
            <>
              Ciao {dati.name} ecco il riepilogo dei tuoi dati:
              <ul>
                <li>Nome: {dati.name}</li>
                <li>Email: {dati.email}</li>
                <li>Role: {dati.role}</li>
                <li>Note: {dati.note !== null ? dati.note : "Nessuna nota"}</li>
                <li>Iscritto dal: {moment(dati.createdAt).locale('it').format('dddd DD MMMM YYYY')}</li>
              </ul>
            </>
          )}
        </Contenitore>
      </>
    );
}

const Contenitore = styled.div``;


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