import "./App.css";
import MainNavigation from "./components/layout/MainNavigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <MainNavigation />
        <Switch>
          <Route exact path="/" component="Home" />
          <Route path="/auth">
            <Auth />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
