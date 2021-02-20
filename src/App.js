import { Switch, Route } from "react-router-dom";
import "./App.sass";
import NewGradient from "./component/new/NewGradient";
import Home from "./component/home/Home";
import EditGradient from "./component/edit/EditGradient";
function App() {
  return (
    <div className="App">
      <div className="content">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new" component={NewGradient} />
          <Route path="/edit/:id?" component={EditGradient} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
