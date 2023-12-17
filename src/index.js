import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./index.css";
import App from "./components/App";

Modal.setAppElement('#root');

ReactDOM.render(<App />, document.getElementById("root"));
