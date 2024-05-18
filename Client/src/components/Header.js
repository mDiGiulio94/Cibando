import React, { useContext, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import Logo from "../assets/images/icona-cibando.png";
import { Link } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from "@mui/icons-material/Logout";

import Modale from "./Modale";


const Header = () => {
  const { isAuth, logout, name } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  //chiudi modale
  const chiudiModale = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  const esci = () => {
    try {
      const response = logout();
      if (response.success === true) {
        setOpen(true)
         navigate("/");
      } else {
        console.log("errore nel logout");
      }
    } catch (error) {}
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-red navbar-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand" alt="cibando">
              <img src={Logo} className="icona-cibando" alt="logo" />
              Cibando
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <HomeIcon>Filled</HomeIcon> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/ricette" className="nav-link">
                    <MenuBookIcon>Filled</MenuBookIcon> Ricette
                  </Link>
                </li>
                {isAuth && (
                  <>
                    <li className="nav-item">
                      <Link to="/aggiungi" className="nav-link">
                        <AddCircleIcon>Filled</AddCircleIcon> Aggiungi Ricetta
                      </Link>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  {!isAuth && (
                    <Link to="/registrazione" className="nav-link">
                      <PersonIcon>Filled</PersonIcon> Registrazione
                    </Link>
                  )}
                </li>

                {!isAuth && (
                  <li className="nav-item">
                    <Link to="/contatti" className="nav-link">
                      <MarkAsUnreadIcon>Filled</MarkAsUnreadIcon> Contatti
                    </Link>
                  </li>
                )}

                <li className="nav-item">
                  {!isAuth && (
                    <Link to="/login" className="nav-link">
                      <LoginIcon>Filled</LoginIcon> Accedi
                    </Link>
                  )}
                </li>
                {isAuth && (
                  <>
                    <li className="nav-item">
                      <Link to="/profilo" className="nav-link">
                        Ciao <strong>{name}</strong> ecco il tuo Profilo
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link onClick={esci} className="nav-link">
                        <LogoutIcon>Filled</LogoutIcon> Esci
                      </Link>
                    </li>
                  </>
                )}
              </ul>
              <Modale
                page="logout"
                open={open}
                chiudiModale={chiudiModale}
              ></Modale>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header