import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class TEML extends React.Component {
    render() {
        const element = <div className="teml">
            <FormGroup row>
                <FormControlLabel labelPlacement="top"
                    control={<Checkbox/>}
                    label="T"
                />
                <FormControlLabel labelPlacement="top"
                    control={<Checkbox/>}
                    label="E"
                />
                <FormControlLabel labelPlacement="top"
                    control={<Checkbox/>}
                    label="M"
                />
                <FormControlLabel labelPlacement="top"
                    control={<Checkbox/>}
                    label="L"
                />
            </FormGroup>
        </div>
        return element
    }
}

export default TEML
