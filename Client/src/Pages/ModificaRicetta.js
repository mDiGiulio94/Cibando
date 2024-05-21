import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Select, Input } from "antd";
import RecipeApi from "../API/recipeAPI";
import Modale from "../components/Modale";
import { Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ModificaRicetta = () => {

  const { id } = useParams();

  const navigate = useNavigate()


  const [valori, setValori] = useState({
  });


 function changeValori(evento) {
   setValori({
     ...valori,
     [evento.target.name]: evento.target.value,
   });
  }
  
  //DI A DANILO CHE IL CKEDITOR SPACCA TUTTO

  //   const handleEditorChange = (event, value) => {
  //     const data = value.getData(id);
  //     setValori({
  //       ...valori,
  //       descrizione: data,
  //     });
  // };

    const handleOnChangeSelect = (event) => {
      setValori({
        ...valori,
        difficolta: event,
      });
    };

  async function aggiornaRicette(modifiche) {
    try {
      const response = await RecipeApi.putRecipe(id, modifiche)
      if (response.data) {

        console.log("guarda qui:", response.data)
        setValori(response.data)
        navigate("/ricette");
      }
    } catch (error) {
      console.log(error)
      return error

    }
  

  }
  
  async function invia(evento) {
    evento.preventDefault();

    const ricettaAggiornata = {
      title: valori.nome,
      image: valori.immagine,
      difficulty: valori.difficolta,
      description: valori.descrizione

    };
    await aggiornaRicette(ricettaAggiornata)

  }


    const getRicette = async () => {
      try {
        const response = await RecipeApi.getRecipe(id);
        if (response) {
          setValori({
            nome: response.title,
            difficolta: response.difficulty,
            immagine: response.image,
            descrizione: response.description,
          });
          console.log(response);
        }
      } catch (error) {
        console.log(error);
        return error;
      }
    };


  useEffect(() => {
  getRicette()
  },[id])




  return (
    <>
      <Contenitore>
        <div className="container">
          <form className="registrazione">
            <h2 className="titolo">Modifica il campo desiderato!</h2>
            <div className="Dati">
              {/* TITOLO RICETTA */}
              <label className="label" htmlFor="nome1">
                Modifica nome ricetta:
              </label>
              <Input
                name="nome"
                id="nome"
                value={valori.nome}
                onChange={changeValori}
              />

              {/*-----------------------------------------------------------  */}

              {/* Immagine */}

              <label className="label" htmlFor="immagine1">
                Modifica l'immagine:
              </label>

              <Input
                name="immagine"
                id="immagine"
                value={valori.immagine}
                onChange={changeValori}
              />

              {/*-------------------------------------------------------------  */}

              {/* Difficoltà */}

              <label className="label" htmlFor="difficolta1">
                Modifica la difficoltà:
              </label>
              <Select
                value={valori.difficolta}
                name="difficolta"
                id="difficolta"
                onChange={handleOnChangeSelect}
              >
                <option value={1}>Molto Facile</option>
                <option value={2}>Facile</option>
                <option value={3}>Medio</option>
                <option value={4}>Impegniativo</option>
                <option value={5}>Difficile</option>
              </Select>

              {/*---------------------------------------------------  */}

              {/* DESCRIZIONE */}

              <label className="label" htmlFor="descrizione1">
                Modifica la descrizione della ricetta:
              </label>
              <div className="descrizione">
                <Input.TextArea
                  name="desctizione"
                  id="descrizione"
                  value={valori.descrizione}
                  onChange={changeValori}
                />

                {/* <CKEditor editor={ClassicEditor} data={valori.descrizione}
                   onChange={handleEditorChange} */}
              </div>

              {/* ---------------------------------------------------------------------------- */}
              <div className="bottone">
                <button className="invia" type="button" onClick={invia}>
                  Conferma Modifiche
                </button>
              </div>
            </div>
          </form>
        </div>
      </Contenitore>
    </>
  );
}

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


`;


export default ModificaRicetta;