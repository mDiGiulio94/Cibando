/*LA COMUNICAZIONE TRA COMPONENTI o CROSS COMPONENT COMUNICATION

la comunicazione tra componenti (con le PROPS) è la più usata in REACT, da padre a figlio

mentre da figlio a padre si usa la FUNZIONE DI CALL BACK

per passaggio però di dati tra componenti con PARENTELE MOLTO INNESTATE o anche SENZA PARENTELA TRA LORO, si usa con lo STETE MANAGER, (ad un colloquio per la genstione si può dire che si usa REDUX)


REDUX è uno STORE MANAGER ( o state manager ) per la gestione dei dati (gratuito), funge da store (archivio) nel quale vengono salvati i dati all'interno del progetto e permette di richiamarli in un punto qualsiasi del progetto.

VEDERE COME FUNZIONA A LIVELLO DI CONOSCENZA, PUò ESSERE UTILE PER COLLOQUI almeno per conoscenza a livello di flusso

-------------------------------------------------------------------------------------------------

Se si vuole evitare di usare REDUX si può usare la modalità nativo di REACT, i CONTEX, questi sono "contesti", ovvero, si crea un "ambiente di contesto" che funge da store e AVVOLGENDO L'INTERA APP fa si che ci su può accedere in qualsiasi punto dell'app

il nome esatto è API CONTEX

questo tipo di comunicazione si chiama CROSS COMPONENT COMUNICATION

------------------------------------------------------

SONO HOOK RICORDATELO
import React, { createContext, useContext, useState } from "react";



*/
