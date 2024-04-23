//se il terminal ha scritto NODE l'app è in esecuzione, powershell significa chiuso per disattivare usare CTRL + C
// per installare una libreria si fa npm install

//per il posizionamento in navbar si può modificare attraverso il semplice css e si riaggiustano le posizioni

//siccome l'intera app è una funzione si può creare tranquillamente una variabile al suo interno prima del return


// CTRL + D serve per la selezione di elementi che possiedono lo stesso nome, questo prende una per una tutte le occorrenze, da la possibilità di fermarsi quando serve e poi modificarle tutte insieme a necessità

// per richiamare un evento al click al pulsante su react si aggiunge un event listener e si sceglio l'onClick per appunto un evento che cambia con un click (in react non c'è bisogno di aggiungere parentesi tonde)

//in programmzione l'opposto di qualcosa si dice LA NEGAZIONE per fare la negazione di mette un punto esclamativo, funziona solo con i booleani

//La parentesi graffa si usa in react quando si scriva JSX

//SINTASSI IF DI REACT:

// (TERNARIO) condizione ? (true) : (false)

// Comandi di gitHub
// git add .

// git commit -m

// git push

// SCARICARE PROGETTO GIT SOLUZIONI: se bisogna scaricare un progetto da git si può prima clonare con visual studio il progetto, entrando nel progetto su git e usando clona, prendere il progetto andare su visual studio e clonarlo.
// in alcuni casi però questo non è possibile, magari perché mancano i permessi quindi la seconda strada è scaricarsi un progetto in gormato zip e poi aprirlo e scompattarlo, bisogna accertarsi che la cartella zippata è quella principale ovvero che abbia presente SRC, PUBLIC e tutte le informazioni base del progetto scaricato, questo perché su pc può capitare che una volta aperto il file zip si crei una cartella e quella con i file principali viene trattata come una sottocartella.

// quando si prende un file da git, siccome la cartella node.modules pesa moltissimo per quanti file contiene, non viene mai copiata ne col push su git ne al pull da git

// Node_modules se non ha una buona rete di trasmissione dati c'è il rischio che non funzioni, perché li installa, ma se per un calo di banda c'è una corruzione di uno di questi file, può bloccare l'intero progetto


// La tilde ~ è un carattere generico che serve a rendere il percorso neutro, senza la necessità di doversi andare a cercare il percorso da soli, rendendo

//l'import con la tilde cerca in tutti i node_module dove trovare questo percorso

//il bootstraps di react non cerca nel percorso css ma scss

//FRATE RICORDATELO LA LUNGHEZZA DI UNA QUALSIASI COSA TE LA DA NOME.LENGTH NON CE CASCA N'ALTRA VOLTA SALAME


// COMANDO PER SCRIVERE STILI SCSS/CSS IN PAGE SU REACT
//SE SI HA BISOGNO DI UNA VERSIONE SPECIFICA SI METTE LA @ E POI IL NUMERO DELLA VERSIONE


//per applicare styled è consigliato creare un tag contenitore qualsiasi contenitore che funge da stile per tutta la pagina
//ad esempio <Container></Container>


//i metodi possono essere richiamati tramite lo scatenarsi di un evento (ad esempio un click o il premeri di un determinato pulsante, una o un certo numero di volte ecc...) ovvero finché non si verifica una condizione, QUANDO SI VUOLE CHE I METODI VENGANO MONTATI ALL'APERTURA DELLA PAGINA INDIPENDENTEMENTE DA QUELLO CHE FA L'UTENTE, si usa lo useEFFECT(), è sempre lo stesso hook ma in base a come lo scrivi gestisce le tre istanze precedenti (cancella modifica e posta)

//useSTATE() va importato all'interno di react, anche useEFFECT, ma può essere inserito con una virgola all'interno dello stasso import


//CONVIENE SEMPRE FARE FILE A PARTE A LIVELLO DI PULIZIA E ORDINE


//ALLA DOMANDA come è fatta una pagina? si risponde dicendo da IMPORT, FUNZIONE(componente), LOGICA, RETURN(html+jsx), e STILI(opzionali)

//una BUON PRATICA è fare CTRL + P ti aiuta a cercare i file per nome, rendendo più facile la ricerca di file soprattutto quando ci si trova a lavorare con un gran numero di componenti e pagine


//href è l'attributo di html molto vecchio in per spostarsi ad un altro percorso, i due problemi che ha sono:
//1) ricarica la pagina
//2) nasce per andare da un'altra parte

//siccome si vuole rimanere sempre in index html e non si vuole che si ricarichi la pagina bisogna usare invece il link


/*

la pagina misura sempre il 100% di width perciò se c'è il caso di dover suddividerlo il 4 cards si può impostare che la loro grandezza (in percentuale è meglio), gestendo gli spazi, ad esempio dividendo lo spazio di delle card come 20% e settando i margini al 5%, ma questo è applicabile a qualsiasi tipo di larghezza


SE SI TROVA IN AMBIENTE TYPESCRIPT bisogna creare un interfaccia identica all'oggetto (tipo quelli in cartella mock), in cui si specificano tutte le chiavi di che tipo sono (number sting boolean)

L'interfaccia va generalmente creata all'interno di una cartella "models" e il file è spesso chiamato x.model.js

l'interfaccia ha solo bisogno di export

//IL FIND SI BLOCCA ALLA PRIMA OCCORRENZA TROVATA, MA IL FILTER CONTINUA TUTTI I FILE

IL FILTER NASCE PER MOLTEPLICI RISULTATI, MENTRE IL FIND SOLO PER UN UNICO RISULTATO

FILTER RESTITUISCE UN'ARRAY DI OGGETTI, IL FIND UN UNICO OGGETTO

GLI HOOK ERANO ESCLUSIVA DI REACT SOLO DOPO SONO STATI AGGIUNTI DA ALTRI FORNITORI


con le {} in un import SIGNIFICA CHE SI STA PRENDENDO QUELL'ELEMENTO SPECIFICO INVECE CHE OGNI ELEMENTO


onClick={inviaTitolo} in questo modo si richiama una funzione SENZA PASSARE PARAMETRI

onClick={() => inviaTitolo(ricetta.titolo)} richiamo funzione su un EVENTO dove invece SI POSSONO PASSARE I PARAMETRI tramite una funzione anonima e un arrow function dove poi vanno inseriti i parametri


--------------------------------------------------------------------------

Esempio gestione evento generico

/*

     const [evidenziazione, setEvidenziazione] = useState(false);

     // in questo oggetto ci saranno coppie di css, ma non stando in css, bisogna scrivere in JSX ovvero senza inserire trattino, tutto attaccato e con camelcase, anche se la zona in cui viene scritto è javascript
     const bgDinamico = {
       backgroundColor: evidenziazione ? "yellow" : "white",
       fontSize: "50px",
       cursor: "pointer",
       textAlign: "left",
     };

     // evento al click come crearlo in react:

     const onEvidenziazione = () => {
       setEvidenziazione(!evidenziazione);
     };


     ----- Passaggio parametri
       <h2 style={bgDinamico} onClick={onEvidenziazione}>
              Benvenuti in Cibando
            </h2>
*/






