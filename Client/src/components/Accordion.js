import React from "react";
import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";

function Termini({visualizza}) {

    return (
      <>
        <Contenitore>
{/* se visualizza è true mostra il primo elemento accordion, altrimenti chiudilo */}
            <Accordion activeKey={visualizza ? "0" : ""}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Termini e Condizioni</Accordion.Header>
                <Accordion.Body >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

        </Contenitore>
      </>
    );
}


const Contenitore = styled.div`

margin-bottom: 3%;
margin-top: -10%;



`;

export default Termini;
