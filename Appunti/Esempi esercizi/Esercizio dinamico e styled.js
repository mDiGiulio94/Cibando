/*
import "./App.scss";
import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import CarouselSlider from "./components/CarouselSlider";






function App() {

  const [evidenziazione, setEvidenziazione] = useState(false);

  // in questo oggetto ci saranno coppie di css, ma non stando in css, bisogna scrivere in JSX ovvero senza inserire trattino, tutto attaccato e con camelcase, anche se la zona in cui viene scritto è javascript
  const bgDinamico = {
    backgroundColor: evidenziazione ? "yellow" : "white",
    fontSize: '50px',
    cursor: 'pointer',
    textAlign: 'left'

}

  // evento al click come crearlo in react:

  const onEvidenziazione = () => {

    setEvidenziazione(!evidenziazione)

  }

//best practice: la convenzione di nomi che si usa per delle funzioni che gestiscono cose è andleNomefunzione, perché cosi si capisce che si sta gestendo un evento



  return (
    //SI CHIAMA REACT FRAGMENT <></>

    <Contenitore>

    <Header />
      <CarouselSlider />

      <div className="container-titolo">

      {/* aggiunta stile e presa da bgDinamico, con stile in linea */

        /* le tonde si usano in questo caso solo se devi richiamare dei parametri me si scrive in un altro modo e si vedrà più avanti nel corso */

        /* <h2 style={bgDinamico} onClick={onEvidenziazione}>Benvenuti in Cibando</h2>

       <p className="paragrafo">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc,
          blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio
          et ante tincidunt tempus. Donec vitae sapien ut libero venenatis
          faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus
          tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales
          sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit
          cursus nunc,
        </p>

      </div>
    </Contenitore>
  );
}

//qui si può scrivere il css o scss seguendo questa sintassi e dopo aver installato la giusta libreria *vedi appunti generali riga 49
const Contenitore = styled.div`

background-color: white;

h2{
  margin-left: 10px;
}

p{
  width: 95%;
  margin: auto;
  text-align: justify;
}



`;

// l'if di react condiziona degli elementi di html

export default App;
*/