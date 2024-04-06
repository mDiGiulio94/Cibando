/*
STILI DINAMICI


  // in questo oggetto ci saranno coppie di css, ma non stando in css, bisogna scrivere in JSX ovvero senza inserire trattino, tutto attaccato e con camelcase, anche se la zona in cui viene scritto è javascript


Seguendo questo esempio si possono creare e gestide degli elementi dinamici in base alle necessità e alle funzioni che si vogliono implementare

  const bgDinamico = {
    backgroundColor: evidenziazione ? "yellow" : "white",
    fontSize: '50px',
    cursor: 'pointer',
    textAlign: 'left'

}

   evento al click come crearlo in react:

questa funzione dice semplicemente che ad un evento di settare una variabile al suo opposto(ad esempio false a true vieversa)
  const onEvidenziazione = () => {

    setEvidenziazione(!evidenziazione)

  }

best practice: la convenzione di nomi che si usa per delle funzioni che gestiscono cose è andleNomefunzione, perché cosi si capisce che si sta gestendo un evento









*/