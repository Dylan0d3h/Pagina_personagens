import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Personagem from "./personagem";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personagem/:nome" element={<Personagem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;