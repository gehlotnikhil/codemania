import { click } from '@testing-library/user-event/dist/click';
import NoteContext from '../context/notes/NoteContext'
import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function SingleQuestion() {
  const navigate = useNavigate()
  const [iserror, setIsError] = useState("")
  const [outputOfCode, setOutputOfCode] = useState("")
  const context = useContext(NoteContext)
  const [tagClick, setTagClick] = useState(false)
  const questionNo = singleQuestionNo - 1
  const host = "http://localhost:5000"
  const [objQuestion, setObjQuestion] = useState([])
  const [code, setCode] = useState({
    code: "",
    isPassed: "",
    result: "",
    testcase1: "",
    testcase2: "",
    testcase3: "",
    outputOfTestcase1: "",
    outputOfTestcase2: "",
    outputOfTestcase3: "",
  
  })

  var { singleQuestionNo ,madeChangesonClick} = context;
  const [clickButton, setClickButton] = useState({
    like:null,
    dislike:null
  })
  useEffect(() => {
    const m = context.singleQuestionNo
    //if m is not found then it will go back to Home Page
    if(!m){
      navigate("/")
    }
    console.log("ak----"+ m)
    getSingleQuestion(m)
    console.log("like",objQuestion.like)
 

  }, [])
  
  

  const getSingleQuestion = async (no) => {
    console.log("get---", no)
    const response = await fetch(`${host}/api/question/getspecificquestion/${no}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-header": localStorage.getItem("token")
      },
    });
    const json = await response.json();
    setCode({
      ...code,
      testcase1: json.result.testcase1,
      testcase2: json.result.testcase2,
      testcase3: json.result.testcase3,
      outputOfTestcase1: json.result.outputOfTestcase1,
      outputOfTestcase2: json.result.outputOfTestcase2,
      outputOfTestcase3: json.result.outputOfTestcase3
    })
    console.log(typeof json, "json-", json)
    setObjQuestion(json.result)
  }

  const handleTagClick = () => {
    if (tagClick === false)
      setTagClick(true)
    else
      setTagClick(false)
  }

  const onCodeSubmit = async (e) => {
    setLoading("d-inline-block")
    console.log(code)

    console.log("1")
    const response = await fetch(`${host}/api/check/question/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code: code.code, testcase1: code.testcase1, testcase2: code.testcase2, testcase3: code.testcase3, outputOfTestcase1: code.outputOfTestcase1, outputOfTestcase2: code.outputOfTestcase2, outputOfTestcase3: code.outputOfTestcase3 })
    });
    const json = await response.json();
    console.log("--", json)
    if (json.test1 === true && json.test2 === true && json.test3 === true) {
      setCode({ ...code, isPassed: true })

      setIsError(false)
      toast.success("Submission Passed")
      setResult({ ...result, json: json, mark: "correct", test1: json.test1, test2: json.test2, test3: json.test3 })
    }
    else {
      toast.error("Submission Failed")
      setCode({ ...code, isPassed: false })
      if (json.outputOfTest1.result === "Compile Error...")
        setIsError(true)
      else
        setIsError(false)

      setResult({ ...result, json: json, mark: "wrong", test1: json.test1, test2: json.test2, test3: json.test3 })
    }
    setLoading("d-none")
    console.log(result)
    console.log(result)
    console.log(result)

  }


  const onChanges = (e) => {
    setCode({ ...code, [e.target.name]: e.target.value })
    console.log(code)
  }

  const [result, setResult] = useState({
    mark: "",
    test1: "", test2: "", test3: ""
  })

  const [t1, setT1] = useState("d-none")
  const [t2, setT2] = useState("d-none")
  const [t3, setT3] = useState("d-none")

  const testcaseClick1 = () => {
    if (t1 === "d-none")
      setT1("d-block")
    else
      setT1("d-none")
  }
  const testcaseClick2 = () => {
    if (t2 === "d-none")
      setT2("d-block")
    else
      setT2("d-none")
  }
  const testcaseClick3 = () => {
    if (t3 === "d-none")
      setT3("d-block")
    else
      setT3("d-none")
  }

  const [loading, setLoading] = useState("d-none")

  // Like and Dislike Button Logic
  const handleLikeClick = ()=>{
    console.log(clickButton,"Like")
    if(clickButton.like === null && clickButton.dislike === null){
      madeChangesonClick(objQuestion._id,{like: objQuestion.like+1,dislike: objQuestion.dislike});
      console.log({id:objQuestion._id,like: objQuestion.like+1,dislike: objQuestion.dislike})
      setObjQuestion({...objQuestion, like:objQuestion.like+1})

      setClickButton({like:true,dislike:false})

    }
    else if(clickButton.like === true ){
      console.log("nothing")
    }
    else if(clickButton.like === false && clickButton.dislike === true){
      madeChangesonClick(objQuestion._id,{like: objQuestion.like+1,dislike: objQuestion.dislike-1});
      console.log({id:objQuestion._id,like: objQuestion.like+1,dislike: objQuestion.dislike-1})
      setObjQuestion({...objQuestion, like:objQuestion.like+1,dislike:objQuestion.dislike-1 })
      setClickButton({like:true,dislike:false})

    }
  }
  const handleDislikeClick = ()=>{
    console.log(clickButton,"Dislike")
    if(clickButton.like === null && clickButton.dislike === null){
      madeChangesonClick({id:objQuestion._id,like: objQuestion.like,dislike: objQuestion.dislike+1});
      console.log({id:objQuestion._id,like: objQuestion.like,dislike: objQuestion.dislike+1})
      setObjQuestion({...objQuestion, dislike:objQuestion.dislike+1})
    }
    else if(clickButton.dislike === true ){
      console.log("nothing")
    }
    else if(clickButton.like === true && clickButton.dislike === false){
      madeChangesonClick(objQuestion._id,{like: objQuestion.like-1,dislike: objQuestion.dislike+1});
      console.log(objQuestion._id,{like: objQuestion.like-1,dislike: objQuestion.dislike+1})
      setObjQuestion({...objQuestion, dislike:objQuestion.dislike+1,like:objQuestion.like-1})
      setClickButton({like:false,dislike:true})

    }
  }



  return (
    <>

      <div className='mx-2 my-1'>
        <div className="d-flex">
          <div style={{ width: "50%", padding: "20px" }}>
            <div style={{}}>
              <h5>{objQuestion.no}. {objQuestion.name}</h5>
            </div>
            <div style={{}} className=' my-3'>
              <pre><span className={`${objQuestion.difficulty === "Easy" ? "text-success" : (objQuestion.difficulty === "Medium" ? "text-warning" : "text-danger")}`}>{objQuestion.difficulty}</span> <span onClick={handleLikeClick}>  &#128077; {objQuestion.like} </span><span onClick={handleDislikeClick}> &#128078; {objQuestion.dislike}</span> </pre>
            </div>
            <div className="">
              <pre onClick={handleTagClick}>&#10148; Company Tags: {tagClick === true ? objQuestion.companies : ""}</pre>
            </div>
            <div className="">
              <p>{objQuestion.description}</p>
            </div>
            <div>
              <div className='my-2' >
                <h6>Example 1</h6>
                <div className='px-1 py-2' style={{ border: "1px solid black", backgroundColor: "#d7d7d7", borderRadius: "4px" }}>
                  <h6>Input: {objQuestion.sampleInput1}</h6>
                  <h6>Output: {objQuestion.sampleOutput1}</h6>
                </div>
              </div>
              <div className='my-2' >
                <h6>Example 2</h6>
                <div className='px-1 py-2' style={{ border: "1px solid black", backgroundColor: "#d7d7d7", borderRadius: "4px" }}>
                  <h6>Input: {objQuestion.sampleInput2}</h6>
                  <h6>Output: {objQuestion.sampleOutput2}</h6>
                </div>
              </div>
              <div className='my-2' >
                <h6>Example 3</h6>
                <div className='px-1 py-2' style={{ border: "1px solid black", backgroundColor: "#d7d7d7", borderRadius: "4px" }}>
                  <h6>Input: {objQuestion.sampleInput3}</h6>
                  <h6>Output: {objQuestion.sampleOutput3}</h6>
                </div>
              </div>
            </div>
            <div className="my-4">

              <h6>Expected Time Complexity: {objQuestion.timeComplexity}</h6>
              <h6>Expected Space Complexity: {objQuestion.spaceComplexity}</h6>

            </div>
            <div className='my-4'>
              <h6>Constraint</h6>
              <ul>
                <li>{objQuestion.constraint1}</li>
                <li>{objQuestion.constraint2}</li>
              </ul>
            </div>
            <div className="my-4">
              <pre>Accepted: {objQuestion.accepted} | Submission: {objQuestion.submission} | Acceptance Rate: {parseFloat((objQuestion.accepted / objQuestion.submission) * 100).toFixed(2)}%</pre>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <form>
              <div id="editor-container">
                <div className=' bg-dark py-1 px-1 d-flex '>
                  <button type="button" className='btn btn-primary mx-2'>Java</button>
                  <button type="button" onClick={onCodeSubmit} className='btn btn-success ms-auto mx-2 text-white'>
                    <span style={{ marginRight: " 7px" }} className={`spinner-border spinner-border-sm ${loading}`} role="status" aria-hidden="true"></span>
                    <span>Submit</span>
                  </button>

                </div>
                <textarea onChange={onChanges} id="editor-question" name="code" placeholder={`Write your Java code here...
Use Name of the Class: Solution`} rows="7" defaultValue={`class Solution{
    public static void main(String[] args) {
        
    }
}`}></textarea>

                <div className=' bg-dark py-1 px-1 d-flex '>
                  <button type="button" className='btn btn-primary mx-2'>Result</button>
                </div>
                <div style={{ minHeight: "27vh", background: " white" }}  >
                  <span className={` ${result.mark === "correct" ? "d-inline" : "d-none"}`} style={{ background: "green", color: "white", padding: " 1px", border: "1px solid black", borderRadius: "0pc" }}>
                    &#10004;
                  </span>
                  <span className={` ${result.mark === "wrong" ? "d-inline" : "d-none"}`} style={{ background: "red", color: "white", padding: " 1px", border: "1px solid black", borderRadius: "0pc" }}>
                    &#x2718;

                  </span>
                  <h6 className=' my-2 d-inline-block' style={{ marginLeft: "7px" }}>
                    {code.isPassed === "" ? "" : code.isPassed === true ? "Accepted" : "Failed"} {iserror === "" ? "" : iserror === true ? " - Compilation Error" : ""}
                  </h6>
                  <div className={`${code.isPassed === "" ? "d-none" : "d-block"}`}>
                    <div>
                      &#10148; <h6 onClick={testcaseClick1} className=' my-2 d-inline-block' style={{ marginLeft: "7px" }}>Testcase 1: </h6>
                      <span className={` ${result.test1 === true ? "d-inline" : "d-none"}`} style={{ color: "black" }}>
                        &#10004;
                      </span>
                      <span className={` ${result.test1 === false ? "d-inline" : "d-none"}`} style={{ color: "black" }}>
                        &#x2718;
                      </span>
                    </div>
                    <div>
                      <p className={`${t1}`} style={{ margin: "0", padding: "0" }}>{code.testcase1 ? code.testcase1 : ""}</p>
                      &#10148; <h6 onClick={testcaseClick2} className=' my-2 d-inline-block' style={{ marginLeft: "7px" }}>Testcase 2: </h6>
                      <span className={` ${result.test2 === true ? "d-inline" : "d-none"}`} style={{ color: "black" }}>
                        &#10004;
                      </span>
                      <span className={` ${result.test2 === false ? "d-inline" : "d-none"}`} style={{ color: "black" }}>
                        &#x2718;
                      </span>
                      <p className={`${t2}`} style={{ margin: "0", padding: "0" }}>{code.testcase2 ? code.testcase2 : ""}</p>
                    </div>
                    <div>
                      &#10148; <h6 onClick={testcaseClick3} className=' my-2 d-inline-block' style={{ marginLeft: "7px" }}>Testcase 3: </h6>
                      <span className={` ${result.test3 === true ? "d-inline" : "d-none"}`} style={{ color: "black" }}>
                        &#10004;
                      </span>
                      <span className={` ${result.test3 === false ? "d-inline" : "d-none"}`} style={{ color: "black" }}>
                        &#x2718;
                      </span>
                      <p className={`${t3}`} style={{ margin: "0", padding: "0" }}>{code.testcase3 ? code.testcase3 : ""}</p>
                    </div>
                  </div>



                </div>
              </div>


            </form>
          </div>
        </div>
      </div >
    </>
  )
}

export default SingleQuestion