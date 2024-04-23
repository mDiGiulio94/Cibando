import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <Contenitore className="test">
        <div className="footer"></div>
      </Contenitore>
    </>
  );
};

const Contenitore = styled.div`
  .footer {
    height: 150px;
    background-color: #8e210b;
    
  }
`;

export default Footer;
