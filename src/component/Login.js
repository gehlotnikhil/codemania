import React, { useContext, useState } from 'react'
// import image from "../images/coding.png";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import NoteContext from '../context/notes/NoteContext';
import { useSelector, useDispatch } from 'react-redux';
import {Sid,Stoken,Sname,Susername,Sinstitude,Semail,Smobile,Saddress,SoriginalName,Soriginalusername,Soriginalinstitude,Soriginalemail,Soriginalmobile,Soriginaladdress} from "../actions/index"
import {GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Login() {
  const dispatch = useDispatch()

  const context = useContext(NoteContext)
  let { original, setOriginal,signIn } = context
  const navigate = useNavigate()
  const host =context.host
  const [credential, setCredential] = useState({ email: "", password: "" })
  const onChanges = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
    console.log(credential)
  }


  const handleClick = async (element) => {
    element.preventDefault()
    console.log("1")
    console.log(credential)
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: credential.email, password: credential.password })
    });

    const json = await response.json();
    console.log("json--", json, "---")
    if (json.success) {
      //save the token and redirect
      localStorage.setItem("id", json.body.id)
      localStorage.setItem("token", json.authToken)
      localStorage.setItem("name", json.body.name)
      localStorage.setItem("username", json.username)
      localStorage.setItem("institude", json.body.institude)
      localStorage.setItem("email", json.body.email)
      localStorage.setItem("mobile", json.body.mobile)
      localStorage.setItem("address", json.body.address)
      dispatch(Sid(json.body.id))
      dispatch(Stoken(json.authToken))
      dispatch(Sname(json.body.name))
      dispatch(Susername(json.username))
      dispatch(Sinstitude(json.body.institude))
      dispatch(Semail(json.body.email))
      dispatch(Smobile(json.body.mobile))
      dispatch(Saddress(json.body.address))

      localStorage.setItem("originalname", json.body.name)
      localStorage.setItem("originalusername", json.username)
      localStorage.setItem("originalinstitude", json.body.institude)
      localStorage.setItem("originalemail", json.body.email)
      localStorage.setItem("originalmobile", json.body.mobile)
      localStorage.setItem("originaladdress", json.body.address)

      dispatch(SoriginalName(json.body.name))
      dispatch(Soriginalusername(json.username))
      dispatch(Soriginalinstitude(json.body.institude))
      dispatch(Soriginalemail(json.body.email))
      dispatch(Soriginalmobile(json.body.mobile))
      dispatch(Soriginaladdress(json.body.address))


      navigate("/")
      toast.success("Login Successfully")
    }
    else
      toast.error("Failed to Login")
  }
  return (
    <div style={{ background: `url("../images/coding.png") center center/cover no-repeat`, height: "100vh" }}>
      <div className="container">
        <h1 style={{ textAlign: "center", color: "red", fontSize: "6rem", fontFamily: "Pacifico, cursive" }}>Codemania</h1>
      </div>
      <div className="container text-light ">
        <h1 className="text-center " >Login</h1>
      </div>
      <div className="container text-white my-3">
        <form>
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
            <input type="email" name="email" onChange={onChanges} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
            <input type="password" name="password" onChange={onChanges} className="form-control" id="exampleInputPassword1" required />
          </div>

          <button type="submit" onClick={handleClick} className="btn btn-primary my-3">Submit</button>
          <div>
            
    <GoogleOAuthProvider clientId="450052440413-k5igorcje5o44v8por7j5292joeume40.apps.googleusercontent.com">
    <GoogleLogin
  onSuccess={async(credentialResponse) => {
    var decode = jwtDecode(credentialResponse.credential);
    console.log(decode);
    var json = await signIn(decode.email)
    console.log("----->",json.success)
    if(json.success){
      
      localStorage.setItem("id", json.body.id)
      localStorage.setItem("token", json.authToken)
      localStorage.setItem("name", json.body.name)
      localStorage.setItem("username", json.username)
      localStorage.setItem("institude", json.body.institude)
      localStorage.setItem("email", json.body.email)
      localStorage.setItem("mobile", json.body.mobile)
      localStorage.setItem("address", json.body.address)
      dispatch(Sid(json.body.id))
      dispatch(Stoken(json.authToken))
      dispatch(Sname(json.body.name))
      dispatch(Susername(json.username))
      dispatch(Sinstitude(json.body.institude))
      dispatch(Semail(json.body.email))
      dispatch(Smobile(json.body.mobile))
      dispatch(Saddress(json.body.address))

      localStorage.setItem("originalname", json.body.name)
      localStorage.setItem("originalusername", json.username)
      localStorage.setItem("originalinstitude", json.body.institude)
      localStorage.setItem("originalemail", json.body.email)
      localStorage.setItem("originalmobile", json.body.mobile)
      localStorage.setItem("originaladdress", json.body.address)

      dispatch(SoriginalName(json.body.name))
      dispatch(Soriginalusername(json.username))
      dispatch(Soriginalinstitude(json.body.institude))
      dispatch(Soriginalemail(json.body.email))
      dispatch(Soriginalmobile(json.body.mobile))
      dispatch(Soriginaladdress(json.body.address))

      navigate("/")
      toast.success("Login Successfully")
    }
    else{
      toast.error("Failed to Login")
    }
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>   
      </GoogleOAuthProvider>
   
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login