import React from "react";
import styled from "styled-components";
import { useUserContext } from "../Context/userContext";

//import material
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const Modale = (props) => {





    return (
      <>
        {props.page === "home" && (
          <Contenitore>
            <Dialog open={props.open} onClose={props.chiudiModale}>
              <DialogTitle>
                {/* il punto interrogativo serve a rendere il contenuto facoltativo nel caso non fosse valorizzato */}
                <div> Grazie, {props.user?.name} per esserti registrato!</div>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Ecco il riepilogo dei tuoi dati:
                  <ul>
                    <li>{props.user?.name}</li>
                    <li>{props.user?.email}</li>
                  </ul>
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button
                  onClick={props.chiudiModale}
                  autoFocus
                  variant="contained"
                >
                  Chiudi
                </Button>
              </DialogActions>
            </Dialog>
          </Contenitore>
        )}

        {props.page === "ricette" && (
          <Contenitore>
            <Dialog open={props.open} onClose={props.chiudiModale}>
              <DialogTitle>
                <div>Ecco il nome della ricetta</div>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <div>
                    <h3>{props.titolo}</h3>
                  </div>
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button
                  onClick={props.chiudiModale}
                  autoFocus
                  variant="contained"
                >
                  Chiudi
                </Button>
              </DialogActions>
            </Dialog>
          </Contenitore>
        )}
        {props.page === "contatti" && (
          <Contenitore>
            <Dialog open={props.open} onClose={props.chiudiModale}>
              <DialogTitle>
                <div>
                  Grazie per averci contattato! Questo è il riepilogo della tua
                  richiesta:
                </div>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <ul>
                    <li>{props.info?.nome}</li>
                    <li>{props.info?.email}</li>
                    <li>{props.info?.selettore}</li>
                    <li>{props.info?.oggetto}</li>
                    <li>{props.info?.cellulare}</li>
                    <li>{props.info?.messaggio}</li>
                  </ul>
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button
                  onClick={props.chiudiModale}
                  autoFocus
                  variant="contained"
                >
                  Chiudi
                </Button>
              </DialogActions>
            </Dialog>
          </Contenitore>
        )}
        {props.page === "nuovaRicetta" && (
          <Contenitore>
            <Dialog open={props.open} onClose={props.chiudiModale}>
              <DialogTitle>
                <div>Questo è il riepilogo dei dati inseriti, confermare?</div>
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  <ul>
                    <li>{props.info?.nome}</li>
                    <li>{props.info?.difficolta}</li>
                    <li>{props.info?.date}</li>
                    <li>{props.info?.immagine}</li>
                    <li>{props.info?.descrizione}</li>
                  </ul>
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button onClick={props.invia} autoFocus variant="contained">
                  Invia
                </Button>
              </DialogActions>
            </Dialog>
          </Contenitore>
        )}
        {props.page === "logout" && (
          <Contenitore>
            <Dialog open={props.open} onClose={props.chiudiModale}>
              <DialogTitle>
                <div> Hai effettuato il logout con successo!</div>
              </DialogTitle>
           <DialogActions>
                <Button
                  onClick={props.chiudiModale}
                  autoFocus
                  variant="contained"
                >
                  Chiudi
                </Button>
              </DialogActions>
            </Dialog>
          </Contenitore>
        )}
      </>
    );
}

const Contenitore = styled.div``;

export default Modale