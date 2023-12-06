import React from 'react'
import image from "../images/coding.png";

function Admin() {
  return (
    <div style={{ background: `url(${image}) center center/cover no-repeat`, height: "100vh" }}>
    <div className="container">
      <h1 style={{ textAlign: "center", color: "red",  fontSize: "6rem",fontFamily: "Pacifico, cursive" }}>Codemania</h1>
    </div>
    <div className="container text-light ">
    <h1 className="text-center " >Admin Login</h1>
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

export default Admin