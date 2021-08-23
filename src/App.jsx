import "./App.css";
import Footer from "./components/footer/Footer";
//Compontents
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App" id="App">
      <nav className="nav flat">
        <Navbar />
      </nav>
      <main className="flat">
        <div className="main-panel pressed">
          <h1 className="cuadro cuadro1">cuadro1</h1>
          <h1 className="cuadro cuadro2">cuadro2</h1>
          <h1 className="cuadro cuadro3">cuadro3</h1>
          <h1 className="cuadro cuadro4">cuadro4</h1>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
