import React from 'react'
import { useContext, useEffect } from "react"
import NoteContext from '../context/notes/NoteContext'
import { Link } from "react-router-dom";

function QuestionItem(props) {
    useEffect(() => {
        console.log("hi")
        console.log(props.Squestion)
    }, [])
    const { Squestion } = props;


    return (
        <>
            <div className=' row' style={{ border: "1px solid black" }}>
                <div className="container col-1" style={{ border: "2px solid black", textDecoration: "none", color: "black" }}>{Squestion.no}</div>
                <Link className="container col-7" style={{border: "2px solid black", textDecoration: "none", color: "black"}}><span className='question-hover'>{Squestion.name}</span></Link>
                <div className="container col-2" style={{ border: "2px solid black", textDecoration: "none", color: "black" }}>{((parseInt(Squestion.accepted) / parseInt(Squestion.submission)) * 100).toFixed(1)}%</div>
                <div className="container col-2" style={{ border: "2px solid black", textDecoration: "none", color: "black" }}>{Squestion.difficulty}</div>
            </div>
        </>
    )
}

export default QuestionItem