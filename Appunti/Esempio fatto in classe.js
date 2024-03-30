//ESEMPIO DELLO USE STATE


// function App() {
//   // esempio pratico useState o Variabile di stato, il valore tra le virgolette è quello di default
//   const [pippo, setPippo] = useState("ciao");

//   // variabile di stato booleana impostate come false
//   const [interruttore, setInterruttore] = useState(false);

//   function cambiaValore() {
//     // questo si chiama setter, ovvero si invoca setPippo che nonostante sia una costante gli permette di cambiargli il valore senza rompere il codice

//     // primo esempio
//     pippo === "ciao" ? setPippo("buongiorno") : setPippo("ciao");
//     // secondo esempio
//     // setPippo(pippo === "ciao" ? "buongiorno" : "ciao")
//   }

//   return (
//     <>
//       <header>
//         <nav className="navbar navbar-expand-lg bg-red navbar-dark">
//           <div className="container-fluid">
//             <img src={Logo} className="icona-cibando" />
//             <a className="navbar-brand" href="#">
//               Cibando
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <a className="nav-link active" aria-current="page" href="#">
//                     <HomeIcon>Filled</HomeIcon> Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     <MenuBookIcon>Filled</MenuBookIcon> Ricette
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     <MarkAsUnreadIcon>Filled</MarkAsUnreadIcon> Contatti
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </header>
//       <div className="container-titolo">
//         <h2>App di esempio</h2>
//         <p className="paragrafo">Ecco il testo iniziale</p>

//         {/* come verificare se il valore di useState funziona, chiamata interpolazione dei dati (vedi negli appinti) */}
//         <h3>{pippo}</h3>
//         <button className="btn btn-primary" onClick={cambiaValore}>
//           Cambia Pippo
//         </button>
//         <div>
//           {/* si può far eseguire una funzione all'interno direttamente del bottone, in programmzione l'opposto di qualcosa si dice LA NEGAZIONE, la negazione si mette con il punto esclamativo */}
//           {interruttore ? (
//             <div>
//               <h2>Luce accesa</h2>
//             </div>
//           ) : (
//             <div>
//               <h2>Luce spenta</h2>
//             </div>
//           )}
//           <button
//             style={{ backgroundColor: interruttore ? "red" : "green" }}
//             className="btn btn-primary"
//             onClick={() => setInterruttore(!interruttore)}
//           >
//             {/* creare alterazione all'interno del bottone nel caso ce ne fosse necessità */}
//             {interruttore ? "spegni" : "accendi"}
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// // l'if di react condiziona degli elementi di html

// export default App;
