import React from "react";
import {Card} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import NameBox from "./NameBox";
import DetailsBox from "./DetailsBox";
import AbilityScoreBox from "./AbilityScoreBox";
import ArmorSaves from "./ArmorSaves";
import HPPerception from "./HPPerception";
import AttackBox from "./AttackBox";
import SkillBox from "./SkillBox";
import LogoBox from "./LogoBox";
import LevelBox from "./LevelBox";

class Sheet extends React.Component {
    render() {
        return <div className="largegap">
            <Card elevation={5}>
                <Grid container spacing = {3}>
                    <Grid item xs={2}>
                        <LogoBox/>
                    </Grid>
                    <Grid item xs={4}>
                        <NameBox/>
                    </Grid>
                    <Grid item xs={4}>
                        <DetailsBox/>
                    </Grid>
                    <Grid item xs={2}>
                        <LevelBox/>
                    </Grid>
                    <Grid item xs={4}>
                        <AbilityScoreBox/>
                    </Grid>
                    <Grid item xs={4}>
                        <ArmorSaves/>
                    </Grid>
                    <Grid item xs={4}>
                        <HPPerception/>
                    </Grid>
                    <Grid item xs={6}>
                        <AttackBox/>
                    </Grid>
                    <Grid item xs={6}>
                        <SkillBox/>
                    </Grid>
                </Grid>
            </Card>
        </div>
    }
}

export default Sheet;