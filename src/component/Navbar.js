import React from 'react'
import { Link,useLocation } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{background: "#6d0375 !important"}} >
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">Codemania</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/playground">Playground</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled text-white" aria-disabled="true" to="/admin">Admin</Link>
              </li>
            </ul>
          </div>
          <div class="d-flex">
            <Link className="btn btn-outline-success text-white border-light" to="/login" role="button">Sign out</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar