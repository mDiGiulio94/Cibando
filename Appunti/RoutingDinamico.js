/*APPUNTI ROUTING DINAMICO

Bisogna predisporre il routing a ricevere un parametro url (generalmente univoco),
questo parametro è in genere l'ID

 <Route path="/dettaglio/:id" element={<DetailRecipe />} />

 con questa scrittura si dice che quello che dovrà apparire all'interno del percorso nell'url

 per creare un link dinamico può essere scritto o in questa maniera con i backtick:

 <Link to={`/dettaglio/${ricetta._id}`} >
                <button className="btn btn-primary">Visualizza</button>
              </Link>

oppure tarmite concatenazione:

<Link to={'/dettaglio/' + ricetta_id} >
                <button className="btn btn-primary">Visualizza</button>
              </Link>




QUANDO SI FANNO LINK DINAMICI NON SI CLICCA MAI SUL PRIMO ELEMENTO PERCHè è QUELLO CHE DI SICURO FUNZIONA, SI VERIFICA SEMPRE DAL SECONDO IN POI, INOLTRE PASSANDO SOPRA L'ELEMENTO DEL LINK DOVREBBE VISUALIZZARSI IN BASSO A SINISTRA IL PERCORSO DEL LINK
*/