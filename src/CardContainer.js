import Card from "./Card";
import { useEffect, useState } from "react";
import { withFocusable } from "@noriginmedia/react-spatial-navigation";
import styled from "styled-components";

const CardContainerStyled = styled.section`
  height: 230px;
  background-color: red;
  margin-top: 100px;
`;

const CardContainer = ({ setFocus }) => {
  const [position, setPosition] = useState();
  /*
   * Esta funcion recibe un objeto con las coordenadas y tamaño del
   * elemnto enfocado por medio del evento onBecameFocused
   */
  const onBecameFocusedHandler = (e) => {
    console.log(e);
    setPosition(e);
  };
  /**
   *
   * Esta funcion recibe un evento el cual es la flecha precionada
   */
  const onArrowPressHandler = (e) => {
    console.log(e);
  };

  /**
   * mock de cards focusebales
   */
  const cards = () => {
    let array = [];
    for (let i = 0; i < 10; i++) {
      array.push(
        <Card
          onArrowPress={onArrowPressHandler}
          number={i}
          onBecameFocused={onBecameFocusedHandler}
        />
      );
    }
    return array;
  };
  /**
   * Envia el foco a este componente
   */
  useEffect(() => {
    setFocus();
  }, []);

  return (
    <CardContainerStyled>
      {/* este div permite que translademos el contenido en el eje y */}
      <div
        style={{ transform: `translateY(${-position?.y}px)`, display: "grid" }}
      >
        {cards()}
      </div>
    </CardContainerStyled>
  );
};

export default withFocusable()(CardContainer);
