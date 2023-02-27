import "./App.css";
import Content from "./Content";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Spiel from "./Spiel";


function App() {

  return (


    <Router>
      <div className="App flex-column">

        <div className="content flex-horizontal">
          <Switch>

            <Route path="/code/">

              <Content />

            </Route>

          </Switch>

        </div>

      </div>
    </Router>
  );
}

export default App;
