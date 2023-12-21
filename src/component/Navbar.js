import React, { useEffect, useState,useContext } from 'react'
import { Link, useLocation } from "react-router-dom";
// import icon from '../images/codemania_icon.png'
// import profilePicture from '../images/profilePicture.png'
import { useNavigate } from 'react-router-dom'
import NoteContext from '../context/notes/NoteContext';

function Navbar() {
  const navigate = useNavigate()
  const [loginDisplay, setLoginDisplay] = useState("")
  const [registerDisplay, setRegisterDisplay] = useState("")
  const [profileDisplay, setProfileDisplay] = useState("")
  const [navItemsDisplay, setNavItemsDisplay] = useState("")
  const [searchDisplay, setSearchDisplay] = useState("")
 const context = useContext(NoteContext)
 let {goToCurrent} = context;
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

    if(location.pathname === '/profile'){
      setSearchDisplay("")
    }
    else{
      setSearchDisplay("d-none")
    }
    //setting title
    if (location.pathname === "/") {
      document.title = `Codemania | Home`
    }
    else {
      document.title = `Codemania | ${location.pathname.charAt(1).toUpperCase()}${location.pathname.substring(2)}`
    }
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
                <Link style={{marginRight:"0"}}  className={`nav-link text-dark ${navItemsDisplay}`} to="/playground">Playground</Link>
              </li>

            </ul>
          </div>
          <div>
            <a className={`${goToCurrent}`} style={{margin:"0",}}>Go to Current Profile{"->"}</a>
          </div>
          <div className={`d-flex ${searchDisplay}`}style={{ flexDirection: "row", marginRight: "20px" }}>
            <div class="topnav">
              <div class="search-container">
                <form >
                  <input type="text" placeholder="Search Profile" name="search" />
                  <button type="submit"><i class="fa fa-search"></i></button>
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