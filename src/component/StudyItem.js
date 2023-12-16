import React from 'react'
function StudyItem(props) {
    const {no,image,heading,description} = props.info;
    return (
        <>
        <div className="border col-3 d-flex" style={{padding:"8px",borderWidth:"2px",borderColor:"pink",borderBlockStyle:"solid",borderRadius:"0.5rem",background: "#d0badb"}}>
                <img style={{borderRadius: "4px",width:"72px",height:"72px",marginRight: "0.875rem"}} src={image}  alt="Error" />
                <div className="d-flex" style={{fontFamily:"Kalnia', serif", flexDirection:"column",justifyContent:"center"}}>
                <h6 onClick={()=>console.log(props.info.image)} style={{fontSize:"14px"}}>{heading}</h6>
                <p style={{fontSize:"12px",margin:"0"}}>{description}</p>
                </div>
        </div>
        </>
    )
}

export default StudyItem