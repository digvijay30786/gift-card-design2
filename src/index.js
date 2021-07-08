import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App
      date="28/10/2020"
      gift="Amazon-Gift"
      other="Pay"
      type="Desktop-Mobile"
      image="https://i0.wp.com/www.logotaglines.com/wp-content/uploads/2016/08/td-amazon-smile-logo-01-large.jpg?fit=960%2C780&ssl=1"
      color="yellow"
    />
    <App
      date="17 Sep 2020"
      gift="Apple-Gift"
      other="Payment"
      type="macOs-Mobile"
      image="data:image/png;base64,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"
      color="gray"
    />
  </StrictMode>,
  rootElement
);
