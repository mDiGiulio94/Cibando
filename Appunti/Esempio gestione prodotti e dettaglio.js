/*
Fase 1: Preparazione file fittizio prova su cui lavorare per vedere se funziona o pure no

Fase 2: in API creare file SERVICE (non necessario perché può essere scritto tutto nel componente ma è più comodo mettere le chiamate in diversi file api, per ordine e pulizia codice)

il file API conterrà tutti i metodi dedicati a gestire le chiamate al lato server e le riporta al lato client (il nome di questo tipo di componente è solitamente chiamato SERVIVE)

il SERVICE può essere usato anche con il file mock per verificare la funzionalità delle chiamate anche in assenza di server

APPUNTO CHIAMATE "COMPATTE"
siccome si avranno tante chiamate all'interno di questo file si può alla fine creare un oggetto contenente i vari metodi associando come chiave e valore lo stesso nome della chiamata che vogliamo richiamare, questo perché invece di fare tanti diversi export si usa un unico oggetto che li porta tutti quanti
const RecipeApi = {

getRecipes: getRecipes


}

export default RecipeApi

*/