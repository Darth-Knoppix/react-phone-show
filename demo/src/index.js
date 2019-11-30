import React from "react";
import { render } from "react-dom";
import "./index.css";

import Workspace from "../../src";

function Demo() {
  return (
    <Workspace title={<h1>Title</h1>} info={<p>Look at this</p>}></Workspace>
  );
}

render(<Demo />, document.querySelector("#demo"));
