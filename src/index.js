import React from "react";
import { render } from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import Root from "./components/Root";
import "normalize.css";

render(<Root />, document.getElementById("root"));

registerServiceWorker();
