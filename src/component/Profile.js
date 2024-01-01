import React from 'react'
import StudyPlan from './StudyPlan'
import ProfileStudyPlan from './ProfileStudyPlan'
import NoteContext from '../context/notes/NoteContext'
import { useContext, useRef, useState } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector,useDispatch } from 'react-redux';
import {Sid,Stoken,Sname,Susername,Sinstitude,Semail,Smobile,Saddress,SoriginalName,Soriginalusername,Soriginalinstitude,Soriginalemail,Soriginalmobile,Soriginaladdress} from "../actions/index"

function Profile() {
  const dispatch = useDispatch()
  const name = useSelector((state)=> state.name.name)
  const id= useSelector((state)=> state.name.id)
  const token= useSelector((state)=> state.name.token)
  const username= useSelector((state)=> state.name.username)
  const institude=useSelector((state)=> state.name.institude)
  const email=  useSelector((state)=> state.name.email)
  const mobile= useSelector((state)=> state.name.mobile)
  const address=useSelector((state)=> state.name.address)
 
  const originalname= useSelector((state)=> state.name.originalName)
  const originalusername= useSelector((state)=> state.name.originalusername)
  const originalinstitude= useSelector((state)=> state.name.originalinstitude)
  const originalemail= useSelector((state)=> state.name.originalemail)
  const originalmobile= useSelector((state)=> state.name.originalmobile)
  const originaladdress= useSelector((state)=> state.name.originaladdress)


  const context = useContext(NoteContext)
  let {original,setOriginal} = useContext
  // Editing Note
  const editNote = async () => {
    //API CALL
    const response = await fetch(`http://localhost:5000/api/auth/update/${localStorage.getItem("id")}`, {
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
    localStorage.setItem("institude",update.institude)
    localStorage.setItem("email",update.email)
    localStorage.setItem("mobile",update.mobile)
    localStorage.setItem("address",update.address)

    dispatch(Sname(update.name))
    dispatch(Susername(update.username))
    dispatch(Sinstitude(update.institude))
    dispatch(Semail(update.email))
    dispatch(Smobile(update.mobile))
    dispatch(Saddress(update.address))



    localStorage.setItem("originalname",update.name)
     localStorage.setItem("originalusername",update.username)
      localStorage.setItem("originalemail",update.email)
      localStorage.setItem("originalmobile",update.mobile)
      localStorage.setItem("originaladdress",update.address)
      localStorage.setItem("originalinstitude",update.institude)

      dispatch(SoriginalName(update.name))
      dispatch(Soriginalusername(update.username))
      dispatch(Soriginalinstitude(update.institude))
      dispatch(Soriginalemail(update.email))
      dispatch(Soriginalmobile(update.mobile))
      dispatch(Soriginaladdress(update.address))
  }
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
  };
  const handleChange = () => {
    editNote(update)
    localStorage.setItem("name",update.name)
    localStorage.setItem("username",update.username)
    localStorage.setItem("institude",update.institude)
    localStorage.setItem("email",update.email)
    localStorage.setItem("mobile",update.mobile)
    localStorage.setItem("address",update.address)

    dispatch(Sname(update.name))
    dispatch(Susername(update.username))
    dispatch(Sinstitude(update.institude))
    dispatch(Semail(update.email))
    dispatch(Smobile(update.mobile))
    dispatch(Saddress(update.address))
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  };
  const [update, setUpdate] = useState({
    name: name,
    username: username,
    email: email,
    mobile: (mobile),
    address: (address),
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
                  <h5 className="my-3">{name}</h5>
                  <p className="text-muted mb-1">{username}</p>
                  <Button style={{marginTop:"19px"}} variant="primary" className={`${originalemail===email?"":"d-none"}`} onClick={handleShow}>
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
                      <p className="text-muted mb-0">{name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Username: </p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{username}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{email}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{mobile}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{address}</p>
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Instituation</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{institude}</p>
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