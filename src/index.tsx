import App from "./App";
import ReactDOM from "react-dom";
import ContextWrapper from "context/ContextWrapper";

ReactDOM.render(
  <ContextWrapper>
    <App />
  </ContextWrapper>,
  document.getElementById("root")
);
