import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

class App extends React.Component {
    render() {

        const element =
        <div>
            <Grid container spacing = {3}>
                <Grid item xs={2}>
                    <h1>Logo</h1>
                </Grid>
                <Grid item xs={4}>
                    <NameBox/>
                </Grid>
                <Grid item xs={4}>
                    <DetailsBox/>
                </Grid>
                <Grid item xs={2}>
                    <h1>Level</h1>
                </Grid>
                <Grid item xs={4}>
                    <AbilityScoreBox/>
                </Grid>
                <Grid item xs={4}>
                    <h1>Armor CLass</h1>
                    <h1>Saving Throws</h1>
                </Grid>
                <Grid item xs={4}>
                    <h1>Hit Points</h1>
                    <h1>Perception</h1>
                </Grid>
                <Grid item xs={6}>
                    <h1>Speed</h1>
                    <h1>Melee Strikes</h1>
                    <h1>Ranged Strikes</h1>
                    <h1>Weapon Proficiencies</h1>
                </Grid>
                <Grid item xs={6}>
                    <h1>Skills</h1>
                </Grid>
            </Grid>
        </div>
        return element
    }
}

class NameBox extends  React.Component {
    render() {
        const element =
            <div>
                <Grid container spacing = {3}>
                    <Grid item xs={12}>
                        <TextField label="Character Name" fullWidth margin="normal"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Player name" fullWidth margin="normal"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Experience" fullWidth margin="normal"/>
                    </Grid>
                </Grid>
            </div>
        return element
    }
}

class DetailsBox extends React.Component {
    render() {
        const element =
            <div>
                <Grid container spacing = {3}>
                    <Grid item xs={12}>
                        <TextField label="Ancestry and Heritage" fullWidth margin="normal"/>
                    </Grid>
                    <Grid item xs={12}>
                       <TextField label="Background" fullWidth margin="normal"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Class" fullWidth margin="normal"/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Size" fullWidth margin="normal"/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Alignment" fullWidth margin="normal"/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField label="Traits" fullWidth margin="normal"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Deity" fullWidth margin="normal"/>
                    </Grid>
                </Grid>
            </div>
        return element
    }
}

class AbilityScoreBox extends React.Component {
    render() {
        const element =
            <div>
                <AbilityScore ability="Strength" score={10}/>
                <AbilityScore ability="Dexterity" score={10}/>
                <AbilityScore ability="Constitution" score={10}/>
                <AbilityScore ability="Intelligence" score={10}/>
                <AbilityScore ability="Wisdom" score={10}/>
                <AbilityScore ability="Charisma" score={10}/>
            </div>
        return element
    }
}

class AbilityScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({score : props.score})
        this.ability = props.ability
        this.shortAtt = this.ability.slice(0, 3).toUpperCase()
    }

    onChange = (event) => {
        this.setState({score: event.target.value})
    }

    render() {
        let modifier = Math.floor((this.state.score - 10) / 2)
        if (modifier > 0) {
            modifier = '+' + modifier
        }
        const element =
            <div>
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
                        <TextField type="number" defaultValue={this.state.score} onChange={this.onChange}/>
                    </Grid>
                </Grid>
            </div>
        return element
    }
}

export default App;
