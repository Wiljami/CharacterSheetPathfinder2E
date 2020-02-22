import React from "react";
import {Card} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

class AbilityScoreBox extends React.Component {
    render() {
        const element =
            <div className="smallgap">
                <Card elevation={5}>
                    <AbilityScore ability="Strength" score={10}/>
                    <AbilityScore ability="Dexterity" score={10}/>
                    <AbilityScore ability="Constitution" score={10}/>
                    <AbilityScore ability="Intelligence" score={10}/>
                    <AbilityScore ability="Wisdom" score={10}/>
                    <AbilityScore ability="Charisma" score={10}/>
                </Card>
            </div>
        return element
    }
}

class AbilityScore extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({score : props.score})
        this.ability = props.ability
        this.shortAtt = this.ability.slice(0, 3).toUpperCase()
    }

    onChange = (event) => {
        let score = event.target.value
        if (score < 0) score = 0

        this.setState({score: score})
    }

    render() {
        let modifier = Math.floor((this.state.score - 10) / 2)
        if (modifier > 0) {
            modifier = '+' + modifier
        }
        const element =
            <div className="smallgap">
                <Grid container spacing = {3}>
                    <Grid item xs={2}>
                        {modifier}
                    </Grid>
                    <Grid item xs={2}>
                        {this.shortAtt}
                    </Grid>
                    <Grid item xs={6}>
                        {this.ability}
                    </Grid>
                    <Grid item xs={2}>
                        <TextField type="number" onChange={this.onChange} value={this.state.score}/>
                    </Grid>
                </Grid>
            </div>
        return element
    }
}

export default AbilityScoreBox;
