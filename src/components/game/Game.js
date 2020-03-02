import React, { Component } from "react";
import Team from "../team/Team";
import ScoreBoard from "../scoreBoard/ScoreBoard";
import "./Game.css";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeStats: {
        shotsTaken: 0,
        score: 0,
        percentage: null
      },
      visitorStats: {
        shotsTaken: 0,
        score: 0,
        percentage: null
      },
      resetCount: 0
    };
  }

  shoot = team => {
    document.getElementById("sound").pause();
    document.getElementById("sound").currentTime = 0;
    document.getElementById("sound").play();

    const teamStatsKey = `${team}Stats`;
    let newPercent;
    this.setState((state, props) => {
      let newShots = state[teamStatsKey].shotsTaken + 1;
      if (Math.random() < 0.5) {
        newPercent = ((state[teamStatsKey].score / newShots) * 100).toFixed(1);
        return {
          [teamStatsKey]: {
            shotsTaken: newShots,
            score: state[teamStatsKey].score,
            percentage: newPercent
          }
        };
      } else {
        let newScore = state[teamStatsKey].score + 1;
        newPercent = ((newScore / newShots) * 100).toFixed(1);
        return {
          [teamStatsKey]: {
            shotsTaken: newShots,
            score: newScore,
            percentage: newPercent
          }
        };
      }
    });
  };

  reset = () => {
    this.setState((state, props) => ({
      homeStats: {
        shotsTaken: 0,
        score: 0,
        percentage: null
      },
      visitorStats: {
        shotsTaken: 0,
        score: 0,
        percentage: null
      },
      resetCount: state.resetCount + 1
    }));
  };

  render() {
    return (
      <div className="Game">
        <ScoreBoard
          homeScore={this.state.homeStats.score}
          visitorScore={this.state.visitorStats.score}
        />
        <h1>Welcome to {this.props.venue}</h1>
        <button id="reset" onClick={this.reset}>
          RESET
        </button>
        <h4>RESET COUNTER: {this.state.resetCount}</h4>
        <div id="teamsContainer">
          <Team
            name={this.props.homeName}
            logo={this.props.homeLogo}
            stats={this.state.homeStats}
            shoot={() => {
              this.shoot("home");
            }}
          />
          <Team
            name={this.props.visitorName}
            logo={this.props.visitorLogo}
            stats={this.state.visitorStats}
            shoot={() => {
              this.shoot("visitor");
            }}
          />
        </div>
        <audio src="/audio/hockeypuck.mp3" id="sound"></audio>
      </div>
    );
  }
}

export default Game;
