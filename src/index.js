import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App />,
  document.getElementById("root")
);

//not working for some reason
// ReactDOM.render(<App />, document.getElementById("root"));

