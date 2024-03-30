// COMANDI REACT

// Comando creazione nuova app:  npx create - react - app Viaggiando

// Comando start file: npm start

// Chiudere il terminale: premere nel terminale e due volte CTRL + C

// Comando installazione react bootstrap: npm i react-bootstrap bootstrap

// Questi due comandi vengono utilizzati quando non funziona l'install tradizionale:

// Comando per installare pacchetti più adatti per la versione di react utilizzata: npm i --save

// Comando per intallare pacchetti più adatti che può essere usato sempre npm i --legacy--peer-deps


//------------------------------------------------------------------------------------------------------------

// è raro usare let in react perché lo stesso predilige l'immutabilià di stato delle variabili

// IF E FOR SU REACT:

/* const alunni = [
    {nome:
    cognome:
    età:
    },
    {nome:
    cognome:
    età:
},
{nome:
cognome:
età:
},
]
--------------------------------------------------------------------------------------------------------

L'IF su react:
{
allievi.lenght > 0 && (

<h2>Ciao</h2>
)}

tradotto if = {} return = () e con l'&& si possono concatenare più condizioni


// se messo tra parentesi tonda è considerata come "condizione"
{
(allievi.length > 0 || allievi.length > 2) && (

<h2>Ciao</h2>
)}


SINTASSI IF:

 if/{ condizione && (and) return/(
 effetto
 ) }


 ------------------------------------------------------------------------------------------------------

 CICLARE IN REACT (FOR)

quando si fa un ciclo si da prima IL NOME ELEMENTO con poi il MAP, poi prende 1 alla volta ogni ELEMENTO DELL'array e lo trasforma in una variabile temporanea

{alunni.map(alunno, index => ())}

SINTASSI

{nomeArray.metodo(map)(variabileTemp(item o nome generico), index => return/(

    CODICE HTML DA RITORNARE
))}


---------------------------------------------------------------------------------------------------------------

Gli elementi che vengono ripetuti dovrebbero avere una chiave univoca per ognuno di loro, assegnando per esempio l'index ad un ul (vedi esempio)

 {allievi.map((allievo, index) => (
              // assegnare una chiave univoca ad ogni elemento
              <ul key={index}>
                <li>Nome : {allievo.nome}</li>
                <li>Cognome: {allievo.cognome}</li>
                <li>Età: {allievo.eta}</li>
                <li>Indice: {index+1}</li>
              </ul>
            ))}




----------------------------------------------------------------------------------------------------------------


Componenti:

concettualmente react permette di utilizzare i componenti per de motivi:

o si creano i componenti DI PAGINA oppure si creano quelli A BLOCCHI

I COMPONENTI DI PAGINA SONO LA PAGINA STESSA, ad esempio APP.js (quella che manda in live la pagina)


I componenti a BLOCCHI sono quelli degli elementi che compongono la pagina

ci sono due modi di scrivere le funzioni:

function nome () {
    return()
}

o con l'arrow function

const nome = () => {
    return()
}



*/




