import React from 'react'
import StudyPlan from './StudyPlan'
import ProfileStudyPlan from './ProfileStudyPlan'
import NoteContext from '../context/notes/NoteContext'
import { useContext, useRef, useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Profile() {
  const context = useContext(NoteContext)
  let {original,setOriginal} = useContext
  // Editing Note
  const editNote = async () => {
    //API CALL
    const response = await fetch(`https://codemania-backend-production.up.railway.app/api/auth/update/${localStorage.getItem("id")}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-header": localStorage.getItem("token")
      },
      body: JSON.stringify(update),
    });
    const json = await response.json();
    console.log("edited----",json)

    //Logic
    console.log("Edited - ", localStorage.getItem("id"))
    localStorage.setItem("name",update.name)
    localStorage.setItem("username",update.username)
    localStorage.setItem("email",update.email)
    localStorage.setItem("mobile",update.mobile)
    localStorage.setItem("address",update.address)
    localStorage.setItem("institude",update.institude)

    localStorage.setItem("originalname",update.name)
     localStorage.setItem("originalusername",update.username)
      localStorage.setItem("originalemail",update.email)
      localStorage.setItem("originalmobile",update.mobile)
      localStorage.setItem("originaladdress",update.address)
      localStorage.setItem("originalinstitude",update.institude)


  }
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  const handleChange = () => {
    editNote(update)
    localStorage.setItem("name",update.name)
    localStorage.setItem("username",update.username)
    localStorage.setItem("email",update.email)
    localStorage.setItem("mobile",update.mobile)
    localStorage.setItem("address",update.address)
    localStorage.setItem("institude",update.institude)
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  };
  const [update, setUpdate] = useState({
    name: localStorage.getItem("name"),
    username: localStorage.getItem("username"),
    email: localStorage.getItem("email"),
    mobile: (localStorage.getItem("mobile") === "Unknown" ? "" : localStorage.getItem("mobile")),
    address: (localStorage.getItem("address") === "Unknown" ? "" : localStorage.getItem("address")),
  });

  const onChanges = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value })
    console.log(update)
  }
  
  
  
  return (
    <>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Name: </label>
            <input name="name" onChange={onChanges} value={update.name} type="text" className="form-control" id="exampleFormControlInput1" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">Username: </label>
            <input name="username" onChange={onChanges} value={update.username} type="text" className="form-control" id="exampleFormControlInput2" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput3" className="form-label">Email: </label>
            <input name="email" onChange={onChanges} value={update.email} type="text" className="form-control" id="exampleFormControlInput3" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput4" className="form-label">Mobile no: </label>
            <input name="mobile" onChange={onChanges} value={update.mobile} type="text" className="form-control" id="exampleFormControlInput4" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput5" className="form-label">Address: </label>
            <input name="address" onChange={onChanges} value={update.address} type="text" className="form-control" id="exampleFormControlInput5" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput5" className="form-label">Institude: </label>
            <input name="institude" onChange={onChanges} value={update.institude} type="text" className="form-control" id="exampleFormControlInput5" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <section >
        <div className="container py-2" style={{ marginTop: "1rem" }}>
          <div className="row" >
            <div className="col-lg-4">
              <div className="card mb-4" style={{ paddingBottom: "1.07pc" }}>
                <div className="card-body text-center">
                  <img src="images/profile2.png" alt="avatar"
                    className=" img-fluid" style={{ borderRadius: "1rem", width: "150px" }} />
                  <h5 className="my-3">{localStorage.getItem("name")}</h5>
                  <p className="text-muted mb-1">{localStorage.getItem("username")}</p>
                  <Button style={{marginTop:"19px"}} variant="primary" className={`${localStorage.getItem("originalemail")===localStorage.getItem("email")?"":"d-none"}`} onClick={handleShow}>
                    Edit Profile
                  </Button>
                </div>
              </div>

            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{localStorage.getItem("name")}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Username: </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{localStorage.getItem("username")}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{localStorage.getItem("email")}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{localStorage.getItem("mobile") === "Unknown" ? "Unknown" : localStorage.getItem("mobile")==="undefined"?"":localStorage.getItem("mobile")}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{localStorage.getItem("address") === "Unknown" ? "Unknown" :localStorage.getItem("address")==="undefined"?"":localStorage.getItem("address")}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Instituation</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{localStorage.getItem("institude")==="undefined"?"":localStorage.getItem("institude")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <ProfileStudyPlan />
        </div>
      </section>
    </>
  )
}

export default Profile