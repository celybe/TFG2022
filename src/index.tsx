import App from "./App";
import ReactDOM from "react-dom";
import { registerLicense } from "@syncfusion/ej2-base";
import ContextWrapper from "context/ContextWrapper";
registerLicense(
  "ORg4AjUWIQA/Gnt2VVhhQlFac1pJWnxIdkx0RWFbb19xflVOalhYVBYiSV9jS3xTcERrW3xccnFdR2VaUw=="
);
ReactDOM.render(
  <ContextWrapper>
    <App />
  </ContextWrapper>,
  document.getElementById("root")
);
