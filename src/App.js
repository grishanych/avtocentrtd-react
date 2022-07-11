
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Chain from './components/Chain';
import Content from "./components/Content";
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Content />
      <Routes>
         <Route path="/chain" element={<Chain />} />
      </Routes>
    </Router>
    
  );
}

export default App;
