import React from "react";

function Team(props) {
  return (
    <div className="Team">
      <h1>{props.name}</h1>
      <img src={props.logo} alt={props.name} height="200px" />
      <h3>Shot Taken: {props.stats.shotsTaken}</h3>
      <h3>Score: {props.stats.score}</h3>
      <button onClick={props.shoot}>SHOOT</button>
      {props.stats.percentage && <h3>Accurancy: {props.stats.percentage}%</h3>}
    </div>
  );
}

export default Team;
