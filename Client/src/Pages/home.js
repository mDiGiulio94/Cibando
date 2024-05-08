import React, { useState, useEffect } from "react";
import { useUserContext } from "../Context/userContext";

// import per la modale
import Button from "@mui/material/Button";

import styled from "styled-components";

import CarouselSlider from "../components/CarouselSlider";
import RecipeApi from "../API/recipeAPI";
import RecipeCard from "../components/RecipeCard";
import Modale from "../components/Modale";

const Home = () => {
  const [open, setOpen] = useState(false);
  const { user, registerUser } = useUserContext();
  const [evidenziazione, setEvidenziazione] = useState(false);
  const [ricette, setRicette] = useState([]);

  const bgDinamico = {
    backgroundColor: evidenziazione ? "yellow" : "white",
    fontSize: "50px",
    cursor: "pointer",
    textAlign: "left",
  };

  async function prendiRicette() {
    try {
      const response = await RecipeApi.getRecipes();
      if (response) {
        setRicette(response.sort((a, b) => b._id - a._id).slice(0, 4));
      }
    } catch (error) {
      console.log(error);
    }
  }
  const onEvidenziazione = () => {
    setEvidenziazione(!evidenziazione);
  };

  const apriModale = () => {
    setOpen(true);
  };

  const chiudiModale = () => {
    registerUser(null);
    setOpen(false);
  };

  useEffect(() => {
    console.log("sei entrato nel componente");
    prendiRicette();

    if (user) {
      apriModale();
    }

    return () => {
      console.log("sei uscito dal componente");
      setRicette([]);
    };
  }, []);
  return (
    <Contenitore>
      <CarouselSlider />
      <div className="container-titolo">
        <h2 style={bgDinamico} onClick={onEvidenziazione}>
          Benvenuti in Cibando
        </h2>
        <p className="paragrafo">
          Gregorio Samsa, svegliandosi una mattina da sogni agitati, si trovò
          trasformato, nel suo letto, in un enorme insetto immondo. Riposava
          sulla schiena, dura come una corazza, e sollevando un poco il capo
          vedeva il suo ventre arcuato, bruno e diviso in tanti segmenti
          ricurvi, in cima a cui la coperta da letto, vicina a scivolar giù
          tutta, si manteneva a fatica. Le gambe, numerose e sottili da far
          pietà, rispetto alla sua corporatura normale, tremolavano senza tregua
          in un confuso luccichio dinanzi ai suoi occhi. Cosa m’è avvenuto?
          pensò. Non era un sogno. La sua camera, una stanzetta di giuste
          proporzioni, soltanto un po’ piccola, se ne stava tranquilla fra le
          quattro ben note pareti. Sulla tavola, un campionario disfatto di
          tessuti - Samsa era commesso viaggiatore e sopra, appeso alla parete,
          un ritratto, ritagliato da lui - non era molto - da una rivista
          illustrata e messo dentro una bella cornice dorata: raffigurava una
          donna seduta, ma ben dritta sul busto, con un berretto e un boa di
          pelliccia; essa levava incontro a chi guardava un pesante manicotto,
          in cui scompariva tutto l’avambraccio. Lo sguardo di Gregorio si
          rivolse allora verso la finestra, e il cielo fosco
        </p>
      </div>
      <h2 style={{ marginLeft: "20px" }}>Ecco le nostre ultime ricette:</h2>
      <RecipeCard ricette={ricette} pag="home" />
      <Button variant="outlined" onClick={apriModale}>
        Apri Dialog
      </Button>
      <div>{user ? <p> Bentornato, {user.name}!</p> : <p>Benvenuto</p>}</div>

      <Modale page="home" user={user} open={open} chiudiModale={chiudiModale} />
    </Contenitore>
  );
};

const Contenitore = styled.div`
  background-color: white;

  h2 {
    margin-left: 10px;
  }

  p {
    width: 95%;
    margin: auto;
    text-align: justify;
  }
`;

export default Home;

/*obbiettivo:







*/
