import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export class component2 extends Component {
  render() {
    return (
      <div>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          //   add config on delay and duration to slow down the fade in
          config={{ delay: 1000, duration: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <div style={c2Style}>Component 1</div>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}
const c2Style = {
  background: "slateblue",
  color: "white",
  padding: "1.5rem",
};
export default component2;
