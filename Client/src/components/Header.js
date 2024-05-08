import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MarkAsUnreadIcon from "@mui/icons-material/MarkAsUnread";
import PersonIcon from "@mui/icons-material/Person";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Logo from "../assets/images/icona-cibando.png";
import {Link} from "react-router-dom";


const Header = () => {
    return (
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
                <li className="nav-item">
                  <Link to="/aggiungi" className="nav-link">
                    <AddCircleIcon>Filled</AddCircleIcon> Aggiungi Ricetta
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/registrazione" className="nav-link">
                    <PersonIcon>Filled</PersonIcon> Registrazione
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contatti" className="nav-link">
                    <MarkAsUnreadIcon>Filled</MarkAsUnreadIcon> Contatti
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
}

export default Header