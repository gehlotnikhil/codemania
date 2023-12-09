import React, { useEffect, useState } from 'react'

function SingleQuestion() {
    const [outputOfCode, setOutputOfCode] = useState("")

    const objQuestion = [{
        "no": 4,
        "_id": "656f06b1efdda234ed2d46f4",
        "name": "Five sum",
        "description": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
        "difficulty": "Easy",
        "timeComplexity": "O(n)",
        "spaceComplexity": "O(1)",
        "companies": "Amazon Google Microsoft",
        "testcase1": "1 2",
        "testcase2": "3 4",
        "testcase3": "5 6",
        "outputOfTestcase1": "3",
        "outputOfTestcase2": "7",
        "outputOfTestcase3": "11",
        "sampleInput1": "nums1 = [1,3], nums2 = [2]",
        "sampleInput2": "nums1 = [1,2], nums2 = [3,4]",
        "sampleInput3": "nums1 = [8,2], nums2 = [9,4]",
        "sampleOutput1": "2.00",
        "sampleOutput2": "2.50",
        "sampleOutput3": "2.87",
        "accepted": "12",
        "submission": "120",
        "like":"12",
        "dislike":"3",
        "constraint1":"1 <= n,m <= 105",
        "constraint2":"1 <= a1[i], a2[j] <= 106",
        "__v": 0
    }]
    useEffect(() => {

        console.log(objQuestion)
    }, [])

    return (
        <>
            <div className='mx-2 my-1'>
                <div className="d-flex">
                    <div style={{ width: "50%",padding: "20px" }}>
                        <div style={{}}>
                            <h5>{objQuestion[0].no}. {objQuestion[0].name}</h5>
                        </div>
                        <div style={{}} className='d-flex'>
                            <pre><span className={`${objQuestion[0].difficulty === "Easy"?"text-success":(objQuestion[0].difficulty==="Medium"?"text-warning":"text-danger")}`}>{objQuestion[0].difficulty}</span>   &#128077; {objQuestion[0].like}  &#128078; {objQuestion[0].dislike} </pre>
                        </div>
                        <div className="d-flex">
                            <pre>Company Tags: {objQuestion[0].companies}</pre>
                        </div>
                        <div className="">
                            <p>{objQuestion[0].description}</p>
                        </div>
                        <div>
                            <div className='my-2' >
                                <h6>Example 1</h6>
                                <div className='px-1 py-2' style={{border:"1px solid black",backgroundColor:"grey",borderRadius:"4px"}}>
                                    <h6>Input: {objQuestion[0].sampleInput1}</h6>
                                    <h6>Output: {objQuestion[0].sampleOutput1}</h6>
                                </div>
                            </div>
                            <div className='my-2' >
                                <h6>Example 2</h6>
                                <div className='px-1 py-2' style={{border:"1px solid black",backgroundColor:"grey",borderRadius:"4px"}}>
                                    <h6>Input: {objQuestion[0].sampleInput2}</h6>
                                    <h6>Output: {objQuestion[0].sampleOutput2}</h6>
                                </div>
                            </div>
                            <div className='my-2' >
                                <h6>Example 3</h6>
                                <div className='px-1 py-2' style={{border:"1px solid black",backgroundColor:"grey",borderRadius:"4px"}}>
                                    <h6>Input: {objQuestion[0].sampleInput3}</h6>
                                    <h6>Output: {objQuestion[0].sampleOutput3}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="my-4">
                   
                                <h6>Expected Time Complexity: {objQuestion[0].timeComplexity}</h6>
                                <h6>Expected Space Complexity: {objQuestion[0].spaceComplexity}</h6>
      
                        </div>
                        <div className='my-4'>
                            <h6>Constraint</h6>
                            <ul>
                                <li>{objQuestion[0].constraint1}</li>
                                <li>{objQuestion[0].constraint2}</li>
                            </ul>
                        </div>
                        <div className="my-4">
                            <pre>Accepted: {objQuestion[0].accepted} | Submission: {objQuestion[0].submission} | Acceptance Rate: {parseFloat((objQuestion[0].accepted/objQuestion[0].submission)*100).toFixed(2)}%</pre>
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <div id="editor-container">
                            <div className=' bg-dark py-1 px-1 d-flex '>
                                <button type="button" className='btn btn-primary mx-2'>Java</button>
                                <button type="button" className='btn btn-success ms-auto mx-2 text-white'>Submit</button>

                            </div>
                            <textarea id="editor-question" placeholder={`Write your Java code here...
Use Name of the Class: Solution`} rows="7" defaultValue={`class Solution{
    public static void main(String[] args) {
        
    }
}`}></textarea>

                            <div className=' bg-dark py-1 px-1 d-flex '>
                                <button type="button" className='btn btn-primary mx-2'>Testcase</button>
                                <button type="button" className='btn btn-primary mx-2'>Result</button>
                            </div>
                            <textarea id="editor-output" placeholder="" rows="3" value={outputOfCode} ></textarea>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleQuestion