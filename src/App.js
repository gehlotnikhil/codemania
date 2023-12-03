import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from './component/Navbar'
import About from './component/About'
import Home from './component/Home'
import Playground from './component/Playground'
import Admin from './component/Admin'
import Login from './component/Login';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route  exact path="/" element={<Home />} /> 
         <Route  exact path="/about" element={<About />} /> 
         <Route  exact path="/playground" element={<Playground />} /> 
         <Route  exact path="/admin" element={<Admin />} /> 
         <Route  exact path="/login" element={<Login />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
