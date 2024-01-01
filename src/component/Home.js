import React,{useEffect} from 'react'
import Question from "../component/Question"
import StudyPlan from "./StudyPlan"
import { useSelector,useDispatch } from 'react-redux';

function Home() {
  const myName = useSelector((state)=> state.name.name)
  const myOriginalName = useSelector((state)=> state.name.originalName)
  
  useEffect(() => {
    
  console.log("123-",myName,"---",myOriginalName)
  
  }, [])
  
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