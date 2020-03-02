import React from "react";
import AbilityScoreBox from "./AbilityScoreBox";
import Grid from "@material-ui/core/Grid";
import SavingThrowBox from "./SavingThrowBox";
import SkillBox from "./SkillBox";
import ArmorClassBox from "./ArmorClassBox";
import ImportCharacter from "./ImportCharacter"
import ExportCharacter from "./ExportCharacter";
import {CharacterDetailBox} from './CharacterDetailBox'

class Sheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level : 1,
      details : {
        Name: ''
      },
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
      },
      savingThrows : {
        Fortitude : -2,
        Reflex : 0,
        Will : 2,
        Notes : ''
      },
      armorClass : {
        teml: 6
      },
      skills : {
        Acrobatics : -2,
        Arcana : 6,
        Athletics : 4
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
    console.log(this.state)
  }

  importCharacter = (content) => {
    this.setState(content)
  }

  render() {
    return <>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <h1>Pathfinder 2E character sheet</h1>
        </Grid>
        <Grid item xs={3}>
          <ImportCharacter
            callback={this.importCharacter}
          />
        </Grid>
        <Grid item xs={3}>
          <ExportCharacter
            character={this.state}
          />
        </Grid>
        <Grid item xs={12}>
          <CharacterDetailBox
            details={this.state.details}
            callback={this.characterChange}
          />
        </Grid>
        <Grid item xs={6}>
          <AbilityScoreBox
            abilityScores={this.state.abilityScores}
            abilityScoreModifiers={this.state.abilityScoreModifiers}
            callback={this.characterChange}
          />
        </Grid>
        <Grid item xs={6}>
          <SavingThrowBox
            abilityScoreModifiers={this.state.abilityScoreModifiers}
            savingThrows={this.state.savingThrows}
            level={this.state.level}
            callback={this.characterChange}
          />
        </Grid>
        <Grid item xs={6}>
          <SkillBox
            abilityScoreModifiers={this.state.abilityScoreModifiers}
            skills={this.state.skills}
            level={this.state.level}
            callback={this.characterChange}
          />
        </Grid>
        <Grid item xs={6}>
          <ArmorClassBox
            abilityScoreModifiers={this.state.abilityScoreModifiers}
            armorClass={this.state.armorClass}
            level={this.state.level}
            callback={this.characterChange}
          />
        </Grid>
      </Grid>
    </>
  }
}

export default Sheet;
