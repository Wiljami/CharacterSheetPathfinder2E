import React from "react";
import {Card} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class AttackBox extends React.Component {
    render() {
        return <div className="smallgap">
            <Card elevation={5}>
                <Grid container spacing = {3}>
                    <Grid item xs={12}>
                        <h1>Speed</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h1>Melee Strikes</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h1>Ranged Strikes</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h1>Weapon Proficiencies</h1>
                    </Grid>
                </Grid>
            </Card>
        </div>
    }
}

export default AttackBox
