import "./App.css";

import Home from "./component/Home";
import About from "./component/About";
import Offer from "./component/Offer";
import Services from "./component/Services";
import Contact from "./component/Contact";

import{
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" Component={Home} />
          <Route index path="About" Component={About} />
          <Route index path="Offer" Component={Offer} />
          <Route index path="Services" Component={Services} />
          <Route index path="Contact" Component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
