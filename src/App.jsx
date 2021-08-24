import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
//Compontents
import Navbar from "./components/navbar/Navbar";
import ProfileContainer from "./containers/profileContainer/ProfileContainer";

function App() {

  const [language, setLanguage] = useState('Eng');

  return (
    <div className="App" id="App">
      <nav className="nav flat">
        <Navbar />
      </nav>
      <main className="flat">
        <div className="main-panel pressed">
          <ProfileContainer language={language}/>
        </div>
        <Footer language={language} setLanguage={setLanguage}/>
      </main>
    </div>
  );
}

export default App;
