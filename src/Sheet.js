import React from "react";
import AbilityScoreBox from "./AbilityScoreBox";
import Grid from "@material-ui/core/Grid";
import SavingThrowBox from "./SavingThrowBox";
import SkillBox from "./SkillBox";
import ArmorClassBox from "./ArmorClassBox";
import ImportCharacter from "./ImportCharacter"
import ExportCharacter from "./ExportCharacter";
import {CharacterDetailBox} from './CharacterDetailBox'
import LevelBox from './LevelBox'

class Sheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level : 1,
      details : {
        name: '',
        playerName: '',
        experience: '',
        ancestry: '',
        background: '',
        class: '',
        size: '',
        alignment: '',
        traits: '',
        deity: ''
      },
      abilityScores : {
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10
      },
      abilityScoreModifiers : {
        Strength: -0,
        Dexterity: -0,
        Constitution: 0,
        Intelligence: 0,
        Wisdom: 0,
        Charisma: 0
      },
      savingThrows : {
        Fortitude : -2,
        Reflex : -2,
        Will : -2,
        Notes : ''
      },
      armorClass : {
        teml: -2
      },
      skills : {
        Acrobatics : -2,
        Arcana : -2,
        Athletics : -2,
        Crafting : -2,
        Deception : -2,
        Diplomacy : -2,
        Intimidation : -2,
        Medicine : -2,
        Nature : -2,
        Occultism : -2,
        Performance : -2,
        Religion : -2,
        Society : -2,
        Stealth : -2,
        Thievery : -2
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
        <Grid item xs={11}>
          <CharacterDetailBox
            details={this.state.details}
            callback={this.characterChange}
          />
        </Grid>
        <Grid item xs={1}>
          <LevelBox
            level={this.state.level}
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
