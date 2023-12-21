import React from 'react'
import StudyItem from './StudyItem'
import ProfileStudyItem from './ProfileStudyItem'
function ProfileStudyPlan() {
  const studyQuestion = [
    {
      no: "1",
      heading: "Top Interview 50",
      description: "Must-do for Interview Preparation",
      image: "../images/question_item_4.png"
    },
    {
      no: "2",
      heading: "Codemania-25",
      description: "Ace coding Interview with 25",
      image: "../images/question_item_1.png"
    }
    ,
    {
      no: "3",
      heading: "30 days of Java",
      description: "Learn Java Basic with 30 Q's",
      image: "../images/java1.png"
    },
    {
      no: "4",
      heading: "Dyanmic Programming",
      description: "10 Essential DP Pattern",
      image: "../images/dp.png"
    },
    {
      no: "5",
      heading: "Amazon Spring 23 High Frequency",
      description: "23 Recent Q's to Prepare Amazon Interview",
      image: "../images/question_item_5.png"
    },
    {
      no: "6",
      heading: "Google Spring 23 High Frequency",
      description: "23 Recent Q's to Prepare Amazon Interview",
      image: "../images/question_item_6.png"
    }
  ]
  return (
    <div className='container my-2' style={{padding:"0"}}>
      <div>
        <h1 style={{fontSize:"25px",fontWeight:"500"}}>Related Plan</h1>
      </div>
      <div style={{
        minHeight: "200px",
        width: "100%",
        overflow:"scroll"
      }} className="row " >
        
        {
          studyQuestion.map((n) => {
            return <ProfileStudyItem key={n.no} info={n} />
          })
        }
      </div>

    </div>
  )
}

export default ProfileStudyPlan