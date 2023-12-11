import React, { useContext, useEffect, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import { useNavigate } from 'react-router-dom'
import QuestionItem from './QuestionItem'
function Question() {
    const [page, setPage] = useState([1, 10, 1])
    const [btnPrev, setBtnPrev] = useState("")
    const [btnNext, setBtnNext] = useState("")
    const onHandlePrev = () => {
        let a1 = page[0];
        let a2 = page[1];
        let a3 = page[2];
        a1 = a1 - 10;
        a2 = a2 - 10;
        a3 = a3 - 1
        setPage([a1, a2, a3]);
    }
    const onHandleNext = () => {
        let a1 = page[0];
        let a2 = page[1];
        let a3 = page[2];
        a1 = a1 + 10;
        a2 = a2 + 10;
        a3 = a3 + 1
        setPage([a1, a2, a3]);
    }

    const context = useContext(NoteContext)
    let { question, getQuestion, setDistributedQuestion, distributedQuestion } = context
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem("token") === "" || (localStorage.getItem("token") === null)) {
            localStorage.setItem("username", "")
            navigate("/login")
        }
        else {
            getQuestion()
            console.log(question)
        }

        console.log("q----", localStorage.getItem("token"))
        // eslint-disable-next-line
        console.log("ready----", question.length)
        setDistributedQuestion([question[0]])
        let n = Math.ceil(question.length / 10);
        if (page[2] === 1) {
            setBtnPrev("disabled");
        } else {
            setBtnPrev("");
        }
        if (page[2] === n) {
            setBtnNext("disabled");
        } else {
            setBtnNext("");
        }

    }, [])
    useEffect(() => {
        let n = Math.ceil(question.length / 10);
        if (page[2] === 1) {
            setBtnPrev("disabled");
        } else {
            setBtnPrev("");
        }
        if (page[2] === n) {
            setBtnNext("disabled");
        } else {
            setBtnNext("");
        }
    }, [page])

    useEffect(() => {
        console.log("is it--", distributedQuestion)

    }, [distributedQuestion])




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
                        if (n.no >= page[0] && n.no <= page[1])
                            return <QuestionItem Squestion={n} key={n._id} />
                    })
                }

                <div className=" d-flex justify-content-end" style={{ margin: "5px 0px" }}>
                    <button className={`btn btn-success ${btnPrev}`} onClick={onHandlePrev} style={{ marginLeft: "15px" }}>
                        Prev
                    </button>
                    <button className={`btn btn-success ${btnNext}`} onClick={onHandleNext} style={{ marginLeft: "15px" }}>
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default Question