/*
DEBUGGING E BREAKPOINT

queste sono funzoni che sono fondamentali per verificare se il codice funziona o no, e soprattuto per individuare in quale punto del codice questo smette di funzionare, per individuare il punto di errore si usano i BREAKPOINT, ovvero dei punti che fanno scorrere il codice fino ad un certo "punto", rendendo più facile individuare dove si trova l'errore

------------------------------------------------------------------------------------------------------------

una buona pratica è tenere sempre l'ispezione con le sources aperte, in genere tra i 2-3 file per verificare sempre il flusso di codice costantemente.

-----------------------------------------------------------------------------------------------------------------

i punti di blocco vanno messi su delle righe di codice specifiche, ad esempio se si vuole vedere se una funzione che inizia a riga 9 e finisce a 15 si possono i breakpoint tra 9 e 20, il codice quindi eseguirà solo quella funzione e si fermerà, si possono mettere anche solo a 9 e 20 breakpoint iniziali, ma poi si possono mettere anche in tutte le linee di codice tra 9 e 20

--------------------------------------------------------------------------------------------------------------------

i breakpoint vengono tutti inseriti prima dell'esecuzione del codice, metterli in un punto in cui il codice è stato eseguito a volte non è possibile, ad esempio su un return. In questo caso ci si può mettere sulla riga successiva o si mette un breakpoint alla fine del metodo analizzato ad esempio se sono sta 9-30 e ci sono due metodi e il primo finisce a 16 si può mettere un breakpoint a li per farlo funzionare



*/