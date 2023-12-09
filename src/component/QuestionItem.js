import React from 'react'
import { useContext, useEffect } from "react"
import NoteContext from '../context/notes/NoteContext'
import { Link ,useNavigate} from "react-router-dom";

function QuestionItem(props) {
    const { Squestion } = props;
    useEffect(() => {
        console.log("hi")
        console.log(Squestion.name)
    }, [])

    const navigate = useNavigate()

    const clickOnQuestion = ()=>{
        console.log(Squestion+"----"+Squestion.no)
        localStorage.setItem("singleQuestionNo",Squestion.no )
        navigate("/singlequestion")
    }
    



    return (
        <>
            <div className=' row' style={{ border: "1px solid black" }}>
                <div className="container col-1" style={{ border: "2px solid black", textDecoration: "none", color: "black" }}>{Squestion.no}</div>
                <div  className={`container col-7 `} style={{border: "2px solid black", textDecoration: "none", color: "black"}}><span className='question-hover'  onClick={clickOnQuestion} >{Squestion.name}</span></div>
                <div className="container col-2" style={{ border: "2px solid black", textDecoration: "none", color: "black" }}>{((parseInt(Squestion.accepted) / parseInt(Squestion.submission)) * 100).toFixed(1)}%</div>
                <div className={`container col-2 ${Squestion.difficulty === "Easy"?"text-success":(Squestion.difficulty==="Medium"?"text-warning":"text-danger")}`} style={{ border: "2px solid black", textDecoration: "none", color: "black" }}>{Squestion.difficulty}</div>
            </div>
        </>
    )
}

export default QuestionItem