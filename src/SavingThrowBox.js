import React from "react";
import Grid from "@material-ui/core/Grid";
import TEML from "./TEML";
import TextField from "@material-ui/core/TextField";
import {Card} from "@material-ui/core";

class SavingThrowBox extends React.Component {
    render () {
        const element = <div className="smallgap">
            <Card elevation={5}>
                <h1 align="center">Saving Throws</h1>
                <Grid container spacing = {3}>
                    <Grid item xs={4}>
                        <SavingThrow ability="CON" name="Fortitude"/>
                    </Grid>
                    <Grid item xs={4}>
                        <SavingThrow ability="DEX" name="Reflex"/>
                    </Grid>
                    <Grid item xs={4}>
                        <SavingThrow ability="WIS" name="Will"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Notes" fullWidth margin="normal"/>
                    </Grid>
                </Grid>
            </Card>
        </div>
        return element
    }
}

class SavingThrow extends React.Component {
    constructor(props) {
        super(props)
        this.ability = props.ability
        this.name = props.name
    }

    render() {
        const element = <div>
            <Grid container spacing = {3}>
                <Grid item xs={12}>
                    <div align="center">{this.name}</div>
                </Grid>
                <Grid item xs={12}>
                    <div align="center">10</div>
                </Grid>
                <Grid item xs={6}>
                    <div align="center">{this.ability}</div>
                    <div align="center">10</div>
                </Grid>
                <Grid item xs={6}>
                    <div align="center">PROF</div>
                    <div align="center">10</div>
                </Grid>
                <Grid item xs={6}>
                    <div align="center">ITEM</div>
                    <div align="center">10</div>
                </Grid>
                <Grid item xs={6}>
                    <TEML/>
                </Grid>
            </Grid>
        </div>
        return element
    }
}

export default SavingThrowBox
