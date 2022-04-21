import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import ProductsComponent from "./components/ProductsComponent";
import DemoIndexComponent from "./DemoApp/DemoIndexComponent";
import IshopIndexComponent from "./ishop/IshopIndexComponent";

ReactDOM.render(
  <React.StrictMode>
    <IshopIndexComponent />
  </React.StrictMode>,
  document.getElementById("root")
);

//React 18 feature

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<DemoIndexComponent />);
