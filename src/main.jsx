import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
// import "bootstrap/dist/css/bootstrap.min.css";------------------ don't import here bcz it is get more priority than custom css

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
