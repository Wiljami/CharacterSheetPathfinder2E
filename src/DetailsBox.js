import React from "react";
import {Card} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

class DetailsBox extends React.Component {
    render() {
        const element =
            <div className="smallgap">
                <Card elevation={5}>
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
                </Card>
            </div>
        return element
    }
}

export default DetailsBox
