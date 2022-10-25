import * as React from "react";
import { TextField } from "@fluentui/react/lib/TextField";
import { Stack } from "@fluentui/react/lib/Stack";
export class CalculatorComponent extends React.Component {
    render(): JSX.Element {
        return (
            <>
                <Stack horizontal>
                    <TextField label="Amount" type="number" />
                    <TextField label="Tax %" type="number" />
                    <TextField label="Amount after tax" type="number" />
                </Stack>
            </>
        )
    }
}