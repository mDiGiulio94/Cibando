import "./App.scss";
import Header from "./components/Header";
import CarouselSlider from "./components/CarouselSlider";

function App() {

const allievi = [
  { nome: "Danilo", cognome: "De Filio", eta: 49 },
  { nome: "Simone", cognome: "Rossi", eta: 34 },
  { nome: "Paolo", cognome: "Bianchi", eta: 30 },
  { nome: "David", cognome: "Verdi", eta: 23 },
  { nome: "Simone", cognome: "Gialli", eta: 23 },
];


  return (
    <>
      <Header />
      <CarouselSlider />
      <div className="container-titolo">
        <h2>App di esempio</h2>
        <p className="paragrafo">Ecco il testo iniziale</p>

        {allievi.length > 0 && (
          <div>
            Attualmente ci sono {allievi.length} allievi
            {allievi.map((allievo, index) => (
              // assegnare una chiave univoca ad ogni elemento
              <ul key={index}>
                <li>Nome : {allievo.nome}</li>
                <li>Cognome: {allievo.cognome}</li>
                <li>Età: {allievo.eta}</li>
                <li>Indice: {index + 1}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

// l'if di react condiziona degli elementi di html

export default App;
