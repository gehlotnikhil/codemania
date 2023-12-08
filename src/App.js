import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Playground from './component/Playground'
import Problem from './component/Problem'
import Login from './component/Login';
import Register from "./component/Register"
import Admin from "./component/Admin"
import Profile from "./component/Profile"
import Footer from "./component/Footer"
import NoteContext from "./context/notes/NoteContext"
function App() {
  let question = [
    {
      "_id": "656af425cc554c3e4591dc19",
      "name": "Add Two-Sum",
      "description": "This is Two Sum Question",
      "difficulty": "Hard",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)",
      "companies": "Amazon, Google, Microsoft",
      "testcase1": "1 2",
      "testcase2": "3 4",
      "testcase3": "5 6",
      "outputOfTestcase1": "3",
      "outputOfTestcase2": "7",
      "outputOfTestcase3": "11",
      "sampleInput1": "10 20",
      "sampleInput2": "20 30",
      "sampleInput3": "30 40",
      "sampleOutput1": "30",
      "sampleOutput2": "50",
      "sampleOutput3": "70",
      "accepted": "76",
      "submission": "120",
      "__v": 0
    },
    {
      "_id": "656af7bd6fedf766d9added1",
      "name": "Three sum",
      "description": "This is Two Sum Question",
      "difficulty": "Easy",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)",
      "companies": "Amazon, Google, Microsoft",
      "testcase1": "1 2",
      "testcase2": "3 4",
      "testcase3": "5 6",
      "outputOfTestcase1": "3",
      "outputOfTestcase2": "7",
      "outputOfTestcase3": "11",
      "sampleInput1": "10 20",
      "sampleInput2": "20 30",
      "sampleInput3": "30 40",
      "sampleOutput1": "30",
      "sampleOutput2": "50",
      "sampleOutput3": "70",
      "accepted": "76",
      "submission": "120",
      "__v": 0
    },
    {
      "_id": "656f0696efdda234ed2d46f2",
      "name": "Four sum",
      "description": "This is Two Sum Question",
      "difficulty": "Easy",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)",
      "companies": "Amazon, Google, Microsoft",
      "testcase1": "1 2",
      "testcase2": "3 4",
      "testcase3": "5 6",
      "outputOfTestcase1": "3",
      "outputOfTestcase2": "7",
      "outputOfTestcase3": "11",
      "sampleInput1": "10 20",
      "sampleInput2": "20 30",
      "sampleInput3": "30 40",
      "sampleOutput1": "30",
      "sampleOutput2": "50",
      "sampleOutput3": "70",
      "accepted": "76",
      "submission": "120",
      "__v": 0
    },
    {
      "_id": "656f06b1efdda234ed2d46f4",
      "name": "Five sum",
      "description": "This is Two Sum Question",
      "difficulty": "Easy",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)",
      "companies": "Amazon, Google, Microsoft",
      "testcase1": "1 2",
      "testcase2": "3 4",
      "testcase3": "5 6",
      "outputOfTestcase1": "3",
      "outputOfTestcase2": "7",
      "outputOfTestcase3": "11",
      "sampleInput1": "10 20",
      "sampleInput2": "20 30",
      "sampleInput3": "30 40",
      "sampleOutput1": "30",
      "sampleOutput2": "50",
      "sampleOutput3": "70",
      "accepted": "76",
      "submission": "120",
      "__v": 0
    }
  ]

  return (
    <>
      <NoteContext.Provider value={{question}}>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/playground" element={<Playground />} />
            <Route exact path="/problem" element={<Problem />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </Router>
      </NoteContext.Provider>
    </>
  );
}

export default App;
