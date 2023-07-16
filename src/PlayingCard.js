import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from './hooks/useFlip';

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };

  const [faceUp, flipFace] = useFlip(true);
  return (
    <img
      src={faceUp ? front : back}
      alt="playing card"
      onClick={flipFace}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
