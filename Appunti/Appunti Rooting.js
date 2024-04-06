/* APPUNTI ROOTING (definire dopo ma sono quasi sicuro che sia rooting)

la web app è una SPA una "Single page application", ma non significa che c'è un unica pagina, in realtà c'è l'index html che carica fino ad App.js, tramite index.js che innietta dentro il div root in html la stessa App.js, all'interno di questa c'è il return di tutte quelle che sono le pagine, il cambio di pagina è dato dal fatto che destruttura la pagina(esempio home) in favore della creazione di quella nuova(ad esempio ricette), bisogna in oltre far in modo che l'url cambi, come convenzione che per abitudine in un sito internet di solito quello accade (ad esempio Cibando/home => Cibando/Ricette), siccome React non ha un sistema nativo di cambio url, ci si può installare una libreria, la più utilizzata è 

npm i react-router-dom

dopo di che in app.js va fatto l'import

IMPORT DA FARE
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

dei quattro elementi dell'import, i primi tre vivono insieme Router è il contenitore globale di tutte le rotte, quindi tutto deve essere contenuto da lui, le rotte stanno dentro router, e ogni singola rotta deve essere in rotte, mentre link è il comando di collegamento tra le varie pagine(collegamento ipertestuale)

con il ROUTING SI GESTISCONO LE PAGINE

quando si vogliono vedere i parametri che qualcosa accetta si usa CTRL + SPAZIO, e l'opzione(quelle col cubo) che interessa in questo caso è PATH

lo / VUOL DIRE CHE SI NAVIGA NELLA ROTTA PRINCIPALE, scrivendo path ="/" e poi aggiungendo element= {<Home/>}, quindi se viene richiamato questo percorso, aggiungimi questo contenuto

Tutto quello che cambia va in routes, tutto quello che è fisso ve in Router

*/