import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Spiels from "./Spiels";
import Forms from "./Forms";
import Introduction from "./Introduction";
import DataPrivacy from "./DataPrivacy";
import FormerEmployee from "./FormerEmployee";
import PersonalInformation from "./PersonalInformation";

function App() {

  return (


    <Router>
      <div className="App flex-c">
        <Header />
        <div className="content flex-h">
          <Spiels />

          <Switch>

            <Route path="/introduction">
              <Introduction />
            </Route>
            <Route path="/dataPrivacy">
              <DataPrivacy />
            </Route>
            <Route path="/personalInformation">
              <PersonalInformation />
            </Route>
            <Route path="/formerEmployee">
              <FormerEmployee />
            </Route>
            

          </Switch>

          <Forms />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
