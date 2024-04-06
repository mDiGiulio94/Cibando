/*TYPESCRIPT è un'estensione di javascript che serbe a tipizzare ogni variabile e funzione o valore di ritorno e ci oggre un controllo in tempo reale del flusso di dati a differenza di javascript, mentre scrivi da solo typescript ti individua subito l'errore. (richiede necessariamente node.js)

 Per tipizzare una variabile di stato, che speso non si tipizza perché se la prende da solo tramite ineference, ovvero che quando viene dichiarata si prende il valore preso dalla dichiarazione, a meno che si mette il nome e non ci si mette nulla ad esempio

 const [x, setX] = useState < string > ();
 è molto raro che accada ma se dovesse esercene bisogno questo è il tipo di modalità che si fa, ad esempio

 const [y, setY] = useState < number[] | undefined > ([]);SE SI TROVA IN AMBIENTE TYPESCRIPT bisogna creare un interfaccia identica all'oggetto (tipo quelli in cartella mock), in cui si specificano tutte le chiavi di che tipo sono (number sting boolean)

 l'interfaccia ha solo bisogno di export

*/