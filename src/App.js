import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Playground from './component/Playground'
import Question from './component/Question'
import Login from './component/Login';
import Register from "./component/Register"
import Admin from "./component/Admin"
import Profile from "./component/Profile"
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route  exact path="/" element={<Home />} /> 
         <Route  exact path="/about" element={<About />} /> 
         <Route  exact path="/playground" element={<Playground />} /> 
         <Route  exact path="/question" element={<Question />} /> 
         <Route  exact path="/login" element={<Login />} /> 
         <Route  exact path="/register" element={<Register />} /> 
         <Route  exact path="/admin" element={<Admin />} /> 
         <Route  exact path="/profile" element={<Profile />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
