import "./App.scss";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


// Pagine
import Home from "./Pages/home";
import Recipes from "./Pages/Recipes";
import Header from "./components/Header";
import DetailRecipe from "./Pages/detailRecipe";



function App() {



//best practice: la convenzione di nomi che si usa per delle funzioni che gestiscono cose è handleNomefunzione, perché cosi si capisce che si sta gestendo un evento



  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/ricette" element={<Recipes />} />
        <Route path="/dettaglio/:title/:id" element={<DetailRecipe />} />
      </Routes>
    </Router>
  );
}



// l'if di react condiziona degli elementi di html

export default App;
