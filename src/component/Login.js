import React from 'react'
import image from "../images/coding.png";

function Login() {
  return (
    <div style={{ background: `url(${image})`, height: "90vh" }}>
      <div className="container">
        <h1 style={{ textAlign: "center", color: "red", fontStyle: "italic", fontSize: "6rem" }}>Codemania</h1>
      </div>
      <div className="container text-white my-3">
      <form>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        
        <button type="submit"  className="btn btn-primary my-3">Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Login