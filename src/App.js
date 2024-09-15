import { Routes, Route } from "react-router-dom";
import "./sass/App.scss";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/a-propos" element={<div>A propos</div>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
