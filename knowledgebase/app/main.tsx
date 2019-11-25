import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";

if (!document.getElementById("main")) {
  const mainDiv = document.createElement("div");
  mainDiv.id = "main";
  document.body.appendChild(mainDiv);
}

ReactDOM.render(<App />, document.getElementById("main"));
