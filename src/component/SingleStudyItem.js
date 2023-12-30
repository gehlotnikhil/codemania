import React from 'react'
import { useContext, useEffect, useState } from 'react'
import NoteContext from '../context/notes/NoteContext'
import StudyQuestionItem from './StudyQuestionItem';
import { useNavigate, Link } from 'react-router-dom';
function SingleStudyItem() {
  const context = useContext(NoteContext);
  const { questionItemNo, itemPageSize,setQuestionItemNo, setItemPageSize, setStudyRelated } = context;
  const [imgS, setImgS] = useState("")
  const [heading, setHeading] = useState("")
  const navigate = useNavigate()

  const [studyItemRelated, setStudyItemRelated] = useState({
    topR: "",
    code25: "",
    javaR: "",
    dynamicR: "",
    amazonR: "",
    googleR: ""
  })
  const [diffQuestionNo, setDiffQuestionNo]  = useState(0)
  useEffect(() => {
    console.log("no---", context.questionItemNo)
    console.log("studyQuestion----", context.question)
    console.log("pagesize----", itemPageSize)
    changeCurrentItem()
  }, [])
  const changeCurrentItem = (e)=>{
    let select = context.questionItemNo
    if(e){
    console.log(e,"nikhil---n--")
    select = e;
    }
    switch (parseInt(select)) {
      case 1: setStudyItemRelated({
        topR: "d-none",
        code25: "",
        javaR: "",
        dynamicR: "",
        amazonR: "",
        googleR: ""
      })
        setHeading("Top Interview 50");
      setDiffQuestionNo(0)
        setImgS("images/top_question2.png");
        break;
      case 2: setStudyItemRelated({
        topR: "",
        code25: "d-none",
        javaR: "",
        dynamicR: "",
        amazonR: "",
        googleR: ""
      })
        setHeading("Codemania 25");
      setDiffQuestionNo(5)
        setImgS("images/aim2.png");
        break;
      case 3: setStudyItemRelated({
        topR: "",
        code25: "",
        javaR: "d-none",
        dynamicR: "",
        amazonR: "",
        googleR: ""
      })
        setHeading("30 days of Java");
      setDiffQuestionNo(10)
        setImgS("images/java5.png");
        break;
      case 4: setStudyItemRelated({
        topR: "",
        code25: "",
        javaR: "",
        dynamicR: "d-none",
        amazonR: "",
        googleR: ""
      })
        setHeading("Dynamic Programming");
      setDiffQuestionNo(15)
        setImgS("images/dp2.png");
        break;
      case 5: setStudyItemRelated({
        topR: "",
        code25: "",
        javaR: "",
        dynamicR: "",
        amazonR: "d-none",
        googleR: ""
      })
        setHeading("Amazon Spring 23 High Frequency");
      setDiffQuestionNo(20)
        setImgS("images/amazon_icon_2.png");
        break;
      case 6: setStudyItemRelated({
        topR: "",
        code25: "",
        javaR: "",
        dynamicR: "",
        amazonR: "",
        googleR: "d-none"
      })
        setHeading("Google Spring 23 High Frequency");
      setDiffQuestionNo(25)
        setImgS("images/google3.png");
        break;
    }
  }
  const handleLinkCLick = ()=>{

  }


  return (
    <div >
      {/* <h1>Study Item</h1> */}
      <img src={imgS} alt="" style={{ width: "19vw", height: " 26%", position: " absolute", top: "110px", left: " 12pc" }} srcSet="" />
      <h1 style={{ position: "absolute", left: "28pc", top: "10pc", color: "white" }}>{heading}</h1>
      <img src="images/ai-2.jpg" alt="" srcSet="" height="260px" width="100%" />
      <div className='d-flex container' style={{ flexDirection: "row" }}>
        <div className="mx-3 my-3 px-4" style={{ width: "100%" }}>
          <div className=' row' style={{ border: "1px solid black" }}>
            <div className="container col-8" style={{ padding: "2px 2rem", border: "1px solid black", borderRight: "none " }}>Title</div>
            <div className="container col-4" style={{ padding: "2px 2rem", border: "1px solid black", borderLeft: "none " }}>Difficulty</div>
          </div>
          {
            context.question.map((n) => {
              if (n.no >= 11+diffQuestionNo && (n.no <= (itemPageSize)+diffQuestionNo))
                return <StudyQuestionItem key={n.no} Squestion={n} />
            })
          }
        </div>
        <div style={{ width: "50%" }} className='mx-5'>
          <div className='my-4'>
            <h5 className='mx-2 my-2' style={{ fontWeight: "500" }}>Summary</h5>
            <ul>
              <li style={{ fontSize: "13px" }}>150 Original & Classic Questions</li>
              <li style={{ fontSize: "13px" }}>Covers comprehensive interview topics</li>
              <li style={{ fontSize: "13px" }}>Best for 3+ months of prep time</li>
              <li style={{ fontSize: "13px" }}>Problems support high-quality editorials</li>
            </ul>
          </div>
          <div className="my-5">
            <h5 className=' my-3' style={{ fontWeight: "500" }}>Related</h5>
            <div className={`mx-2 d-flex my-2 ${studyItemRelated.topR}`} style={{ margin: "0.8rem 0.5rem", flexDirection: "row" }}>
              <img src="images/question_item_4.png" alt="" height="50px" width="50px" />
              <Link onClick={()=>changeCurrentItem(1)}  className="mx-2 my-2">Top Interview 50</Link>
            </div>
            <div className={`mx-2 d-flex my-2 ${studyItemRelated.code25}`} style={{ margin: "0.8rem 0.5rem", flexDirection: "row" }}>
              <img src="images/question_item_1.png" alt="" height="50px" width="50px" />
              <Link onClick={()=>changeCurrentItem(2)}  className="mx-2 my-2">Codemania-25</Link>
            </div>
            <div className={`mx-2 d-flex my-2 ${studyItemRelated.javaR}`} style={{ margin: "0.8rem 0.5rem", flexDirection: "row" }}>
              <img src="images/java1.png" alt="" height="50px" width="50px" />
              <Link onClick={()=>changeCurrentItem(3)}  className="mx-2 my-2">3o days of Java</Link>
            </div>
            <div className={`mx-2 d-flex my-2 ${studyItemRelated.dynamicR}`} style={{ margin: "0.8rem 0.5rem", flexDirection: "row" }}>
              <img src="images/question_item_4.png" alt="" height="50px" width="50px" />
              <Link onClick={()=>changeCurrentItem(4)}  className="mx-2 my-2 ">Dyanmic Programming</Link>
            </div>
            <div className={`mx-2 d-flex my-2 ${studyItemRelated.amazonR}`} style={{ margin: "0.8rem 0.5rem", flexDirection: "row" }}>
              <img src="images/question_item_5.png" alt="" height="50px" width="50px" />
              <Link onClick={()=>changeCurrentItem(5)}  className="mx-2 my-2">Amazon Spring 23 High Frequency</Link>
            </div>
            <div className={`mx-2 d-flex my-3 ${studyItemRelated.googleR}`} style={{ margin: "0.8rem 0.8rem", flexDirection: "row", position: "relative", top: "-12px" }}>
              <img src="images/question_item_6.png" alt="" height="50px" width="50px" />
              <Link onClick={()=>changeCurrentItem(6)} className="mx-2 my-1">Google Spring 23 High Frequency</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleStudyItem