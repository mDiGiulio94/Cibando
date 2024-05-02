import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useUserContext } from "../Context/userContext";

//import material
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


const Modale = ({pag}) => {

  const [open, setOpen] = useState(false);

  const { user, registerUser } = useUserContext();

  const chiudiModale = () => {
    //questo dice che prima di chiudere la modale, si svuota l'utente e poi chiude la modale
    registerUser(null);
    setOpen(false);
  };




    return (
      <>
        {pag === "home" && (
          <Contenitore>
            <Dialog open={open} onClose={chiudiModale}>
              <DialogTitle>
                {/* il punto interrogativo serve a rendere il contenuto facoltativo nel caso non fosse valorizzato */}
                Grazie, {user?.name} per esserti registrato!
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Ecco il riepilogo dei tuoi dati:
                  <ul>
                    <li>{user?.name}</li>
                    <li>{user?.email}</li>
                  </ul>
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button onClick={chiudiModale} autoFocus variant="contained">
                  Chiudi
                </Button>
              </DialogActions>
            </Dialog>
          </Contenitore>
        )}
        {pag === "ricette" && (
          <Contenitore>
            <Dialog open={open} onClose={chiudiModale}>
              <DialogTitle>
                {/* il punto interrogativo serve a rendere il contenuto facoltativo nel caso non fosse valorizzato */}
                Grazie, {user?.name} per esserti registrato!
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Ecco il riepilogo dei tuoi dati:
                  <ul>
                    <li>{user?.name}</li>
                    <li>{user?.email}</li>
                  </ul>
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button onClick={chiudiModale} autoFocus variant="contained">
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