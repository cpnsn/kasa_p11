import { Routes, Route } from "react-router-dom";
import "./sass/App.scss";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error.jsx"

function App() {
  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/a-propos" element={<About/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
