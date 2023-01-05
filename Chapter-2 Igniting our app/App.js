import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Hello World Using React-H1"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Hello World Using React-H2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
