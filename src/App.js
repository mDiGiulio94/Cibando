import "./App.scss";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { UserProvider } from "./Context/userContext";

// Pagine
import Home from "./Pages/home";
import Recipes from "./Pages/Recipes";
import Header from "./components/Header";
import DetailRecipe from "./Pages/detailRecipe";
import RegistrationUser from "./Pages/RegistrationUser";
import Footer from "./components/Footer";
import Contatti from "./Pages/Contatti";



function App() {



//best practice: la convenzione di nomi che si usa per delle funzioni che gestiscono cose è handleNomefunzione, perché cosi si capisce che si sta gestendo un evento

  //per far si che tutti i componenti siano considerati come children del provider si avvolge tutto all'interno del provider,
  //si si ha bisogno di più context si può fare o un grande CONTEX o creare nella cartella dedicata i vari CONTEXT, assegnare a ognuno di loro il provideradatto e poi avvolgere il tutto a cascata (aggiungere ogni provider uno sotto l'altro)

  return (
    <>
      <UserProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ricette" element={<Recipes />} />
            <Route path="/dettaglio/:title/:id" element={<DetailRecipe />} />
            <Route path="/registrazione" element={<RegistrationUser />} />
            <Route path="/contatti" element={<Contatti /> } />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </>
  );
}



// l'if di react condiziona degli elementi di html

export default App;
