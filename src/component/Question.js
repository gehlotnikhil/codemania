import React, { useContext, useEffect } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useNavigate } from 'react-router-dom'
import QuestionItem from './QuestionItem'
function Question() {
    const context = useContext(NoteContext)
    let { question, getQuestion } = context
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token") !== "") {
            getQuestion()
            console.log(question)
        }
        else{
            localStorage.setItem("username","")
            navigate("/login")
        }
        console.log("q----",localStorage.getItem("token"))
        // eslint-disable-next-line
    }, [])


    return (
        <div className="  my-5" style={{ width: "73%" }}>
            <div className=' row' style={{ border: "1px solid black" }}>
                <div className="container col-1" style={{ border: "2px solid black" }}>No.</div>
                <div className="container col-7" style={{ border: "2px solid black" }}>Title</div>
                <div className="container col-2" style={{ border: "2px solid black" }}>Acceptance</div>
                <div className="container col-2" style={{ border: "2px solid black" }}>Difficulty</div>
            </div>

            {
                question.map((n) => {
                    console.log("check-", n.name)
                    return <QuestionItem Squestion={n} key={n._id} />
                })
            }

        </div>
    )
}

export default Question