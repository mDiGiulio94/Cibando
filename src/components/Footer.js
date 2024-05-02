import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../assets/images/icona-cibando.png";

const Footer = () => {
  return (
    <>
      <Contenitore className="test">
        <div className="footer">
          <Link to="/" className="navbar-brand" alt="cibando">
            <img src={Logo} className="icona-cibando" alt="logo" />
          </Link>


        </div>
      </Contenitore>
    </>
  );
};

const Contenitore = styled.div`
  .footer {
    height: 150px;
    background-color: #8e210b;

img{
  margin-left: 2%;
  margin-top: 2%;
}

  }
`;

export default Footer;
