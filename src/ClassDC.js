import React from "react";
import {Card} from "@material-ui/core";


class ClassDC extends React.Component {
    render() {
        const element =
            <div className="smallgap">
                <Card elevation={5}>
                    <h1 align="center">Class DC</h1>
                </Card>
            </div>
        return element
    }
}


export default ClassDC;
