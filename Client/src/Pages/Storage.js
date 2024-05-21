// import React, { useState, useEffect, useContext } from "react";
// import { AuthContext } from "../auth/AuthContext";
// import styled from "styled-components";
// import { useParams } from "react-router-dom";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import { Select, Input } from "antd";
// import RecipeApi from "../API/recipeAPI";
// import Modale from "../components/Modale";
// import { Snackbar, Alert } from "@mui/material";

// const ModificaRicetta = () => {
//   //prende l'id della ricetta
//   const { id } = useParams();

//   const [open, setOpen] = useState(false);

//   const [openSnack, setOpenSnack] = useState(false);

//   //gestione del tipo di messaggio
//   const [severity, setSeverity] = useState("");

//   //const message, quello che c'è scritto dentro
//   const [message, setMessage] = useState("");

//   //variabili per la posizione
//   const vertical = "bottom";
//   const horizontal = "right";

//   //metodo per la chiusura toast
//   const closeToast = () => {
//     setOpenSnack(false);
//   };

//   //use state con oggetto i value di default dei parametri
//   const [formValues, setFormValues] = useState({
//     nome: "",
//     difficolta: "",
//     immagine: "",
//     descrizione: "",
//   });

//   const info = formValues;

//   //Apri/chiudi modale
//   const apriModale = () => {
//     setOpen(true);
//   };

//   const chiudiModale = () => {
//     setOpen(false);
//   };

//   //variabile di stato per il set della validazione form
//   const [valido, setValido] = useState(false);

//   // gestione cambiamento valore del form
//   const handleOnChange = (evento) => {
//     setFormValues({
//       //spread array con i valori di base
//       ...formValues,
//       //target sul nome
//       [evento.target.name]: evento.target.value.trim(),
//     });
//   };

//   const handleOnChangeSelect = (event) => {
//     setFormValues({
//       ...formValues,
//       difficolta: event,
//     });
//   };

//   const handleEditorChange = (event, value) => {
//     const data = value.getData();
//     setFormValues({
//       ...formValues,
//       descrizione: data,
//     });
//   };

//   //onSubmit per prevenire il defeult del form all'invio del form
//   //  async function onSubmitF(evento) {
//   //    evento.preventDefault();
//   //    chiudiModale();
//   //    console.log("campi del form ", formValues);

//   //    try {
//   //      const dati = {
//   //        title: formValues.nome,
//   //        difficulty: formValues.difficolta,
//   //        image: formValues.immagine,
//   //        description: formValues.descrizione,
//   //      };
//   //      const response = await RecipeApi.postRecipe(dati);
//   //      if (response && response.status === 200) {
//   //        setSeverity("success");
//   //        setMessage("ricetta registrata con successo!");
//   //        setOpenSnack(true);
//   //      } else {
//   //        setSeverity("error");
//   //        setMessage("Errore registrazione ricetta");
//   //        setOpenSnack(true);
//   //      }
//   //    } catch (error) {}
//   //  }

//   useEffect(() => {
//     const condizioni = Object.values(formValues).every(
//       (value) =>
//         value !== undefined &&
//         value !== null &&
//         value !== "" &&
//         value !== false &&
//         value !== "false"
//     );
//     setValido(condizioni);
//     //all'aggiornamento controlla questi campi
//   }, [formValues]);

//   async function prendiRicette() {
//     try {
//       const response = await RecipeApi.getRecipe(id);
//       if (response) {
//         console.log("quello che arriva dal database", response);
//         setFormValues({
//           nome: response.title,
//           difficolta: response.difficulty,
//           immagine: response.image,
//           descrizione: response.description,
//         });
//         console.log("nuovo valori di:", formValues);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     prendiRicette();
//     console.log("valori montaggio: ", formValues);
//   }, [id]);

//   return (
//     <>
//       <Contenitore>
//         <div className="container">
//           {/* inizio form registrazione */}

//           <form className="registrazione">
            // <h2 className="titolo">Modifica il campo desiderato!</h2>
//             {/* div dati anagrafici inizio */}

//             {/* NOME */}

            // <div className="Dati">
            //   <label className="label" htmlFor="nome1">
            //     Modifica nome ricetta:
            //   </label>
            //   <Input
            //     type="text"
            //     name="nome"
            //     id="nome"
            //     value={formValues.nome}
            //     onChange={handleOnChange}
            //   />

//               {/* immagine */}

            //   <label className="label" htmlFor="immagine1">
            //     Modifica l'immagine:
            //   </label>

            //   <Input
            //     type="immagine"
            //     name="immagine"
            //     id="immagine"
            //     value={formValues.immagine}
            //     onChange={handleOnChange}
            //   />
//               {/* SELECT */}

            //   <label className="label" htmlFor="difficolta1">
            //     Modifica la difficoltà:
            //   </label>
            //   <Select
            //     defaultValue={"Scegli una difficoltà"}
            //     onChange={handleOnChangeSelect}
            //     name="difficolta"
            //     id="difficolta"
            //   >
            //     <option value={1}>Molto Facile</option>
            //     <option value={2}>Facile</option>
            //     <option value={3}>Medio</option>
            //     <option value={4}>Impegniativo</option>
            //     <option value={5}>Difficile</option>
            //   </Select>

//               {/* TEXTAREA */}

            //   <label className="label" htmlFor="descrizione1">
            //     Modifica la descrizione della ricetta:
            //   </label>
            //   <div className="descrizione">
            //     <CKEditor
            //       editor={ClassicEditor}
            //       data={formValues.descrizione}
            //       onChange={handleEditorChange}
            //     />
            //   </div>
//               <div className="bottone">
//                 <button type="button" className="invia" onClick={apriModale}>
//                   Conferma Modifica
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//         <Modale
//           page="nuovaRicetta"
//           info={info}
//           open={open}
//           // invia={onSubmitF}
//         />
//         <Snackbar
//           open={openSnack}
//           autoHideDuration={4000}
//           onClose={closeToast}
//           anchorOrigin={{ vertical, horizontal }}
//         >
//           <Alert onClose={closeToast} severity={severity} variant="filled">
//             {message}
//           </Alert>
//         </Snackbar>
//       </Contenitore>
//     </>
//   );
// };

// const Contenitore = styled.div`
//   .container {
//     border: 1px solid black;
//     padding: 0;
//     display: flex;
//     justify-self: center;
//     margin-top: 3%;
//     margin-bottom: 3%;
//     width: 40%;

//     .registrazione {
//       width: 100%;

//       .titolo {
//         font-weight: 600;
//         margin-left: 3%;
//         margin-top: 3%;
//       }

//       .Dati {
//         height: 100%;
//         display: flex;
//         flex-direction: column;
//         margin: 3%;
//       }

//       .bottone {
//         display: flex;
//         justify-content: center;
//         margin-top: 15px;
//       }
//       .invia {
//         border-radius: 5px;
//         font-size: 17px;
//         font-weight: 600;
//         background-color: #8e210b;
//         color: white;
//         height: 100%;
//         width: 80%;
//         border: #8e210b;
//       }
//     }
//   }

//   .help {
//     color: #5a0001;
//     font-size: 14px;
//     font-weight: 600;
//   }

//   .prova {
//     height: 10px;
//     margin-bottom: 1%;
//   }

//   .label {
//     margin-top: 1%;
//     margin-bottom: 1%;
//   }

//   .errore {
//     border-color: red;
//   }

//   textarea {
//     resize: none;
//   }
// `;

// export default ModificaRicetta;
