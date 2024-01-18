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
import Error from "./component/Error"
import NoteContext from "./context/notes/NoteContext"
import SingleQuestion from './component/SingleQuestion';
import SingleStudyItem from "./component/SingleStudyItem"
import {useDispatch} from "react-redux"
import {useSelector} from "react-redux"
function App() {
  const host = "https://codemania-backend-production.up.railway.app"
  // const host = "http://localhost:5000"

  const dispatch = useDispatch()
  const balance = useSelector(state=>state.amount)
  const isPositive = useSelector(state=>state.check)
  const [singleQuestionNo,setSingleQuestionNo] = useState("")

  const initialQuestion = []

  const [question, setQuestion] = useState(initialQuestion)
  const [distributedQuestion, setDistributedQuestion] = useState(initialQuestion)
  const [itemPageSize, setItemPageSize] = useState(20)

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
 const [questionItemNo, setQuestionItemNo] = useState(1)
 
  const [goToCurrent,setGoToCurrent] = useState("d-none")
  const [original,setOriginal] = useState("")
  const [searchItem,setSearchItem] = useState("")
  const searchChangeProfile = async(name)=>{
    const response = await fetch(`${host}/api/auth/getdetails/${name}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-header": localStorage.getItem("token")
      }
    });
    const json = await response.json();
       
   
    return json
  }
  const madeChangesonClick = async(id,ob)=>{
    try{
    console.log("m-",ob)
    console.log("enterered")
    const response = await fetch(`${host}/api/question/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-header": localStorage.getItem("token")
      },
      body: JSON.stringify({like:ob.like,dislike:ob.dislike})
    });
    const json = await response.json();
    console.log("new------",json)
  }catch(err){
    console.log(err)
  }
  }

  const signIn = async(email)=>{
    try{
    console.log("google-enterered")
    const response = await fetch(`${host}/api/auth/glogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-header": localStorage.getItem("token")
      },
      body: JSON.stringify({email})
    });
    const json = await response.json();
    console.log("google------",json)
    return json
  }catch(err){
    console.log(err)
  }
  }
  


  return (
    <>
      <NoteContext.Provider value={{signIn,host,madeChangesonClick,searchChangeProfile,searchItem,setSearchItem,original,setOriginal,goToCurrent,setGoToCurrent,itemPageSize,setItemPageSize,questionItemNo,setQuestionItemNo,singleQuestionNo,setSingleQuestionNo,question,getQuestion,setDistributedQuestion,distributedQuestion}}>
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
            <Route exact path="/singlestudyitem" element={<SingleStudyItem />} />
            <Route path ="*" element={<Error/>}/>
          </Routes>
          <Footer />
        </Router>
      </NoteContext.Provider>
    </>
  );
}

export default App;
