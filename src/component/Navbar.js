import React,{useEffect, useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import icon from '../images/codemania_icon.png'

function Navbar() {

  const [loginDisplay,setLoginDisplay] = useState("")
  const [registerDisplay,setRegisterDisplay] = useState("")
  const [adminDisplay,setAdminDisplay] = useState("")
  const [profileDisplay,setProfileDisplay] = useState("")
  const [navItemsDisplay,setNavItemsDisplay] = useState("")
  
  let location = useLocation()

  useEffect(() => {
    console.log(location.pathname)
    if(location.pathname === '/login'){
      setLoginDisplay("d-none")
      setRegisterDisplay("")
      setAdminDisplay("")
      setProfileDisplay("d-none")
      setNavItemsDisplay("d-none")
    }
    else if(location.pathname === '/register'){
      setLoginDisplay("")
      setRegisterDisplay("d-none")
      setAdminDisplay("")
      setProfileDisplay("d-none")
      setNavItemsDisplay("d-none")
    }
    else if(location.pathname === '/admin'){
      setLoginDisplay("")
      setRegisterDisplay("")
      setAdminDisplay("d-none")
      setProfileDisplay("d-none")
      setNavItemsDisplay("d-none")
    }
    else{
      setLoginDisplay("d-none")
      setRegisterDisplay("d-none")
      setAdminDisplay("d-none")
      setProfileDisplay("")
      setNavItemsDisplay("")
    }
    //setting title
    if(location.pathname === "/"){
      document.title = `Codemania | Home`
    }
    else{
      document.title = `Codemania | ${location.pathname.charAt(1).toUpperCase()}${location.pathname.substring(2)}`
    }
  }, [location])




  return (
    <div className='main-nav'>
      <nav className="navbar navbar-expand-lg bg-nav ">
        <div className="container-fluid">
          <img src={icon} height="56px" />
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
                <Link className={`nav-link text-dark ${navItemsDisplay}`} to="/playground">Playground</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  text-dark ${navItemsDisplay}`} aria-disabled="false" to="/question">Question</Link>
              </li>
            </ul>
          </div>
          <div className={`d-flex `}>
            <Link className={`btn mx-2 btn-outline-success text-dark border-dark ${loginDisplay}`} to="/login" role="button">Login</Link>
            <Link className={`btn mx-2 btn-outline-success text-dark border-dark ${registerDisplay}`} to="/register" role="button">Register</Link>
            <Link className={`btn mx-2 btn-outline-success text-dark border-dark ${adminDisplay}`} to="/admin" role="button">Admin</Link>
            <div className={`btn-group dropstart ${profileDisplay} `}>
              <button type="button" className="btn btn-secondary profile-icon" data-bs-toggle="dropdown" aria-expanded="false">
                N
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                <li><Link className="dropdown-item" to="/login">Sign out</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar