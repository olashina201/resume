import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./container/Index";
import Contact from "./container/Contact";
import AboutMe from "./container/AboutMe";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/products" component={AboutMe} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
