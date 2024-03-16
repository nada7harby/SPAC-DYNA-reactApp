import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navv from "./Navv";
import Grid from "./Grid";

function Routtte() {
  <Router>
    <Route index path="/GRid" Component={Grid} />
    <Route path="/Navv" Component={Navv} />
  </Router>;
}
export default Routtte;
