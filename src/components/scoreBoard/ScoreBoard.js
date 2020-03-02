import React from "react";
import "./ScoreBoard.css";

function ScoreBoard(props) {
  return (
    <div className="ScoreBoard">
      <div>Home: {props.homeScore}</div>
      <div>Visitors: {props.visitorScore}</div>
    </div>
  );
}

export default ScoreBoard;
