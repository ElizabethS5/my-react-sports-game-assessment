import React from "react";
import "./App.css";
import Game from "./components/game/Game";

function App(props) {
  return (
    <div className="App">
      <Game
        venue="Somewhere"
        homeName="Rogues"
        homeLogo="/logos/Rogue.png"
        visitorName="Falcons"
        visitorLogo="/logos/falcon.png"
      />
    </div>
  );
}

export default App;
