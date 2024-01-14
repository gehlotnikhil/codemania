import React, { useState,useContext } from 'react'
// import image from "../images/coding.png";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import NoteContext from '../context/notes/NoteContext';
function Register() {
  const context = useContext(NoteContext)
  let {original,setOriginal} = context
  const navigate = useNavigate();
  const host = "https://codemania-backend-production.up.railway.app"
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    institude: "",
    username: "",
    age: ""
  })
  const onChanges = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
    console.log(credential)
  }

  const handleClick = async (element) => {
    element.preventDefault()
    console.log("1")
    console.log(credential)
    const response = await fetch(`${host}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
        institude: credential.institude,
        username: credential.username,
        age: credential.age,
      })
    });

    const json = await response.json();
    console.log("json--", json, "---")
    if (json.success) {
      //save the token and redirect
      localStorage.setItem("token", json.authToken)
      localStorage.setItem("username",json.username)
      localStorage.setItem("name",json.body.name)
      localStorage.setItem("institude",json.body.institude)
      localStorage.setItem("email",json.body.email)
      localStorage.setItem("mobile",json.body.mobile)
      localStorage.setItem("address",json.body.address)
      localStorage.setItem("id",json.body.id)

     
      localStorage.setItem("originalusername",json.username)
      localStorage.setItem("originalname",json.body.name)
      localStorage.setItem("originalinstitude",json.body.institude)
      localStorage.setItem("originalemail",json.body.email)
      localStorage.setItem("originalmobile",json.body.mobile)
      localStorage.setItem("originaladdress",json.body.address)
      localStorage.setItem("originalinstitude",json.body.institude)

      navigate("/")
      toast.success("Register Successfully")
    }
    else
      toast.error("Failed to Register")
  }



  const [chechTerms, setCheckTerms] = useState("disabled")
  const termsClick = (e) => {
    if (e.target.checked) {
      setCheckTerms("")
    }
    else {
      setCheckTerms("disabled")
    }

  }
 
  return (
    <div style={{ background: `url("../images/coding.png") center center/cover no-repeat`, height: "100vh" }}>
      <div className="container">
        <h1 style={{ fontFamily: "Pacifico, cursive", textAlign: "center", color: "red", fontSize: "6rem" }}>Codemania</h1>
      </div>
      <div className="container text-light " >
        <h1 className="text-center " >Register</h1>
      </div>
      <form className="row g-3 container mx-5 text-light " >
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">Name:</label>
          <input type="text" onChange={onChanges} name="name" className="form-control" id="validationCustom01" required />

        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom02" className="form-label">Email:</label>
          <input type="text" onChange={onChanges} name="email" className="form-control" id="validationCustom02" required />
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustomUsername" className="form-label">Password</label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" onChange={onChanges} name="password" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />

          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">Institude</label>
          <input type="text" onChange={onChanges} name="institude" className="form-control" id="validationCustom03" required />

        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom04" className="form-label">Username:</label>
          <input type="text" onChange={onChanges} className="form-control" name="username" id="username" required />
        </div>
        <div className="col-md-3">
          <label htmlFor="validationCustom05" className="form-label">Age:</label>
          <input type="text" name="age" onChange={onChanges} className="form-control" id="validationCustom05" required />

        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" onClick={termsClick} type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>

          </div>
        </div>
        <div className="col-12">
          <button className={`btn btn-primary ${chechTerms}`} onClick={handleClick} type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Register