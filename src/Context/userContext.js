//import degli hook per creare ed utilizzare i context
import React, { createContext, useContext, useState } from "react";

//creazione contesto
const UserContext = createContext();

/*ogni context ha bisogno di un provider che fornisce il servizio di contesti */

//in caso si creanno altri context basta dare copia incolla di questo e cambiare i nomi

//il motivo per il quale non ci si ferma solo all'export della costante me si imposta in questo modo in arro function è per ridurre la quantità di importazioni, in quanto preparato per l'uso


//questo export è quello che verrà reso UTILIZABILE DAGLI ALTRI COMPONENTI
export const useUserContext = () => useContext(UserContext)


/*ogni context ha bisogno di un provider che fornisce il servizio di contesti

dopo di che si crea un PROVIDER, al suo interno saranno le FUNZIONI, i METODI e gli STATI che si vogliono condivisi, come le post i delate ecc.. ma anche variabili che contengono dati
*/
export function UserProvider({ children }) {

    const [user, setUser] = useState(null);


    //funzione che se richiamata setta su user i dati che gli arrivano

/* nonostante l'aspetto da componente questo è migliormente chiamato CONTEX */
    const registerUser = (userData) => {
        setUser(userData);
    }


    return (


        //user e registerUser fungono come da props globali che vengono passati a tutti i componenti del codice
        //---------------------------------------------------------------------------------------------
        //Il provider ha il compito di avvolgere tutti gli altri componenti
        <UserContext.Provider value={{ user, registerUser }}>
            {/* children si riferisce a quello che sta scritto in altro nell'export, questo perché tutto quello che viene messo all'interno della funzione verrà trasformato in children */}
            {children}
</UserContext.Provider>

    )
}