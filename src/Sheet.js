import React from "react";
import AbilityScoreBox from "./AbilityScoreBox";

class Sheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      abilityScores : {
        Strength: 6,
        Dexterity: 8,
        Constitution: 10,
        Intelligence: 12,
        Wisdom: 14,
        Charisma: 16
      },
      abilityScoreModifiers : {
        Strength: -2,
        Dexterity: -1,
        Constitution: 0,
        Intelligence: 1,
        Wisdom: 2,
        Charisma: 3
      }
    }
  }

  calculateAbilityModifiers = () => {
    let abilityMods = {}
    let scores = Object.entries(this.state.abilityScores)
    for (const [ability, score] of scores) {
      const scoreMod = Math.floor((score-10) / 2)
      const abilityMod = {[ability] : scoreMod}
      abilityMods = Object.assign(abilityMod, abilityMods)
    }
    let abilityScoreModifiers = {abilityScoreModifiers: abilityMods}
    this.setState(abilityScoreModifiers)
  }

  characterChange = (change) => {
    this.calculateAbilityModifiers()
    this.setState(change)
  }

  render() {
    return <>
      <AbilityScoreBox
        abilityScores={this.state.abilityScores}
        abilityScoreModifiers={this.state.abilityScoreModifiers}
        callback={this.characterChange}
      />
    </>
  }
}

export default Sheet;