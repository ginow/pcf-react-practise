import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { StandardControlReact } from "pcf-react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CalculatorComponent } from "./components/calculator";
export class calculator extends StandardControlReact<IInputs, IOutputs> {
  constructor() {
    super();
    this.reactCreateElement = (container): void => {
      ReactDOM.render(React.createElement(CalculatorComponent, {}), container);
    };
  }
}
