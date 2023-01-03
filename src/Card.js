import React from "react";
import styled from "styled-components";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";

const CardStyled = styled.div`
  width: 200px;
  height: 100px;
  background-color: aliceblue;
  margin: 0;
`;

function Card({ focused, number }) {
  return (
    <CardStyled style={{ border: `${focused ? "2px solid" : ""}` }}>
      <p>Hola {number}</p>
    </CardStyled>
  );
}

export default withFocusable()(Card);
