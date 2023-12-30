import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
// import icon from '../images/codemania_icon.png'
// import profilePicture from '../images/profilePicture.png'
import { useNavigate } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext';
import { toast } from 'react-toastify';

function Navbar() {
  const navigate = useNavigate()
  const [loginDisplay, setLoginDisplay] = useState("")
  const [registerDisplay, setRegisterDisplay] = useState("")
  const [profileDisplay, setProfileDisplay] = useState("")
  const [navItemsDisplay, setNavItemsDisplay] = useState("")
  const [searchDisplay, setSearchDisplay] = useState("")
  const context = useContext(NoteContext)
  let { original, setOriginal ,searchItem,setSearchItem, searchChangeProfile} = context
  let { goToCurrent ,setGoToCurrent} = context;
  let location = useLocation()

  const handleClickSignOut = () => {


    localStorage.clear();
  }
  useEffect(() => {
    console.log("location---", location.pathname)
    if (location.pathname === '/login') {
      setLoginDisplay("d-none")
      setRegisterDisplay("")
      setProfileDisplay("d-none")
      setNavItemsDisplay("d-none")
    }
    else if (location.pathname === '/register') {
      setLoginDisplay("")
      setRegisterDisplay("d-none")
      setProfileDisplay("d-none")
      setNavItemsDisplay("d-none")
    }

    else {
      setLoginDisplay("d-none")
      setRegisterDisplay("d-none")
      setProfileDisplay("")
      setNavItemsDisplay("")
    }

    if (location.pathname === '/profile') {
      setSearchDisplay("")
    }
    else {
      setSearchDisplay("d-none")
    }
    //setting title
    if (location.pathname === "/") {
      document.title = `Codemania | Home`
    }
    else {
      document.title = `Codemania | ${location.pathname.charAt(1).toUpperCase()}${location.pathname.substring(2)}`
    }
    if(!(location.pathname === "/profile"))
    {
      localStorage.setItem("name",localStorage.getItem("originalname"))
      localStorage.setItem("username",localStorage.getItem("originalusername"))
      localStorage.setItem("email",localStorage.getItem("originalemail"))
      localStorage.setItem("mobile",localStorage.getItem("originalmobile"))
      localStorage.setItem("address",localStorage.getItem("originaladdress"))
      localStorage.setItem("institude",localStorage.getItem("originalinstitude"))
      setGoToCurrent("d-none")
    }
    console.log(original)
  }, [location])
  const [uname, setUname] = useState("")
  useEffect(() => {
    try {
      const t = localStorage.getItem("username")[0].toUpperCase();
      console.log("t-------", t)
      setUname(t)
    }
    catch (err) {
      setUname("")
    }
  }, [location])
  const ChangeMade = (e)=>{
    setSearchItem(e.target.value)
    console.log(searchItem)
  }
  const searchProfile = async(e)=>{
    let json =  await searchChangeProfile(searchItem)
    console.log("searchChangeProfile---",json)
    if(json.success === false){
      e.preventDefault()
      alert("Username not Found")
    }
    else{
      setGoToCurrent("")
    localStorage.setItem("name",json.result.name)
    localStorage.setItem("username",json.result.username)
    localStorage.setItem("email",json.result.email)
    localStorage.setItem("mobile",json.result.mobile)
    localStorage.setItem("address",json.result.address)
    localStorage.setItem("institude",json.result.institude)
    }
  }

  if(location.pathname==="/profile"){
    localStorage.getItem("email")===localStorage.getItem("originalemail")?setGoToCurrent("d-none"):setGoToCurrent("");
  }

  const [fusername, setFuserName] = useState("")
 const  handleGoClick=()=>{
  localStorage.setItem("name",localStorage.getItem("originalname"))
  localStorage.setItem("username",localStorage.getItem("originalusername"))
  localStorage.setItem("email",localStorage.getItem("originalemail"))
  localStorage.setItem("mobile",localStorage.getItem("originalmobile"))
  localStorage.setItem("address",localStorage.getItem("originaladdress"))
  localStorage.setItem("institude",localStorage.getItem("originalinstitude"))
  setGoToCurrent("d-none")
  }
  return (
    <div className='main-nav'>
      <nav className="navbar navbar-expand-lg bg-nav ">
        <div className="container-fluid">
          <img src="../images/codemania_icon.png" height="56px" />
          <Link className="navbar-brand text-danger platform_name"  >Codemania</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarNav">
            <ul className="navbar-nav nav-items d-flex">
              <li className="nav-item">
                <Link className={`nav-link active text-dark ${navItemsDisplay}`} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-dark ${navItemsDisplay}`} to="/about">About </Link>
              </li>
              <li className="nav-item">
                <Link style={{ marginRight: "0" }} className={`nav-link text-dark ${navItemsDisplay}`} to="/playground">Playground</Link>
              </li>

            </ul>
          </div>
          <div>
            <a onClick={handleGoClick} className={`${goToCurrent}`} style={{cursor:"pointer", margin: "0",marginRight:"10px" }}>{"<-"}Go to Your Profile</a>
          </div>
          <div className={`d-flex ${searchDisplay}`} style={{ flexDirection: "row", marginRight: "20px" }}>
            <div className="topnav">
              <div className="search-container">
                <form >
                  <input onChange={ChangeMade} value ={searchItem} type="text" placeholder="Search Profile" name="search" />
                  <button onClick={searchProfile} type="submit"><i className="fa fa-search"></i></button>
                </form>
              </div>
            </div>
          </div>


          <div className={`d-flex `}>
            <Link className={`btn mx-2 btn-outline-success text-dark border-dark ${loginDisplay}`} to="/login" role="button">Login</Link>
            <Link className={`btn mx-2 btn-outline-success text-dark border-dark ${registerDisplay}`} to="/register" role="button">Register</Link>
            <div className={`btn-group dropstart ${profileDisplay} `}>
              <button type="button" className="btn btn-secondary profile-icon" data-bs-toggle="dropdown" aria-expanded="false">
                {uname}
              </button>
              <ul className="dropdown-menu">
                <li><img style={{ height: "43px", marginLeft: "5px" }} src="../images/profilePicture.png" alt="" srcSet="" /> <span style={{ marginLeft: "5px" }}>{localStorage.getItem("username")}</span></li>
                <hr style={{ margin: "0" }} className='my-2' />
                <li style={{ display: "flex", alignItems: "center" }}><Link className="dropdown-item" to="/profile">Profile</Link></li>
                <li><Link className="dropdown-item" onClick={handleClickSignOut} to="/login" >Sign out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar