import NoteContext from '../context/notes/NoteContext'
import React, { useEffect, useState, useContext } from 'react'

function SingleQuestion() {
  const [iserror, setIsError] = useState("")
  const [outputOfCode, setOutputOfCode] = useState("")
  const context = useContext(NoteContext)
  const objQuestion = context.question;
  const questionNo = localStorage.getItem("singleQuestionNo") - 1
  const host = "http://localhost:5000"

  useEffect(() => {
    console.log(objQuestion)
    const m = localStorage.getItem("singleQuestionNo")
  }, [])
  const [code, setCode] = useState({
    code: "",
    isPassed: "",
    result: "",
    testcase1: objQuestion[questionNo].testcase1,
    testcase2: objQuestion[questionNo].testcase2,
    testcase3: objQuestion[questionNo].testcase3,
    outputOfTestcase1: objQuestion[questionNo].outputOfTestcase1,
    outputOfTestcase2: objQuestion[questionNo].outputOfTestcase2,
    outputOfTestcase3: objQuestion[questionNo].outputOfTestcase3
  })


  const onCodeSubmit = async (e) => {
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
    alert("ans", json)
    if (json.test1 === true && json.test2 === true && json.test3 === true) {
      setCode({ ...code, isPassed: true })

      setIsError(false)
      setResult({ ...result, json: json, mark: "correct", test1: json.test1, test2: json.test2, test3: json.test3 })
    }
    else {
      setCode({ ...code, isPassed: false })
      if (json.outputOfTest1.result === "Compile Error...")
        setIsError(true)
      else
        setIsError(false)

      setResult({ ...result, json: json, mark: "wrong", test1: json.test1, test2: json.test2, test3: json.test3 })
    }
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


  return (
    <>
      <div className='mx-2 my-1'>
        <div className="d-flex">
          <div style={{ width: "50%", padding: "20px" }}>
            <div style={{}}>
              <h5>{objQuestion[questionNo].no}. {objQuestion[questionNo].name}</h5>
            </div>
            <div style={{}} className=' my-3'>
              <pre><span className={`${objQuestion[questionNo].difficulty === "Easy" ? "text-success" : (objQuestion[questionNo].difficulty === "Medium" ? "text-warning" : "text-danger")}`}>{objQuestion[questionNo].difficulty}</span>   &#128077; {objQuestion[questionNo].like}  &#128078; {objQuestion[questionNo].dislike} </pre>
            </div>
            <div className="">
              <pre>Company Tags: {objQuestion[questionNo].companies}</pre>
            </div>
            <div className="">
              <p>{objQuestion[questionNo].description}</p>
            </div>
            <div>
              <div className='my-2' >
                <h6>Example 1</h6>
                <div className='px-1 py-2' style={{ border: "1px solid black", backgroundColor: "#d7d7d7", borderRadius: "4px" }}>
                  <h6>Input: {objQuestion[questionNo].sampleInput1}</h6>
                  <h6>Output: {objQuestion[questionNo].sampleOutput1}</h6>
                </div>
              </div>
              <div className='my-2' >
                <h6>Example 2</h6>
                <div className='px-1 py-2' style={{ border: "1px solid black", backgroundColor: "#d7d7d7", borderRadius: "4px" }}>
                  <h6>Input: {objQuestion[questionNo].sampleInput2}</h6>
                  <h6>Output: {objQuestion[questionNo].sampleOutput2}</h6>
                </div>
              </div>
              <div className='my-2' >
                <h6>Example 3</h6>
                <div className='px-1 py-2' style={{ border: "1px solid black", backgroundColor: "#d7d7d7", borderRadius: "4px" }}>
                  <h6>Input: {objQuestion[questionNo].sampleInput3}</h6>
                  <h6>Output: {objQuestion[questionNo].sampleOutput3}</h6>
                </div>
              </div>
            </div>
            <div className="my-4">

              <h6>Expected Time Complexity: {objQuestion[questionNo].timeComplexity}</h6>
              <h6>Expected Space Complexity: {objQuestion[questionNo].spaceComplexity}</h6>

            </div>
            <div className='my-4'>
              <h6>Constraint</h6>
              <ul>
                <li>{objQuestion[questionNo].constraint1}</li>
                <li>{objQuestion[questionNo].constraint2}</li>
              </ul>
            </div>
            <div className="my-4">
              <pre>Accepted: {objQuestion[questionNo].accepted} | Submission: {objQuestion[questionNo].submission} | Acceptance Rate: {parseFloat((objQuestion[questionNo].accepted / objQuestion[questionNo].submission) * 100).toFixed(2)}%</pre>
            </div>
          </div>
          <div style={{ width: "50%" }}>
            <form>
              <div id="editor-container">
                <div className=' bg-dark py-1 px-1 d-flex '>
                  <button type="button" className='btn btn-primary mx-2'>Java</button>
                  <button type="button" onClick={onCodeSubmit} className='btn btn-success ms-auto mx-2 text-white'>Submit</button>

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
                      <p className={`${t1}`} style={{ margin: "0", padding: "0" }}>{code.testcase1}</p>
                      &#10148; <h6 onClick={testcaseClick2} className=' my-2 d-inline-block' style={{ marginLeft: "7px" }}>Testcase 2: </h6>
                      <span className={` ${result.test2 === true ? "d-inline" : "d-none"}`} style={{ color: "black" }}>
                        &#10004;
                      </span>
                      <span className={` ${result.test2 === false ? "d-inline" : "d-none"}`} style={{ color: "black" }}>
                        &#x2718;
                      </span>
                      <p className={`${t2}`} style={{ margin: "0", padding: "0" }}>{code.testcase2}</p>
                    </div>
                    <div>
                      &#10148; <h6 onClick={testcaseClick3} className=' my-2 d-inline-block' style={{ marginLeft: "7px" }}>Testcase 3: </h6>
                      <span className={` ${result.test3 === true ? "d-inline" : "d-none"}`} style={{ color: "black" }}>
                        &#10004;
                      </span>
                      <span className={` ${result.test3 === false ? "d-inline" : "d-none"}`} style={{ color: "black" }}>
                        &#x2718;
                      </span>
                      <p className={`${t3}`} style={{ margin: "0", padding: "0" }}>{code.testcase3}</p>
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