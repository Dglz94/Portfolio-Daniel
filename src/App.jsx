import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/Footer";
//Compontents
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./containers/profileContainer/ProfileContainer";
import RepositoriesContainer from "./containers/repositoriesContainer/RepositoriesContainer";
import ContactContainer from "./containers/contactContainer/ContactContainer";
import ExperienceContainer from "./containers/experienceContainer/ExperienceContainer";

function App() {
  const [language, setLanguage] = useState("Eng");

  return (
    <div className="App" id="App">
      <Router>
        <nav className="nav flat">
          <Navbar />
        </nav>
        <main className="flat">
          <div className="main-panel pressed">
            <Switch>
              <Route exact path="/">
                <ProfileContainer language={language} />
              </Route>
              <Route path="/repositories">
                <RepositoriesContainer />
              </Route>
              <Route path="/experience">
                <ExperienceContainer />
              </Route>
              <Route path="/contact">
                <ContactContainer />
              </Route>
            </Switch>
          </div>
          <Footer language={language} setLanguage={setLanguage} />
        </main>
      </Router>
    </div>
  );
}

export default App;
