import React, { createContext, useState, useEffect } from "react";

//import di login
import { login as authenticate } from "./AuthService";

//in questo modo è già stato creato il contex che tramite a useContext riusciremo ad accedere a tutto quello contenuto qui dentro
export const AuthContext = createContext();

//provider necessario per utilizzare il context, che avvolge tutti i componenti trattandoli come figli e permette di richiamarne il contenuto

export const AuthProvider = ({ children }) => {
  //qui ovviamente si trova tutto quello che si vuole passare ai componenti

  //qui settiamo isAuth in base a quello che dice il local storage
  //qui vuol dire che la variabile isAuth è true se local stoage lo è altrimenti false
  //usato per gestire il login
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("isAuth" === "true")
  );

  //variabile per gestire il ruolo
  const [userRole, setUserRole] = useState(localStorage.getItem("useRole"));

  const [name, setName] = useState(localStorage.getItem("name"));

  const [email, setEmail] = useState(localStorage.getItem("email"));

  //metodo login del context

  //all'interno di questo metodo si importa login dal service, dal service deve tornare un oggetto con due chiavi success e userData, con una destutturazione si estrapolano i contenuti del return

  const login = async (email, password) => {
    const { success, userData } = await authenticate(email, password);
    //implicito true
    if (success) {
      setIsAuth(true);
      setUserRole(userData.role);
      setName(userData.name);
      setEmail(userData.email);
    } else {
      setIsAuth(false);
    }
    return { success, userData };
  };

  //metodo di logout

  const logout = () => {
    setIsAuth(false);
    setUserRole(null);

    //ripulire le local storage

    //rimuovendo l'item isAuth impostare come false sembra qualcosa di futile ma a livello di sicurezza è meglio

    localStorage.removeItem("isAuth");
    localStorage.removeItem("userRole");
    localStorage.removeItem("name");
    localStorage.removeItem("email");

    //opzionale ma comunque utile a livello di sicurezza
    localStorage.clear();
    return { success: true };
  };

  //useEffect
  //dovrà essere in ascolto quando isAuth e userRole andranno a cambiare
  useEffect(() => {
    localStorage.setItem("isAuth", isAuth);

    localStorage.setItem("userRole", userRole);

    localStorage.setItem("name", name);

    localStorage.setItem("email", email);
  }, [isAuth, userRole]);

  //return per passare tutte le funzioni del scritte come props
  return (
    <AuthContext.Provider
      value={{ isAuth, userRole, name, email, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/*
LOCAL STORAGE

esistono 3 tipologie di variabili, local Storage, session Storage e i cookies


le session storage sono le più vecchie, sono un immagazzinamento dei dati per le sessione, ovvero quando si faceva un login, che si diceva anche "aprire una sessione", si andavano a prendere i dati che erano disponibili solo sul pc utilizzato, solo su quella pagina, e solo finché chrome era aperto,  mentre  e quando si faceva il logout la sessione andava ad essere distrutta

----------------------------------------------------------

le local storage sono invece più nuove e sono state un grosso passo avanti nello sviluppo web immagazzina dei dati non dentro la sessione ma li mette in uno spazio temporane del browser, (due browser diversi hanno due local storage diverse), le local storage portano anche il nome di cache, a meno che non cancellata non viene mai cancellata, ad esempio senza fare un logout, quella nono viene mai eliminata

----------------------------------------------------------------------

i cookie invece sono delle localStorage a tempo, a meno che non esci te, il cookie dovrà distruggersi da solo dopo un tot di tempo, fondamentalmente si può dire che non esiste, perché serve una libreria a parte che setta un timer per la distruzione


sia se LOCAL che SESSION la sintassi è la stessa:

si usano SET ITEM, REMOVE ITEM, e GET item

inoltre c'è il comando CLEAR che cancella tutte le storage

LE STORAGE SONO SEMPRE RIFERITE AL PROPRIO SITO

RICORDARE CHE LE LOCALSTORAGE VANNO COL PREFISSO DEL SITO

*/
