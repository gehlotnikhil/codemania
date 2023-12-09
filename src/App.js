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
import SingleQuestion from './component/SingleQuestion';
function App() {
  let question = [
    {
      "_id": "657420b973861f75a8001da4",
      "no": 1,
      "name": "Five sum",
      "description": "This is Two Sum Question",
      "difficulty": "Hard",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)",
      "companies": "Amazon Google Microsoft",
      "testcase1": "1 2",
      "testcase2": "3 4",
      "testcase3": "5 6",
      "outputOfTestcase1": "3",
      "outputOfTestcase2": "7",
      "outputOfTestcase3": "11",
      "sampleInput1": "nums1 = [1,3], nums2 = [2]",
      "sampleInput2": "nums1 = [1,2], nums2 = [3,4]",
      "sampleInput3": "nums1 = [8,2], nums2 = [9,4]",
      "sampleOutput1": "2.00",
      "sampleOutput2": "2.50",
      "sampleOutput3": "2.87",
      "accepted": "76",
      "submission": "120",
      "like": 120,
      "dislike": 94,
      "constraint1": "1 <= n,m <= 105",
      "constraint2": "1 <= a1[i], a2[j] <= 106",
      "__v": 0
    },
    {
      "_id": "657420f573861f75a8001da8",
      "no": 2,
      "name": "Two sum",
      "description": "This is Two Sum Question",
      "difficulty": "Easy",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)",
      "companies": "Amazon Google Microsoft",
      "testcase1": "1 2",
      "testcase2": "3 4",
      "testcase3": "5 6",
      "outputOfTestcase1": "3",
      "outputOfTestcase2": "7",
      "outputOfTestcase3": "11",
      "sampleInput1": "nums1 = [1,3], nums2 = [2]",
      "sampleInput2": "nums1 = [1,2], nums2 = [3,4]",
      "sampleInput3": "nums1 = [8,2], nums2 = [9,4]",
      "sampleOutput1": "2.00",
      "sampleOutput2": "2.50",
      "sampleOutput3": "2.87",
      "accepted": "70",
      "submission": "180",
      "like": 120,
      "dislike": 84,
      "constraint1": "1 <= n,m <= 105",
      "constraint2": "1 <= a1[i], a2[j] <= 106",
      "__v": 0
    },
    {
      "_id": "6574212173861f75a8001dae",
      "no": 3,
      "name": "Nine sum",
      "description": "This is Two Sum Question",
      "difficulty": "Medium",
      "timeComplexity": "O(n)",
      "spaceComplexity": "O(1)",
      "companies": "Amazon Google Microsoft",
      "testcase1": "1 2",
      "testcase2": "3 4",
      "testcase3": "5 6",
      "outputOfTestcase1": "3",
      "outputOfTestcase2": "7",
      "outputOfTestcase3": "11",
      "sampleInput1": "nums1 = [1,3], nums2 = [2]",
      "sampleInput2": "nums1 = [1,2], nums2 = [3,4]",
      "sampleInput3": "nums1 = [8,2], nums2 = [9,4]",
      "sampleOutput1": "2.00",
      "sampleOutput2": "2.50",
      "sampleOutput3": "2.87",
      "accepted": "80",
      "submission": "980",
      "like": 10,
      "dislike": 4,
      "constraint1": "1 <= n,m <= 105",
      "constraint2": "1 <= a1[i], a2[j] <= 106",
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
            <Route exact path="/singlequestion" element={<SingleQuestion />} />
          </Routes>
          <Footer />
        </Router>
      </NoteContext.Provider>
    </>
  );
}

export default App;
