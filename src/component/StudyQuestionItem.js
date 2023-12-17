import React from 'react'
import { useContext, useEffect } from "react"
import NoteContext from '../context/notes/NoteContext'
import { Link ,useNavigate} from "react-router-dom";

function StudyQuestionItem(props) {
    const { Squestion } = props;
    useEffect(() => {
        
        console.log("hi")
        console.log(Squestion.name)
    }, [])
    const context = useContext(NoteContext);
    let {singleQuestionNo,setSingleQuestionNo} = context;

    const navigate = useNavigate()

    const clickOnQuestion = (e)=>{
        console.log(Squestion+"----"+Squestion.no)
        setSingleQuestionNo(Squestion.no)
        navigate("/singlequestion")
    }
    



    return (
        <>
            <div className=' row ' style={{ border: "1px solid black" }}>
                <div  className={`container col-8 `} style={{padding:"2px 2rem",border: "1px solid black",borderRight:"none ", textDecoration: "none", color: "black"}}><Link  className='question-hover' onClick={clickOnQuestion}   style={{color:"black",textDecoration:"none"}} to ="/singlequestion" >{Squestion.name}</Link></div>
                <div className={`container col-4 ${Squestion.difficulty === "Easy"?"text-success":(Squestion.difficulty==="Medium"?"text-warning":"text-danger")}`} style={{padding:"2px 2rem",border: "1px solid black",borderLeft:"none ", textDecoration: "none", color: "black" }}>{Squestion.difficulty}</div>
            </div>
        </>
    )
}

export default StudyQuestionItem