// La best practice delle VARIABILI DI STATO: questo concetto è un pilastro di react, ed è gestito dall'hook useState

// react nelle ultime versioni è passato da componenti con le classi, a componenti funzionali, ovvero componenti che sono delle funzioni, oltre a questo passaggio sono stati introdotti gli HOOKS, gli uncini o ganci

// l'hook useState serve gestisce le variabili, al 90% queste sono tutte gestite dallo useState, che va a sostituire let e var, lo useState ha scope GLOBALE, ed è dedicata solo a react

// la sintassi dello useState è: const [nome, setNome] = useState(valore) (IMPARERE A MEMORIA)

// Esempio :  const[cognome, setCognome] = useState(''); oppure const[alunni, setAlunni] = useState([]);

// lo useState o si importa nel componente o siccome app.js è figlio di index.js, questo può essere importato direttamente in index.js e verrà ereditato dai suoi componenti figli

// tutto quello scritto nella in react è JSX che è un linguaggio specifico di react che è un derivato di javascript

// JSX sta per javascriptXLM e permette di scrivere e aggiungere html tramite react

// interpolazione dei dati significa prendere un dato che è nella classe e stamparlo a video*INTERPOLAZIONE DATI

// in react è buona pratica usare CLASSNAME invece che className, questo viene fatto per evitare confusione tra classi di programmazione e classi di css