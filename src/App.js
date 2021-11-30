import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorite from "./pages/Favorites";
import { CharacterContextProvider } from "./CharacterContext";

function App() {
  return (
    <CharacterContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/favorites" component={Favorite} />
          </Switch>
        </div>
      </Router>
    </CharacterContextProvider>
  );
}

export default App;
