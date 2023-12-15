import './App.css';
import {useState,useEffect} from "react"
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
import {useDispatch} from "react-redux"
import { bindActionCreators} from "redux"
import {actionCreator} from './state/index'
import {useSelector} from "react-redux"
function App() {
  const host = "http://localhost:5000"
  const dispatch = useDispatch()
  const balance = useSelector(state=>state.amount)
  const isPositive = useSelector(state=>state.check)
  const {depositMoney,withdrawMoney,checkResult} = bindActionCreators(actionCreator,dispatch)
  const [singleQuestionNo,setSingleQuestionNo] = useState("")
  window.onbeforeunload = () => {
    localStorage.clear();
  }
  const initialQuestion = []

  const [question, setQuestion] = useState(initialQuestion)
  const [distributedQuestion, setDistributedQuestion] = useState(initialQuestion)
  useEffect(() => {
    console.log(question)
    console.log(balance)
  }, [question])
   
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
      <NoteContext.Provider value={{singleQuestionNo,setSingleQuestionNo,question,getQuestion,setDistributedQuestion,distributedQuestion}}>
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
