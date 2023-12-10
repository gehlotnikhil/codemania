import './App.css';
import {useState} from "react"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Playground from './component/Playground'
import Login from './component/Login';
import Register from "./component/Register"
import Profile from "./component/Profile"
import Footer from "./component/Footer"
import NoteContext from "./context/notes/NoteContext"
import SingleQuestion from './component/SingleQuestion';
function App() {
  const host = "http://localhost:5000"
  
  const initialQuestion = []

  const [question, setQuestion] = useState(initialQuestion)
  
   //Get Note
   const getQuestion = async() => {
    //API CALL
    const response = await fetch(`${host}/api/question/getallquestion`, {
     method: "GET",
     headers: {
       "Content-Type": "application/json",
       "auth-header": localStorage.getItem("token")
     },
   });
   
   const json = await response.json();
   console.log(typeof json,"json-",json)
   setQuestion(json)
 }
 
  

  return (
    <>
      <NoteContext.Provider value={{question,getQuestion}}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/playground" element={<Playground />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/singlequestion" element={<SingleQuestion />} />
          </Routes>
          <Footer />
        </Router>
      </NoteContext.Provider>
    </>
  );
}

export default App;
