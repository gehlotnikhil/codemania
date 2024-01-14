import React, { useState } from 'react'


function Playground() {
  const [loading, setLoading] = useState("d-none")
  const [outputOfCode, setOutputOfCode] = useState("")
  const host = "https://codemania-backend-production.up.railway.app"

  const [code, setCode] = useState({
    code: "",
    testcase: "",
  })
  const [result,setResult] = useState({
    ans:"",

  })
  const onCodeSubmit = async (e) => {
    setLoading("d-inline-block")
    console.log(code)
    console.log("1")
    const response = await fetch(`${host}/api/check/playground/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({code:code.code,testcase:code.testcase})
    });
    const json = await response.json();
    console.log("--", json)
    setResult({ans:json.outputOfTest.result})
    setLoading("d-none")
  }
  const onChanges = (e) => {
    setCode({ ...code, [e.target.name]: e.target.value })
    console.log(code)
  }


  return (
    <div className='container'>
      {/* Intro */}
      <div className="container my-3">
        <h1 className="heading">
          Online Java Compiler
        </h1>
        <p className="paragraph">
          Online Java compiler is a great tool to get started with Java programming instantly
          . They allow you to run Java codes on the fly in your favourite browser without
          the need to Install java compilers and Set up a java development environment in
          your system.
        </p>
      </div>
      {/* IDE */}
      <div>
        <form>
        <div id="editor-container">
          <div className=' bg-dark py-1 px-1 d-flex '>
            <button type="button" className='btn btn-success mx-2'>Java</button>
            <button type="button"  onClick={onCodeSubmit} className='btn btn-warning ms-auto mx-2'>
            <span style={{ marginRight: " 7px" }} className={`spinner-border spinner-border-sm ${loading}`} role="status" aria-hidden="true"></span>
              <span>Run Code</span>
              </button>

          </div>
          <textarea id="editor" onChange={onChanges} name='code' placeholder="Write your Java code here..." rows="7"></textarea>

          <div className=' bg-dark py-1 px-1 d-flex '>
            <button type="button" className='btn btn-success mx-2'>Output</button>
          </div>
          <div style={{backgroundColor:"white",minHeight:"20vh"}}>
            {result.ans}
          </div>
        </div>

        <div id="editor-container">
          <div className=' bg-dark py-1 px-1 d-flex '>
            <button type="button" className='btn btn-success mx-2'>Custom Input</button>
          </div>
          <textarea id="editor" onChange={onChanges} name='testcase' placeholder={`like,
1 2 3 4 5`} rows="2"></textarea>
        </div>
        </form>
      </div>
      {/* About Java */}
      <div className="container">
        <h1 className="heading">About Java</h1>
        <p className="paragraph">
          Java is an object-oriented programming language, this allows the application
          of OOPS concepts. It is a platform independent language that means it can be
          run on multiple platforms. It is based on the concept of <b>“Write once, run
            anywhere”</b>, as the intermediate code generated by Java Virtual Machine is machine
          independent. The intermediate code then needs to be compiled into the machine
          code by a Java compiler.
        </p>
      </div>
      {/* Features */}
      <div className="container">
        <h1 className="heading">
          Features of Online Java Compiler
        </h1>
        <ul>
          <li>It can be accessed through any web browser</li>
          <li>Easy to use interface and supports various libraries.</li>
          <li>The syntax highlighting feature colours the elements of the code to increase
            readability.</li>
          <li>Compiler's Autocompletion feature accelerates coding by predicting already
            defined variables/functions and completing code.</li>
        </ul>
      </div>
      <div className="container">
        <h1 className="heading">
          Syntax Help
        </h1>
        <p className="paragraph">
          Here we will be discussing the syntax of the Java programming language. After
          going through this section, you can write if-else statements,switch-case
          statements, for loops, while loops, and do while loops. We will be covering the
          basics of Java syntax here.
        </p>
      </div>

    </div>
  )
}

export default Playground