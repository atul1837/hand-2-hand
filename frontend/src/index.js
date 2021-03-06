import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./i18n";
import App from "./App";
import Footer from "./components/Footer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    [
    <Suspense fallback={<div>Loading...</div>}>
      <App key="1" />, 
      <Footer key="2" />  
    </Suspense>
    ]
,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
