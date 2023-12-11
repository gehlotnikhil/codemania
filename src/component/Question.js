import React, { useContext, useEffect,useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useNavigate } from 'react-router-dom'
import QuestionItem from './QuestionItem'
function Question() {
    const onHandlePrev = ()=>{}
    const onHandleNext = ()=>{}
    const context = useContext(NoteContext)
    let { question, getQuestion } = context
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token") === "" || (localStorage.getItem("token")===null)) {
            localStorage.setItem("username", "")
            navigate("/login")
        }
        else {
            getQuestion()
            console.log(question)
        }
        
        console.log("q----", localStorage.getItem("token"))
        // eslint-disable-next-line
        console.log("ready----",question) 
    }, [])
    


    return (
        <>
            <div className="  my-1" style={{ width: "73%" }}>
                <div className=' row' style={{ border: "1px solid black" }}>
                    <div className="container col-1" style={{ border: "2px solid black" }}>No.</div>
                    <div className="container col-7" style={{ border: "2px solid black" }}>Title</div>
                    <div className="container col-2" style={{ border: "2px solid black" }}>Acceptance</div>
                    <div className="container col-2" style={{ border: "2px solid black" }}>Difficulty</div>
                </div>

                {
                    question.map((n) => {
                        // console.log("check-", n.name)
                        return <QuestionItem Squestion={n} key={n._id} />
                    })
                }

            <div className=" d-flex justify-content-end" style={{margin:"5px 0px"}}>
                <button className='btn btn-success' onClick={onHandlePrev} style={{marginLeft:"15px"}}>
                    Prev
                </button>
                <button className='btn btn-success' onClick={onHandleNext} style={{marginLeft:"15px"}}>
                    Next
                </button>
            </div>
            </div>
        </>
    )
}

export default Question