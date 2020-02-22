import React from "react";
import {Card} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

class NameBox extends React.Component {
    render() {
        const element =
            <div className="smallgap">
                <Card elevation={5}>
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
                </Card>
            </div>
        return element
    }
}

export default NameBox
