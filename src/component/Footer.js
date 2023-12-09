import React from 'react'
import { Link, useLocation } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="bg-light text-center ">
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2023 Copyright:
          <Link className="text-dark" href="https://mdbootstrap.com/">codemania.com</Link>
        </div>

      </footer>
    </div>
  )
}

export default Footer