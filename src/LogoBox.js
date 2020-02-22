import React from "react";
import {Card} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

class LogoBox extends React.Component {
    render() {
        const element =
            <div className="smallgap">
                <Card elevation={5}>
                    <Grid container spacing = {3}>
                        <Grid item xs={12}>
                            <h1>Logo</h1>
                        </Grid>
                    </Grid>
                </Card>
            </div>
        return element
    }
}

export default LogoBox
