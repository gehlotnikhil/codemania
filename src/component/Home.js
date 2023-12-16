import React from 'react'
import Question from "../component/Question"
import StudyPlan from "./StudyPlan"
function Home() {

  return (
    <>
      <div className="container">
        <StudyPlan />
      </div>
      <div className="container">
        <Question />
      </div>

    </>
  )
}

export default Home