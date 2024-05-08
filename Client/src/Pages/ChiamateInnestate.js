import { primaChiamata, secondaChiamata } from "../API/apiService";
import React, { useState, useEffect } from "react";

function ChiamateInnsestate() {
    const [dati, setDati] = useState(null);
    


    //non importa l'errore in response l'importante è rispettare la struttura presente diprima chiamata e poi seconda chiamata
    useEffect(() => {

        primaChiamata()
            .then(response => {
                //processo i dati della prima chiamata ad esempio:
                //non sempre serve fare un processo, basta anche solo prendere i dati
                const utente = response.find(item => item.città === 'roma');
                // dopo aver preso i dati si può procedere eseguendo la seconda chiamata.
                return secondaChiamata
            })
            //i then possono essere concatenati indefinitivamente
            .then(secondaResponse => {
                //processo i dati della seconda chiamata
                setDati({
                  datiPrincipali: 'response.data',
                  datiSecondara: secondaResponse.data,
                });
            })
            .catch(error => {
            //gestoione errori qui 
        })
    },[])
}


export default ChiamateInnsestate