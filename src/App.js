import "./App.css";
import MainNavigation from "./components/layout/MainNavigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./pages/Auth";

function App() {
  return (
    <div>
      <MainNavigation />
      <Auth />
    </div>
  );
}

export default App;
