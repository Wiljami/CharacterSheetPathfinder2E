import React from "react";
import Grid from "@material-ui/core/Grid";
import TEML from "./TEML";
import {Card} from "@material-ui/core";

class ArmorClassBox extends React.Component {
    render () {
        const element = <div className="smallgap">
            <Card elevation={5}>
                <h1 align="center">Armor Class</h1>
                <Grid container spacing = {3}>
                    <Grid item xs={2}>
                        <div align="center">DC BASE</div>
                        <div className="large-font" align="center">10</div>
                    </Grid>
                    <Grid item xs={2}>
                        <div align="center">DEX</div>
                    </Grid>
                    <Grid item xs={2}>
                        <div align="center">CAP</div>
                    </Grid>
                    <Grid item xs={2}>
                        <div align="center">PROF</div>
                    </Grid>
                    <Grid item xs={2}>
                        <TEML/>
                    </Grid>
                    <Grid item xs={2}>
                        <div align="center">ITEM</div>
                    </Grid>

                    <Grid item xs={3}>
                        <div align="center">Unarmored</div>
                        <TEML/>
                    </Grid>
                    <Grid item xs={3}>
                        <div align="center">Light</div>
                        <TEML/>
                    </Grid>
                    <Grid item xs={3}>
                        <div align="center">Medium</div>
                        <TEML/>
                    </Grid>
                    <Grid item xs={3}>
                        <div align="center">Heavy</div>
                        <TEML/>
                    </Grid>

                    <Grid item xs={12}>
                        <Shield/>
                    </Grid>

                </Grid>
            </Card>
        </div>
        return element
    }
}

class Shield extends React.Component {
    render() {
        const element= <div>
            <Grid container spacing = {3}>
                <Grid item xs={2}>
                    <div>Shield</div>
                </Grid>
                <Grid item xs={2}>
                    <div className="large-font">2</div>
                </Grid>
                <Grid item xs={2}>
                    <div align="center">HARDNESS</div>
                    <div align="center">10</div>
                </Grid>
                <Grid item xs={2}>
                    <div align="center">MAX HP</div>
                    <div align="center">10</div>
                </Grid>
                <Grid item xs={1}>
                    <div align="center">BT</div>
                    <div align="center">10</div>
                </Grid>
                <Grid item xs={3}>
                    <div align="center">CURRENT HP</div>
                    <div align="center">10</div>
                </Grid>
            </Grid>
        </div>

        return element
    }
}

export default ArmorClassBox