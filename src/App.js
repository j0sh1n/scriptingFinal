import React, { createContext, useContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Spiels from "./components/Spiels";
import Forms from "./components/Forms";
import Introduction from "./spiels/Introduction";
import DataPrivacy from "./spiels/DataPrivacy";
import FormerEmployee from "./spiels/FormerEmployee.js";
import PersonalInformation from "./spiels/PersonalInformation";
import Education from "./spiels/Education";
import Amenability from "./spiels/Amenability";
import CallCenterAgent from "./spiels/CallCenterAgent";
import Aspiration from "./spiels/Aspiration";
import Qualification from "./spiels/Qualification";
import { Dashboard } from "./page/Dashboard";
import LandingPage from "./spiels/LandingPage";
import Redirect from "./spiels/Redirect";
import Receipt from "./spiels/Receipt";

export const Context = createContext();



function App() {

  const [applicant, setApplicant] = useState();

  return (
    <Router>
      <style>@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Roboto:wght@300&display=swap');</style>
      <div className="App flex-c">
        <Header />
        <div className="middle flex-h">

          <Spiels />
          <Context.Provider value={{ applicant, setApplicant }}>

            <Switch>
              <Route path="/start/:id">
                <LandingPage />
              </Route>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/redirect">
                <Redirect />
                <Introduction />

              </Route>
              {/* <Route path="/introducton">
                <Introduction />
              </Route> */}
              <Route path="/dataPrivacy">
                <DataPrivacy />
              </Route>
              <Route path="/personalInformation">
                <PersonalInformation />
              </Route>
              <Route path="/formerEmployee">
                <FormerEmployee />
              </Route>
              <Route path="/education">
                <Education />
              </Route>
              <Route path="/callCenterAgent">
                <CallCenterAgent />
              </Route>
              <Route path="/amenability">
                <Amenability />
              </Route>
              <Route path="/aspiration">
                <Aspiration />
              </Route>
              <Route path="/qualification">
                <Qualification />
              </Route>
              <Route path="/receipt">
                <Receipt />
              </Route>
            </Switch>
            <Forms />
          </Context.Provider>
        </div>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
