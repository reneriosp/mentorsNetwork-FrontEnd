import "./App.css";
import MainNavigation from "./components/layout/MainNavigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./pages/Auth";
import { Route, Switch } from "react-router";
import Name from "./pages/UserInfo/Name";
import Info from "./pages/UserInfo/Info";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/login/name">
          <Name />
        </Route>
        <Route path="/login/info">
          <Info />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
