import React from "react";
import {Card} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class LevelBox extends React.Component {
    render() {
        const element =
            <div className="smallgap">
                <Card elevation={5}>
                    <Grid container spacing = {3}>
                        <Grid item xs={12}>
                            <h1>Level</h1>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        return element
    }
}

export default LevelBox
