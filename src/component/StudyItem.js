import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NoteContext from '../context/notes/NoteContext';
function StudyItem(props) {
    const { no, image, heading, description } = props.info;
    const navigate = useNavigate()
    const context = useContext(NoteContext)
    const { questionItemNo, setItemPageSize, setStudyRelated } = context;
    const handleItemClick = () => {
        context.setQuestionItemNo(no)

        console.log("-------select--", typeof parseInt(no))
        if (parseInt(no) === 1) {
            setItemPageSize(50 + 10)
            console.log("select--", no)
        }
        else if (parseInt(no) === 2) {
            setItemPageSize(25 + 10)
            console.log("select--", no)
        }
        else if (parseInt(no) === 3) {
            setItemPageSize(30 + 10)
            console.log("select--", no)
        }
        else if (parseInt(no) === 4) {
            setItemPageSize(10 + 10)
            console.log("select--", no)
        }
        else if (parseInt(no) === 5) {
            setItemPageSize(23 + 10)
            console.log("select--", no)
        }
        else if (parseInt(no) === 6) {
            setItemPageSize(23 + 10)
            console.log("select--", no)
        }
        navigate("/singlestudyitem");
    }
    const questionItem = [
        {
            image: "images/top_question2.png"
        }
    ]
    return (
        <>
            <div onClick={handleItemClick} className="border col-3 d-flex" style={{ padding: "8px", borderWidth: "2px", borderColor: "pink", borderBlockStyle: "solid", borderRadius: "0.5rem", background: "#d0badb" }}>
                <img style={{ cursor: "grab", borderRadius: "4px", width: "72px", height: "72px", marginRight: "0.875rem" }} src={image} alt="Error" />
                <div className="d-flex" style={{ cursor: "grab", fontFamily: "Kalnia', serif", flexDirection: "column", justifyContent: "center" }}>
                    <h6 onClick={() => console.log(props.info.image)} style={{ fontSize: "14px" }}>{heading}</h6>
                    <p style={{ fontSize: "12px", margin: "0" }}>{description}</p>
                </div>
            </div>

        </>
    )
}

export default StudyItem