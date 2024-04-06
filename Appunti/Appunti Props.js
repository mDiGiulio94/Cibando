/*
Le props sono un altro pilasto di react e servono per passare i dati da componente padre a componente figlio, ad esempio se si ha una pagina X e c'è un altro componentte Y, se si vuole mettere Y in X in genere si fa l'export e l'import, e lo si mette nel JSX, un componente importato vuol dire che Y è FIGLIO del componente PADRE X.

il componente padre può passare dei contenuti al componente figlio, queste cose che può passare sono le PROPRS o le proprietà, le funzioni alle quali si vogliono passare i parametri sono inseriti all'interno di una funzione, nelle parentesi tonde.

le props, prima si va nel PADRE e si aggiunge una props

solitamente se le proprs si passano da padre a figlio per non impiccarsi con i nomi si usano gli stessi, sia per la props che per la variabile di stato

IL FIGLIO RICEVE IL NOME DELLA PROPS MA CON VALORE DELLA VARIABILE DI STATO

la props ha vari modi di essere passata, si in genere mettono all'interno delle parentesi tonde e poi vengono passate all'interno del codice.

Se interessa importare più proprs si può sia fare il metodo tradizionale o semplicemente si scriva props solo dentro le parentesi,che verrà visto come un unico oggetto


*/