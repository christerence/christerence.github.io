import React from "react";
import "./App.scss";
import { Header, Footer } from "./components";
import { Route, Router } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import createHistory from "history/createBrowserHistory";
const history = createHistory();
function App() {
  return (
    <div className="App App-container">
      <Router history={history}>
        <div className="App-header">
          <Header />
        </div>
        <div className="App-body">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/projects" exact component={Projects} />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
